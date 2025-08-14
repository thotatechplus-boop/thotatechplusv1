import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

function parse(md: string) {
  let body = md, meta: any = {};
  if (md.startsWith("---")) {
    const end = md.indexOf("---", 3);
    if (end !== -1) {
      const header = md.slice(3, end).trim().split("\n");
      meta = {};
      for (const line of header) {
        const [k, ...rest] = line.split(":");
        if (k && rest) meta[k.trim().toLowerCase()] = rest.join(":").trim();
      }
      body = md.slice(end + 3).trim();
    }
  }
  return { meta, body };
}

export default function Post({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "content", "blog", `${params.slug}.md`);
  if (!fs.existsSync(file)) return notFound();
  const md = fs.readFileSync(file, "utf8");
  const { meta, body } = parse(md);
  return (
    <article className="container py-12 prose prose-invert">
      <h1>{meta.title || params.slug}</h1>
      {meta.date ? <p><small>{meta.date}</small></p> : null}
      <div dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, "<br/>") }} />
    </article>
  );
}

import fs from "node:fs";
import path from "node:path";

type Post = { slug: string; title: string; date: string; description: string; };

function parseFrontmatter(md: string) {
  const fm = { title: '', date: '', description: '' };
  if (md.startsWith("---")) {
    const end = md.indexOf("---", 3);
    if (end !== -1) {
      const header = md.slice(3, end).trim().split("\n");
      for (const line of header) {
        const [k, ...rest] = line.split(":");
        if (k && rest) (fm as any)[k.trim().toLowerCase()] = rest.join(":").trim();
      }
    }
  }
  return fm;
}

export default function BlogIndex() {
  const dir = path.join(process.cwd(), "content", "blog");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  const posts: Post[] = files.map(f => {
    const md = fs.readFileSync(path.join(dir, f), "utf8");
    const fm = parseFrontmatter(md);
    return {
      slug: f.replace(/\.md$/, ""),
      title: fm.title || f.replace(/\.md$/, ""),
      date: fm.date || "",
      description: fm.description || ""
    };
  }).sort((a,b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="card hover:border-brand-red/60 transition">
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <p className="text-xs text-neutral-400">{p.date}</p>
            <p className="text-neutral-300 mt-2">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogs } from "@/lib/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="site-section">
      <div className="section-heading">
        <span className="section-eyebrow">THOUGHTS & NOTES</span>
        <h2 className="section-title">Latest <span>Blogs</span></h2>
        <p className="section-copy">What I&apos;m learning and building, one post at a time.</p>
      </div>

      {blogs.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.url} className="dark-surface flex flex-col rounded-2xl border-2 border-white bg-[#111] p-6 text-white shadow-[6px_6px_0_0_#fff] sm:p-8">
              <div className="flex items-center justify-between gap-3 font-mono text-xs font-bold text-[#9eb4ca]">
                <time dateTime={blog.date}>{blog.date}</time>
                <BookOpen size={18} aria-hidden="true" className="text-[#39d353]" />
              </div>
              <h3 className="mt-6 font-mont text-xl font-black sm:text-2xl">{blog.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">{blog.excerpt}</p>
              {blog.tags?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => <span key={tag} className="rounded-full border border-white/30 px-3 py-1 font-mono text-[10px] font-bold uppercase text-gray-200">{tag}</span>)}
                </div>
              )}
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 font-mono text-xs font-black text-[#39d353] hover:text-[#67ee7d]">
                READ ARTICLE <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="dark-surface rounded-2xl border-2 border-white bg-[#111] px-6 py-12 text-center text-white shadow-[6px_6px_0_0_#fff] sm:py-16">
          <BookOpen size={32} aria-hidden="true" className="mx-auto text-[#39d353]" />
          <h3 className="mt-5 font-mont text-xl font-black">Posts coming soon</h3>
          <p className="mt-2 text-sm text-gray-300">I&apos;ll share my writing here as soon as it&apos;s published.</p>
        </div>
      )}
    </section>
  );
}

// 隱私權政策與服務條款共用的版面：標題、生效日、目錄與各章節
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export type Section = { id: string; title: string; body: ReactNode };

export function LegalDoc({ title, intro, sections }: { title: string; intro: ReactNode; sections: Section[] }) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="text-sm font-medium text-accent-ink">{site.name}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">
          生效日期：{site.effectiveDate}　最後更新：{site.updatedDate}
        </p>
        <div className="mt-6 space-y-3 leading-8">{intro}</div>
      </header>

      <nav aria-label="目錄" className="mt-8 rounded-xl border border-line bg-surface p-5">
        <p className="text-sm font-semibold">目錄</p>
        <ol className="mt-3 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-muted hover:text-accent-ink">
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-xl font-semibold">
              {i + 1}. {s.title}
            </h2>
            <div className="legal-body mt-3 space-y-3 leading-8 text-foreground/90">{s.body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}

/** 條列 */
export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-6">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

/** 資料項目表：項目、內容、用途 */
export function DataTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-surface text-muted">
          <tr>
            <th className="px-4 py-2.5 font-medium">資料項目</th>
            <th className="px-4 py-2.5 font-medium">說明</th>
            <th className="px-4 py-2.5 font-medium">用途</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a} className="border-t border-line align-top">
              <td className="px-4 py-3 font-medium">{a}</td>
              <td className="px-4 py-3">{b}</td>
              <td className="px-4 py-3">{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Mail() {
  return (
    <a href={`mailto:${site.email}`} className="text-accent-ink underline underline-offset-2">
      {site.email}
    </a>
  );
}

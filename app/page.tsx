import Link from "next/link";
import { site } from "@/lib/site";

const FEATURES = [
  { title: "在 LINE 上對話", body: "直接傳訊息給官方帳號，由 AI 理解內容並回覆。" },
  { title: "交辦與提醒", body: "把待辦事項交代給助理，到時間會主動推播提醒。" },
  { title: "LINE 帳號登入", body: "使用 LINE Login 登入網站，查看與管理自己的資料。" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-sm text-accent-ink">{site.nameNote}</p>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{site.name}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{site.description}</p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {FEATURES.map((f) => (
          <li key={f.title} className="rounded-xl border border-line bg-surface p-5">
            <p className="font-semibold">{f.title}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{f.body}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12 rounded-xl border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold">資料與使用規則</h2>
        <p className="mt-2 leading-7 text-muted">使用本服務前，請先閱讀我們如何蒐集與保護你的資料，以及服務的使用規則。</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/privacy" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            隱私權政策
          </Link>
          <Link href="/terms" className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-foreground/40">
            服務條款
          </Link>
        </div>
      </section>
    </div>
  );
}

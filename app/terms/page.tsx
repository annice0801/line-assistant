import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, List, Mail, type Section } from "@/components/LegalDoc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "服務條款",
  description: `使用 ${site.name} 的規則與免責聲明。`,
};

const sections: Section[] = [
  {
    id: "service",
    title: "服務內容",
    body: (
      <>
        <p>本服務是透過 LINE 官方帳號與本網站提供的 AI 助理，主要功能包括：</p>
        <List items={["在 LINE 上對話，由 AI 理解並回覆", "記錄你交辦的事項，並在指定時間推播提醒", "使用 LINE Login 登入網站，查看與管理自己的資料"]} />
        <p>本服務目前為免費提供的個人開發專案，功能可能隨時調整。</p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "使用資格與帳號",
    body: (
      <List
        items={[
          "你須擁有有效的 LINE 帳號，並遵守 LINE 的使用條款。",
          "未滿 18 歲者應取得法定代理人同意後才能使用。",
          "你應妥善保管自己的 LINE 帳號，透過你的帳號進行的操作視為你本人的行為。",
        ]}
      />
    ),
  },
  {
    id: "rules",
    title: "使用規則",
    body: (
      <>
        <p>使用本服務時，你同意不從事以下行為：</p>
        <List
          items={[
            "違反中華民國法律、侵害他人權利，或傳送違法、騷擾、歧視、色情、暴力的內容",
            "冒用他人身分，或傳送他人的個人資料、機密資訊",
            "以程式大量傳送訊息、干擾或試圖破解本服務與相關系統",
            "利用本服務產生垃圾訊息、詐騙或誤導他人的內容",
            "將本服務轉售或以商業目的大量使用",
          ]}
        />
        <p>違反上述規則時，我們可以不經通知暫停或終止你使用本服務。</p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI 產生內容的免責聲明",
    body: (
      <List
        items={[
          "本服務的回覆由 AI 自動產生，可能不正確、不完整或已過時，請自行判斷並查證。",
          "AI 回覆不構成醫療、法律、財務、投資或其他專業意見；遇到相關需求請諮詢專業人士。",
          "提醒功能依賴 LINE 平台與網路傳送，可能延遲或失敗；請勿將本服務作為重要事項（例如用藥、截止期限）唯一的提醒方式。",
        ]}
      />
    ),
  },
  {
    id: "content",
    title: "你的內容",
    body: (
      <>
        <p>你傳送給本服務的訊息與資料，權利仍屬於你。你同意我們在提供服務所需的範圍內處理這些內容，包括交由 AI 服務供應商產生回覆，詳見<Link href="/privacy" className="text-accent-ink underline underline-offset-2">隱私權政策</Link>。</p>
        <p>你應確認你有權傳送這些內容，且不侵害他人的權利。</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "第三方服務",
    body: <p>本服務使用 LINE、Anthropic、Vercel、MongoDB Atlas 等第三方服務。這些服務的中斷、變更或錯誤不在我們的控制範圍內，使用時也適用各服務本身的條款。</p>,
  },
  {
    id: "availability",
    title: "服務的變更、暫停與終止",
    body: (
      <List
        items={[
          "我們可能因維護、升級或不可抗力暫停服務，或調整、終止部分或全部功能。",
          "本服務不保證不中斷、無錯誤，也不提供服務等級保證（SLA）。",
          "終止營運前，我們會盡量提前公告；你可以在終止前來信要求取得或刪除你的資料。",
        ]}
      />
    ),
  },
  {
    id: "liability",
    title: "責任限制",
    body: <p>在法律允許的最大範圍內，對於你因使用或無法使用本服務、或依賴 AI 回覆所產生的任何直接或間接損害，我們不負賠償責任。但因我們的故意或重大過失所造成的損害，不在此限。</p>,
  },
  {
    id: "changes",
    title: "條款的修訂",
    body: <p>我們可能修訂本條款，修訂後會公告於本頁並更新「最後更新」日期；重大變更時，會另外透過官方帳號通知。修訂後你繼續使用本服務，即表示同意修訂後的條款。</p>,
  },
  {
    id: "law",
    title: "準據法與管轄",
    body: <p>本條款以中華民國法律為準據法。因本條款或本服務發生的爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。</p>,
  },
  {
    id: "contact",
    title: "聯絡我們",
    body: (
      <p>
        對本條款有任何疑問，請來信 <Mail />。
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="服務條款"
      intro={<p>歡迎使用 {site.name}（以下稱「本服務」），本服務由 {site.operator}（以下稱「我們」）經營。使用本服務前請詳細閱讀以下條款；開始使用即表示你已閱讀並同意本條款與隱私權政策。</p>}
      sections={sections}
    />
  );
}

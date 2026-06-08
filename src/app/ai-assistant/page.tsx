import { Suspense } from "react";
import AiAssistantClient from "./AiAssistantClient";

export const metadata = { title: "AI Assistant" };

export default function AiAssistantPage() {
  return (
    <Suspense fallback={<div className="container-page py-14">Loading…</div>}>
      <AiAssistantClient />
    </Suspense>
  );
}

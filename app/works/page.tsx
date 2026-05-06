import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { WorksView } from "./works-view";

export default function WorksPage() {
  return (
    <div className="relative flex min-h-full flex-col bg-[#fafaf8]">
      <SiteHeader />
      <WorksView />
      <SiteFooter compact />
    </div>
  );
}

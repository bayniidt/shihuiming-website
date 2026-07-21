import SiteShell from "@/components/SiteShell";
import { HomePage } from "@/components/pages/CompanyPages";

export default function Home() {
  return (
    <SiteShell locale="zh">
      <HomePage locale="zh" />
    </SiteShell>
  );
}

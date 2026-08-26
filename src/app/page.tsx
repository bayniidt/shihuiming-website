import SiteShell from "@/components/SiteShell";
import { AboutPage } from "@/components/pages/CompanyPages";

export default function Home() {
  return (
    <SiteShell locale="zh">
      <AboutPage locale="zh" />
    </SiteShell>
  );
}

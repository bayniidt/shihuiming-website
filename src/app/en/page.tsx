import SiteShell from "@/components/SiteShell";
import { AboutPage } from "@/components/pages/CompanyPages";

export default function EnglishHome() {
  return (
    <SiteShell locale="en">
      <AboutPage locale="en" />
    </SiteShell>
  );
}

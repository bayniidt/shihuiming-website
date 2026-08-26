import SiteShell from "@/components/SiteShell";
import { HomePage } from "@/components/pages/CompanyPages";

export default function EnglishHome() {
  return (
    <SiteShell locale="en">
      <HomePage locale="en" />
    </SiteShell>
  );
}

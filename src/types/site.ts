export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  href: string;
  children: { label: string; href: string }[];
}

export interface LabCard {
  image: string;
  title: string;
  delay: string;
}

export interface SiteData {
  navItems: NavItem[];
  footerColumns: FooterColumn[];
  contactInfo: { label: string; value: string }[];
  labCards: LabCard[];
  youshiTitle: string;
  youshiText: string;
  bannerTitle: string;
  bannerSubtitle: string;
}

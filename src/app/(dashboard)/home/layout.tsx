import { SectionI18nProvider } from "@/i18n/SectionI18nProvider";
import sectionNamespaces from "@/i18n/routeNamespaces.generated.json";

/**
 * Home route (`/home`) i18n provider. `/home` lives outside `dashboard/`, so
 * the chrome-only `(dashboard)` layout would otherwise be its sole provider and
 * every home component would render MISSING_MESSAGE.
 */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SectionI18nProvider namespaces={sectionNamespaces.home}>{children}</SectionI18nProvider>;
}

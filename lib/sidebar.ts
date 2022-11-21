export type SidebarEntry = {
  title: string;
  href?: string;
  kind: "group" | undefined;
  pages?: SidebarEntry[];
};

const normalizePath = (path: string) => {
  return path.toLowerCase().replace(/\s+/g, "-");
};

export const getSection = (
  sections: SidebarEntry[],
  path: string
): SidebarEntry | undefined => {
  const basePath = path.replace(/^\//, "").split("/")[1];
  return sections.find((section) => {
    return section.title && normalizePath(section.title) === basePath;
  });
};

export const getSectionTitle = (
  sections: SidebarEntry[],
  path: string
): string | undefined => {
  return getSection(sections, path)?.title;
};

const toFlattenedInternalLinks = (sidebar: SidebarEntry[]): SidebarEntry[] => {
  return sidebar.reduce((acc, value) => {
    // Omit section entries and external links
    const subLinks = toFlattenedInternalLinks(value.pages || []);
    if (!value.href || !value.href.startsWith("/") || value.kind === "group") {
      return [...acc, ...subLinks];
    }
    return [...acc, value, ...subLinks];
  }, [] as SidebarEntry[]);
};

export const getPrevNext = (
  sidebar: SidebarEntry[],
  path: string
): { prev: SidebarEntry | undefined; next: SidebarEntry | undefined } => {
  const flattenedInternalLinks = toFlattenedInternalLinks(sidebar);
  const index = flattenedInternalLinks.findIndex((l) => l.href === path);
  let prev = undefined,
    next = undefined;
  if (index > 0) {
    prev = flattenedInternalLinks[index - 1];
  }
  if (index < flattenedInternalLinks.length - 1) {
    next = flattenedInternalLinks[index + 1];
  }
  return { prev, next };
};

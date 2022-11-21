export default {
  title: "Ribbon",
  orgName: "Ribbon Technologies Inc",
  logo: {
    navbarClassname: "h-8 w-8",
    url: "https://res.cloudinary.com/djp21wtxm/image/upload/v1666834687/Ribbon_dd4xgm.svg",
    darkUrl:
      "https://res.cloudinary.com/djp21wtxm/image/upload/v1666834738/RibbonWhite_kunfov.svg",
  },
  navbar: {
    topLinks: [
      { title: "Support", href: "/" },
      { title: "Sign in", href: "/login" },
    ],
    tabs: [
      { title: "Home", href: "/" },
      {
        title: "Guides",
        href: "/guides",
        referenceHref: "/guides",
      },
      { title: "Reference", href: "/reference" },
      { title: "Changelog", href: "/changelog" },
      { title: "Examples", href: "/examples" },
    ],
  },
  sidebars: {
    guides: [
      {
        title: "Quick start",
        pages: [
          {
            title: "Create a project",
            href: "/guides/quick-start/create-a-project",
          },
          { title: "Edit a page", href: "/guides/quick-start/edit-a-page" },
          {
            title: "Link to a page",
            href: "/guides/quick-start/link-to-a-page",
          },
          {
            title: "Set a template",
            href: "/guides/quick-start/set-a-template",
          },
          {
            title: "Prepare for SEO",
            href: "/guides/quick-start/prepare-for-seo",
          },
          {
            title: "Publish to the web",
            href: "/guides/quick-start/publish-to-the-web",
          },
          {
            title: "Set up a custom domain",
            href: "/guides/quick-start/set-up-a-custom-domain",
          },
        ],
      },
      {
        title: "Basics",
        pages: [
          {
            title: "Project structure",
            href: "/guides/basics/project-structure",
          },
          { title: "Markdown", href: "/guides/basics/markdown" },
          { title: "JSX", href: "/guides/basics/jsx" },
          { title: "MDX", href: "/guides/basics/mdx" },
          { title: "Markdown", href: "/guides/basics/markdoc" },
          { title: "ES modules", href: "/guides/basics/es-modules" },
          { title: "CSS", href: "/guides/basics/css" },
          { title: "Tailwind CSS", href: "/guides/basics/tailwind-css" },
          { title: "Metadata", href: "/guides/basics/metadata" },
        ],
      },
      {
        title: "Publishing",
        pages: [
          {
            title: "Custom domains",
            href: "/guides/publishing/custom-domains",
          },
          { title: "Analytics", href: "/guides/publishing/analytics" },
          { title: "Sitemaps", href: "/guides/publishing/sitemaps" },
          { title: "Favicons", href: "/guides/publishing/favicons" },
        ],
      },
      {
        title: "Layout and design",
        pages: [
          { title: "Templates", href: "/guides/layout-and-design/templates" },
          {
            title: "Responsive designs",
            href: "/guides/layout-and-design/responsive-designs",
          },
          {
            title: "Using colors",
            href: "/guides/layout-and-design/using-colors",
          },
          { title: "Typography", href: "/guides/layout-and-design/typography" },
          {
            title: "Mathematics",
            href: "/guides/layout-and-design/mathematics",
          },
        ],
      },
    ],
  },
  sampleGallery: {
    Develop: [
      {
        title: "Markdoc",
        href: "/guides/develop/cli",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652948650/Markdoc_Playground_caiqqe.svg",
      },
      {
        title: "Projects",
        href: "/guides/develop/projects",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652948516/Motif_UI_Kit_izcgb8.svg",
      },
      {
        title: "Environments",
        href: "/guides/develop/environments",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652948516/Beautiful_Release_Notes_lf9qb0.svg",
      },
    ],
    Databases: [
      {
        title: "MongoDB",
        href: "/guides/databases/mongodb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652950827/Docs_UI_Kit_q0mlmz.svg",
      },
      {
        title: "MySQL",
        href: "/guides/databases/mysql",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652950827/Icons_y6ffug.svg",
      },
      {
        title: "PostgreSQL",
        href: "/guides/databases/postgresql",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652951184/Menus_ljg4im.svg",
      },
    ],
    Deploy: [
      {
        title: "Builds",
        href: "/guides/deploy/builds",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652951051/Markdoc_z4mgjs.svg",
      },
      {
        title: "Integrations",
        href: "/guides/deploy/integrations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652951020/Terminals_bgpao2.svg",
      },
      {
        title: "Monorepo",
        href: "/guides/deploy/monorepo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cover:
          "https://res.cloudinary.com/djp21wtxm/image/upload/v1652951294/Canvas_Draw_e8hhsm.svg",
      },
    ],
  },
};

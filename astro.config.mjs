import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from 'astro-netlify-cms';

// Initialize the CMS object

// Now the registry is available via the CMS object.
//CMS.registerPreviewTemplate('my-template', MyTemplate)

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        
        collections: [
          // Content collections
          {
            name: "blog",
            label: "Blog", 
            folder: "src/content/blog",
            summary: '{{title}} -- {{year}}/{{month}}/{{day}}',
            slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Blog' },
              { name: 'body', widget: 'markdown', label: 'Body' },
            ],
            
          },
          {
            name: "team",
            label: "Team", 
            folder: "src/content/team",
            summary: '{{title}} -- {{year}}/{{month}}/{{day}}',
            slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Team' },
              { name: 'body', widget: 'markdown', label: 'Team' },
            ],
          },
        ],
      },
    }),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
});

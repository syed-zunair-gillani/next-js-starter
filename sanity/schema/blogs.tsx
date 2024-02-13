import { AiFillDatabase } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { VscFileMedia } from "react-icons/vsc";
import { defineField, defineType } from "sanity";

export const blogs = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  groups: [
    {
      title: "Main",
      name: "main",
      icon: AiFillDatabase,
      default: true,
    },
    {
      title: "Media",
      name: "media",
      icon: VscFileMedia,
    },
    {
      title: "SEO",
      name: "seo",
      icon: TbSeo,
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      group: "main",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      group: "main",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      group: "main",
    }),
    {
      name: "content",
      title: "Content",
      type: "array",
      group: "main",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                           be they blind, color-blind, low-sighted; 
                           alternative text is of great help for those 
                           people that can rely on it to have a good idea of 
                           what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    // defineField({
    //  title: 'Written By',
    //  name: 'writtenby',
    //  type: 'reference',
    //  group: "main",
    //  to: [{type: 'users'}],
    // }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      group: "media",
    }),
    defineField({
      name: "metatitle",
      type: "string",
      title: "Meta Title",
      group: "seo",
    }),
    defineField({
      name: "metadescription",
      type: "text",
      title: "Meta Description",
      group: "seo",
    }),
    defineField({
      name: "metaKeywords",
      description: 'please seprate keyword with "," eg:( keyword1, keyword2, ... ) ',
      type: "text",
      title: "Meta Keywords",
      group: "seo",
    }),
  ],
});

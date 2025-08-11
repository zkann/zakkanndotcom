// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true
    },
    draft: {
      type: "boolean",
      description: "Whether the post is a draft",
      default: false
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "List of tags for the post"
    },
    author: {
      type: "string",
      description: "The author of the post",
      default: "Zak Kann"
    },
    updated: {
      type: "date",
      description: "The last updated date of the post",
      required: false
    },
    ogImage: {
      type: "string",
      description: "Open Graph image URL",
      required: false
    },
    keywords: {
      type: "list",
      of: { type: "string" },
      description: "SEO keywords",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", "")
    },
    readingTimeMinutes: {
      type: "number",
      resolve: (doc) => {
        const text = doc.body?.raw || "";
        const words = text.trim().split(/\s+/).length;
        return Math.max(1, Math.ceil(words / 200));
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OH4GYA4Y.mjs.map

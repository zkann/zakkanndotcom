// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
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
      default: "Fractional CTO"
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
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PHRXWDXI.mjs.map

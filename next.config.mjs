import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
};

import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

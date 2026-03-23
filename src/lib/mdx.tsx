import fs from "node:fs";
import path from "node:path";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { ReactElement } from "react";

type BaseFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: string;
  tags?: string[];
};

export type BlogFrontmatter = BaseFrontmatter & {
  author: string;
};

export type CaseStudyFrontmatter = BaseFrontmatter & {
  client: string;
  industry: string;
  services: string[];
  keyMetric: string;
  keyMetricLabel: string;
};

export type TocHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

type ContentEntry<TFrontmatter extends BaseFrontmatter> = {
  frontmatter: TFrontmatter;
  slug: string;
  source: string;
  headings: TocHeading[];
  readingTime: string;
};

const contentRoot = path.join(process.cwd(), "content");

function readDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractHeadings(source: string): TocHeading[] {
  return source
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace(/^##\s+/, "").trim())
    .map((text) => ({
      id: slugify(text),
      text,
      level: 2 as const,
    }));
}

async function parseMdxFile<TFrontmatter extends BaseFrontmatter>(filePath: string): Promise<ContentEntry<TFrontmatter>> {
  const source = fs.readFileSync(filePath, "utf8");
  const { frontmatter } = await compileMDX<TFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    frontmatter,
    slug: frontmatter.slug,
    source,
    headings: extractHeadings(source),
    readingTime: readingTime(source).text,
  };
}

async function listContent<TFrontmatter extends BaseFrontmatter>(folder: "blog" | "case-studies") {
  const files = readDirectory(path.join(contentRoot, folder));
  const entries = await Promise.all(files.map((filePath) => parseMdxFile<TFrontmatter>(filePath)));

  return entries.sort(
    (left, right) => new Date(right.frontmatter.date).getTime() - new Date(left.frontmatter.date).getTime()
  );
}

export async function getAllBlogPosts() {
  return listContent<BlogFrontmatter>("blog");
}

export async function getAllCaseStudies() {
  return listContent<CaseStudyFrontmatter>("case-studies");
}

async function getEntryBySlug<TFrontmatter extends BaseFrontmatter>(folder: "blog" | "case-studies", slug: string) {
  const entries = await listContent<TFrontmatter>(folder);
  return entries.find((entry) => entry.slug === slug) ?? null;
}

export async function getBlogPostBySlug(slug: string) {
  return getEntryBySlug<BlogFrontmatter>("blog", slug);
}

export async function getCaseStudyBySlug(slug: string) {
  return getEntryBySlug<CaseStudyFrontmatter>("case-studies", slug);
}

export async function renderMdx<TFrontmatter extends BaseFrontmatter>(source: string): Promise<{
  content: ReactElement;
  frontmatter: TFrontmatter;
}> {
  return compileMDX<TFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: {
      h2: (props) => (
        <h2
          id={slugify(String(props.children))}
          className="mt-12 text-3xl font-extrabold tracking-tight text-[var(--primary)]"
          {...props}
        />
      ),
      h3: (props) => (
        <h3
          id={slugify(String(props.children))}
          className="mt-8 text-2xl font-bold tracking-tight text-[var(--primary)]"
          {...props}
        />
      ),
      p: (props) => <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]" {...props} />,
      ul: (props) => <ul className="mt-5 list-disc space-y-3 pl-6 text-lg text-[var(--text-muted)]" {...props} />,
      ol: (props) => <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg text-[var(--text-muted)]" {...props} />,
      li: (props) => <li className="pl-1" {...props} />,
      blockquote: (props) => (
        <blockquote className="mt-8 border-l-4 border-[var(--secondary)] bg-[var(--surface-container-low)] px-6 py-4 text-lg italic text-[var(--text)]" {...props} />
      ),
      code: (props) => <code className="rounded bg-slate-900 px-1.5 py-1 font-mono text-sm text-emerald-300" {...props} />,
      pre: (props) => <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm text-slate-100" {...props} />,
      a: (props) => <a className="font-semibold text-[var(--primary-strong)] underline decoration-[var(--secondary-soft)] underline-offset-4" {...props} />,
    },
  });
}

export function paginate<T>(items: T[], page: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: currentPage,
    totalPages,
  };
}

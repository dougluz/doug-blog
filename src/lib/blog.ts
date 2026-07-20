import { type CollectionEntry, getCollection } from "astro:content";

export const ENGLISH_LOCALE = "en" as const;
export const PORTUGUESE_LOCALE = "pt-BR" as const;

export type BlogLocale = typeof ENGLISH_LOCALE | typeof PORTUGUESE_LOCALE;
export type BlogPost = CollectionEntry<"blog">;

export type BlogContent = {
  englishPosts: BlogPost[];
  portuguesePosts: BlogPost[];
  portugueseByEnglishSlug: Map<string, BlogPost>;
};

export async function getBlogContent(): Promise<BlogContent> {
  const posts = await getCollection("blog");
  const englishPosts = posts.filter(
    (post) => post.data.language === ENGLISH_LOCALE
  );
  const portuguesePosts = posts.filter(
    (post) => post.data.language === PORTUGUESE_LOCALE
  );
  const englishSlugs = new Set<string>(englishPosts.map((post) => post.slug));
  const englishBySlug = new Map<string, BlogPost>(
    englishPosts.map((post) => [post.slug, post] as const)
  );
  const portugueseByEnglishSlug = new Map<string, BlogPost>();

  for (const post of portuguesePosts) {
    const englishSlug = post.data.translationOf;

    if (!englishSlug) {
      throw new Error(
        `Portuguese blog post "${post.id}" must define translationOf.`
      );
    }

    if (!englishSlugs.has(englishSlug)) {
      throw new Error(
        `Portuguese blog post "${post.id}" references missing English post "${englishSlug}".`
      );
    }

    if (portugueseByEnglishSlug.has(englishSlug)) {
      throw new Error(
        `More than one Portuguese translation references "${englishSlug}".`
      );
    }

    if (!post.data.draft && englishBySlug.get(englishSlug)?.data.draft) {
      throw new Error(
        `Published Portuguese post "${post.id}" references draft English post "${englishSlug}".`
      );
    }

    portugueseByEnglishSlug.set(englishSlug, post);
  }

  return { englishPosts, portuguesePosts, portugueseByEnglishSlug };
}

export function published(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => !post.data.draft);
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';

export async function GET(context) {
  const articles = await getCollection('articles');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || SITE_URL,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.excerpt,
      pubDate: article.data.publishDate,
      link: `/articles/${article.data.slug}/`,
    })),
  });
}

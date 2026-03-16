// Site-wide constants for The F.A.M. Project
export const SITE_TITLE = 'The F.A.M. Project';
export const SITE_DESCRIPTION =
  'Strengthening families through education, community events, and resources that bring families closer together.';
export const SITE_URL = 'https://thefamproject.com';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/theFAMproj',
  instagram: 'https://www.instagram.com/the.fam.project/',
  youtube: 'https://www.youtube.com/channel/UCd2lg_GqwChNL9tR1JRG1Wg',
} as const;

export const NAV_LINKS = [
  { label: 'Our Mission', href: '/our-mission/' },
  { label: 'Events', href: '/events/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Our F.A.M.', href: '/our-fam/' },
  { label: 'Articles', href: '/articles/' },
] as const;

export const ARTICLE_CATEGORIES = [
  'Digital Distraction',
  'Communication',
  'Child Development',
  'Family',
  'Date Night',
  'Parenting',
  'Relationships',
  'Screen Time',
  'Personal Development',
  'Uncategorized',
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export const ABOUT_US_TEXT =
  'The FAM Project was started by a group of families tired of losing their kids attention to devices and social media. F.A.M. stands for Family Awareness Movement, and we are committed to shining a light so bright on the effects and issues surrounding the technological addictions that are destroying family bonds and leading children down dark paths, alone.';

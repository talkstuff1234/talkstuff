const defaultSiteUrl = "https://talkstuff.social";

export const siteConfig = {
  name: "TalkStuff Digital Services",
  shortName: "TalkStuff",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  description:
    "TalkStuff is an Abuja digital agency helping brands grow through digital marketing, social media, content creation, web design, and billboard advertising.",
};

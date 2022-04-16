export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Le Baguettes';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'LeBaguettes';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
<link rel="icon" type="image/jpg" href="https://github.com/HiImGhost666/nextjs-blog-theme/blob/9802850eb5df694abaaf17c206468cd17d9af019/assets/why.jpg"/>
  return {
    name,
    blogTitle,
    footerText,
  };
};

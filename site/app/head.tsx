'use client';
import { usePathname } from 'next/navigation';

const Head = () => {
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.length > 1
      ? pathname.slice(1, 2).toUpperCase() + pathname.slice(2)
      : '';

  const meta = {
    title: `Sobirov Diyorbek${
      titleFixedToShow ? ' · ' + titleFixedToShow : ''
    }`,
    description: `Hi! My name is Diyorbek. I'm from Uzbekistan and have over 4 years of experience in JavaScript development.`,
    keywords:
      'Sobirov, Diyorbek, Sobirov Diyorbek, portfolio, DIY0R, JavaScript, TypeScript, React, Web Development, Frontend Developer, Uzbekistan, Open Source',
    type: 'website',
    image: '/diyorbek.jpg'
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>{meta.title}</title>
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={`https://diyorbek.info${pathname}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={`https://diyorbek.info${pathname}`} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <link rel="icon" href="/diyorbek.ico" type="image/x-icon" />
    </>
  );
};

export default Head;

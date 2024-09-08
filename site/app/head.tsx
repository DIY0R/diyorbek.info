'use client';
import { usePathname } from 'next/navigation';
const Head = () => {
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Sobirov Diyorbek ${
      pathname === '/' ? '' : '· ' + titleFixedToShow
    }`,
    description: `Hi! My name is Diyorbek I'm from Uzbekistan and I have +4 year of work experience in JavaScript.`,
    keywords:
      'Sobirov, Diyorbek, Sobirov Diyorbek, Sobirov portafolio, DIY0R,DIY0R/kucheza,DIY0R/nestjs-rabbitmq,DIY0R/nestjs-rabbitmq,tacca,Diyorbek portfolio, Sobirov Diyorbek, Diyorbek github, Sobirov Diyorbek github, Diyorbek LinkedIn, Sobirov Diyorbek LinkedIn, Web,Programador web, Paginas web, Aplicaciones web, Programador frontend, HTML, CSS, Javascript, Typescript, React',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={`https://diyorbek.info${pathname}`} />
      <link rel="canonical" href={`https://diyorbek.info${pathname}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Portfolio" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <link rel="icon" href="/diyorbek.jpg" type="image/x-icon" />
    </>
  );
};

export default Head;

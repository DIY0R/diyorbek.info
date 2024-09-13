import Link from 'next/link';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'About',
    path: '/about',
    delay: '175ms'
  },
  {
    name: 'Blog',
    path: '/blog',
    delay: '200ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '225ms'
  }
];

const LinksMenuNav = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <>
      {LinksMenu.map(({ name, path, delay }) => (
        <li
          key={name}
          className="border-gray-700 text-gray-100 text-sm font-semibold"
          style={{ transitionDelay: delay }}
        >
          <Link href={path} onClick={toggleMenu} className="pb-4">
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default LinksMenuNav;

import Link from 'next/link';
import links from './navlinks.json'


export default function NavLinks() {
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name}>
            <Link
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <h2 className="font-medium text-xl" style={{ color: '#1E2A5E' }}>{link.name}</h2>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
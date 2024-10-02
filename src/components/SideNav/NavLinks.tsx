import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Panel de control', 
    href: '/dashboard', 
    icon: null 
  },
  {
    name: 'Roles',
    href: '/roles',
    icon: null,
  },
  { name: 'Usuarios', 
    href: '/users', 
    icon: null 
  },
];

export default function NavLinks() {
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div>
            <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
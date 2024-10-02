import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Panel de control', 
    href: '/admin/dashboard', 
    icon: null 
  },
  {
    name: 'Roles',
    href: '/admin/roles',
    icon: null,
  },
  { name: 'Usuarios', 
    href: '/admin/users', 
    icon: null 
  },
];

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
            <p className="hidden md:block">{link.name}</p>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
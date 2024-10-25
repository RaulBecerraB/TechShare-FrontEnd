import Link from 'next/link';
import links from './navlinks.json';
import { FaUserCircle } from 'react-icons/fa';

export default function NavUser() {
    return (
        <div>
            <Link href="/profile" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <FaUserCircle size={40} />
                <div>
                    <h2 className="font-medium text-xl" style={{ color: '#1E2A5E' }}>User Name</h2>
                    <p className="text-sm" style={{ color: '#1E2A5E' }}>Role</p>
                </div>
                <hr className="" />
            </Link>
        </div>
    );
}
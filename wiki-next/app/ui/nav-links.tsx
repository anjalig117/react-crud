'use client'

import { DocumentDuplicateIcon, HomeIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Create New Page', href: '/entry/create', icon: DocumentDuplicateIcon },
    { name: 'Random Page', href: '/', icon: DocumentDuplicateIcon }
]

export default function NavLinks(){
    const pathName = usePathname();

    return(
        <>
            { links.map((link) => {
                const LinkIcon = link.icon;
                return(
                    <Link 
                        key = {link.name} 
                        href = {link.href}
                        className={clsx("flex h-[48px] grow items-center justify-center rounded-md bg-black-50 p-0 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-0 md:px-3", {'bg-sky-100 text-blue-600': pathName == link.href})}
                    >
                        <LinkIcon className="w-6"></LinkIcon>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
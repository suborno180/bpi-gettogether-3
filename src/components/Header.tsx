import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./ThemeSwitcher"
import Image from "next/image"

export default function Header() {
    return (
        <header className="border-b md:px-6">
            <div className="container">
                <div className="flex h-16 shrink-0 items-center px-4 ">
                    <Link className="flex items-center gap-2 font-semibold" href="/regestar">
                        <Image width={40} height={40} src="/bpi-logo.webp" alt="Acme Inc Logo" className="h-8 w-auto" />
                        <span className="hidden md:block">BPI</span>
                    </Link>
                    <div className="ml-auto flex items-center gap-4">

                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}

function MoonIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}


function SunIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
}

import Link from "next/link";
import SearchInput from "./search-input";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between h-full w-fuøø">
            <div className="flex gap-3 items-center shrink-0 pr-6">
                <Link href="/" className="">
                    Logo
                </Link>
                <h3 className="text-xl">Docs</h3>
            </div>
            <SearchInput />
            <div />
        </nav>
    )
}
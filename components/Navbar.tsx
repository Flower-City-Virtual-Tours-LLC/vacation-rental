"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

const Navbar = () => {
  const pathname = usePathname(); // This replaces useRouter()

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <nav className="z-50 flex w-full items-center justify-between gap-5 bg-white p-6 px-[1.25rem] shadow-lg dark:bg-black lg:px-[3rem] xl:px-[5rem]">
        <Link href="/" passHref>
          <p className="lg:h4 font-extrabold text-kw-red">
            Greg Miller&apos;s Website
          </p>
        </Link>
        <div className="flex items-center">
          <ul className="z-50 hidden gap-[1.25rem] pr-[2rem] font-bold text-black dark:text-white lg:flex">
            <Link href="/" passHref>
              <li className={isActive("/") ? "text-kw-red" : ""}>Home</li>
            </Link>
            <Link href="/portfolio" passHref>
              <li className={isActive("/portfolio") ? "text-kw-red" : ""}>
                Portfolio
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li className={isActive("/contact") ? "text-kw-red" : ""}>
                Contact
              </li>
            </Link>
            <Link href="/blog" passHref>
              <li className={isActive("/blog") ? "text-kw-red" : ""}>Blog</li>
            </Link>
            <Link href="/disclosures" passHref>
              <li className={isActive("/disclosures") ? "text-kw-red" : ""}>
                Forms
              </li>
            </Link>
          </ul>
          <Theme />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

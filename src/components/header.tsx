"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeaderUi() {
  const pathname = usePathname();
  return (
    <header className="bg-slate-900 text-white">
      <div className="container relative mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-bold flex justify-center items-center"
          prefetch={false}
        >
          <Image src="/logo.png" height={40} width={40} alt="logo" />
          Shireto
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/home"
            className={`hover:text-brandPrimary ${
              (pathname == "/" || pathname == "/home") && "text-brandPrimary"
            }`}
            prefetch={false}
          >
            Home
          </Link>
          {/* <Link href="/teams" className={`hover:text-brandPrimary ${(pathname == "/teams") && "text-brandPrimary"}`} prefetch={false}>
            Teams
          </Link> */}
          <Link
            href="/projects"
            className={`hover:text-brandPrimary ${
              pathname == "/projects" && "text-brandPrimary"
            }`}
            prefetch={false}
          >
            Our Projects
          </Link>
          <Link
            href="/partnership"
            className={`hover:text-brandPrimary ${
              pathname == "/partnership" && "text-brandPrimary"
            }`}
            prefetch={false}
          >
            Partnership
          </Link>
          {/* <Link
            href="/resources"
            className={`hover:text-brandPrimary ${(pathname == "/resources") && "text-brandPrimary"}`}
            prefetch={false}
          >
            Resources
          </Link> */}
          <Link
            href="/connect"
            className={`hover:text-brandPrimary ${
              pathname == "/connect" && "text-brandPrimary"
            }`}
            prefetch={false}
          >
            Connect
          </Link>
        </nav>
        <Button
          variant="outline"
          size="icon"
          className=" hidden right-4 md:hidden"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className=" absolute top-[18px]  right-6 sm:z-10 md:hidden"
            // className=" right-4 block sm:z-10 md:hidden"
          >
            {/* button on mobile */}
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link
              href="/home"
              className={`hover:text-brandPrimary ${
                (pathname == "/" || pathname == "/home") && "text-brandPrimary"
              }`}
              prefetch={false}
            >
              Home
            </Link>
            {/* <Link href="/teams" className={`hover:text-brandPrimary ${(pathname == "/teams") && "text-brandPrimary"}`} prefetch={false}>
            Teams
          </Link> */}
            <Link
              href="/projects"
              className={`hover:text-brandPrimary ${
                pathname == "/projects" && "text-brandPrimary"
              }`}
              prefetch={false}
            >
              Our Projects
            </Link>
            <Link
              href="/partnership"
              className={`hover:text-brandPrimary ${
                pathname == "/partnership" && "text-brandPrimary"
              }`}
              prefetch={false}
            >
              Partnership
            </Link>
            {/* <Link
            href="/resources"
            className={`hover:text-brandPrimary ${(pathname == "/resources") && "text-brandPrimary"}`}
            prefetch={false}
          >
            Resources
          </Link> */}
            <Link
              href="/connect"
              className={`hover:text-brandPrimary ${
                pathname == "/connect" && "text-brandPrimary"
              }`}
              prefetch={false}
            >
              Connect
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

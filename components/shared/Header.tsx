import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full border-b relative px-5">
      <div className="wrapper flex items-center justify-between relative">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
        <ModeToggle />
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <Button asChild size="lg">
            <Link href="/cryptos/chart">Let's see</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

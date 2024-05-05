import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { MdOutlineMenuOpen } from "react-icons/md";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <MdOutlineMenuOpen
            style={{ color: "blueviolet", height: "40px", width: "40px" }}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;

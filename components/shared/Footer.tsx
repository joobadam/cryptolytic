import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t w-full">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>
          2024 Cryptolytic. All Rights reserved.{" "}
          <span className="text-[6px]">//JOOBADAM//</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

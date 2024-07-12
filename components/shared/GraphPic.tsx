import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const GraphPic = () => {
  return (
    <div className="blurpic shadow-2xl rounded-xl h-[60vh] w-[90%] relative mx-auto mb-10 scale-div cursor-pointer flex-center">
      <Link href="/cryptos">
        <Image
          src="/assets/images/crypto2.png"
          alt="crypto"
          fill
          className="object-cover object-center rounded-xl mx-auto blurpic -z-10"
        />
        <Button className="gradient-button z-50 " size={"lg"}>
          CRYPTOS
        </Button>
      </Link>
    </div>
  );
};

export default GraphPic;

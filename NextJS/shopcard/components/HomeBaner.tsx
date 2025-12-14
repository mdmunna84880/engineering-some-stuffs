/** @format */

import Link from "next/link";
import { Title } from "./ui/text";
import banner_1 from "../images/banner/banner_1.png";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title className="mb-5">
          Grap Upto 50% off on <br /> Selected headphone
        </Title>
        <Link href="/shop" className="bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm  font-semibold hover:text-white hover:bg-shop-dark-green hoverEffect">
        Buy Now</Link>
      </div>
      <div>
        <Image src={banner_1} alt="banner-1" className="hidden md:inline-flex w-96" />
      </div>
    </div>
  );
}

import { categoriesData, quickLinksData } from "@/constants/data";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Subtext, SubTitle } from "./ui/text";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
    return ( 
        <footer className="bg-white border-t">
            <Container>
                <FooterTop/>
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Logo/>
                            <Subtext>
                                Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.
                            </Subtext>
                        <SocialMedia className="text-dark-color/60" iconClassName="border-dark-color/60 hover:border-shop-light-green hover:text-shop-light-green"
                        tooltipClassName="bg-dark-color text-white"/>
                    </div>
                    <div>
                        <SubTitle>
                            Quick Links
                        </SubTitle>
                        <ul className="space-y-3 mt-4">
                            {quickLinksData.map((item)=>(
                                <li key={item.title}>
                                    <Link href={item.href} className="hover:text-shop-light-green hoverEffect font-medium">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <SubTitle>
                            Categories
                        </SubTitle>
                        <ul className="space-y-3 mt-4">
                            {categoriesData.map((item)=>(
                                <li key={item.title}>
                                    <Link href={`category/${item.href}`} className="hover:text-shop-light-green hoverEffect font-medium">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <SubTitle>
                            Newsletter
                        </SubTitle>
                        <SubTitle>
                            Subscribe to our newsletter to recieve updates and exclusive offers.
                        </SubTitle>
                        <form className="space-y-3">
                            <Input placeholder="Enter your email" required/>
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="py-6 border-t text-center text-sm text-gray-600">
                        <div>
                            &copy; {new Date().getFullYear()}{" "}
                            <Logo className="text-sm"/> All rights reserved.
                        </div>
                    </div>
            </Container>
        </footer>
     );
}

export default Footer;
import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex felx-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href='#'>Phones</Link>
                        <Link href='#'>Laptops</Link>
                        <Link href='#'>Desktops</Link>
                        <Link href='#'>Watches</Link>
                        <Link href='#'>TVs</Link>
                        <Link href='#'>Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Service</h3>
                        <Link href='#'>Contact Us</Link>
                        <Link href='#'>Shipping Policy</Link>
                        <Link href='#'>Returns & Exchanges</Link>
                        <Link href='#'>FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">At our electronics store, we are dedicated to providing the latest and greatest devices and accessorites to our customers.
                            With a wide selection of phones, TVs, laptops, watches, and accessories.
                        </p>
                        <p>&copy; {new Date().getFullYear()} O-Mart. All rights reserved.</p>
                    </div>

                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                            <Link href='#'>
                                <MdFacebook size={24} />
                            </Link>
                            <Link href='#'>
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href='https://www.instagram.com/ow3n.an/?igsh=dmFqdDljdTVlNWY1&utm_source=qr#'>
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href='https://www.youtube.com/@Owen-gy6ti'>
                                <AiFillYoutube size={24} />
                            </Link>
                        </div>
                    </FooterList>

                </div>
            </Container>
        </footer>);
}

export default Footer;
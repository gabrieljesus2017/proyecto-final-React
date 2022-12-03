import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="w-screen h-full overflow-hidden bg-black sm:grid sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 py-3 px-4">
            <div>
                <Link to="/">
                    <h2 className="text-white font-signature text-3xl overflow-hidden">
                        <span className="text-orange-600 text-5xl">Best</span>{" "}
                        Commerce
                    </h2>
                </Link>
            </div>

            <div className="hidden xl:block"></div>

            <div className="mx-auto text-center">
                <h4 className="text-white text-lg">Contact</h4>
                <h4 className="text-white">Miami, USA</h4>
                <h4 className="text-white">tel: 123- 22334455</h4>
            </div>

            <div className="hidden xl:block "></div>

            <div className="">
                <h4 className="text-white">Socials</h4>
                <p>
                    <BsInstagram size={20} className="text-white my-2" />
                </p>
                <p >
                    <BsTwitter size={20} className="text-white" />
                </p>
            </div>
        </div>
    );
};

export default Footer;

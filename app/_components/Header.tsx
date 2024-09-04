"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/_components/Header.module.css"; // Import your CSS module
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

function Header() {
    // State to track the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="flex text-white " href="/">
                    <Image src="/logo.svg" alt="DrawFlow" width={50} height={50} />
                    <h1 className="pl-2 font-semibold text-lg text-white">DrawFlow</h1>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav
                        aria-label="Global"
                        className={`absolute inset-x-0 top-full text-white 
                            lg:bg-transparent
                            ${styles.navItems} 
                            md:bg-transparent md:static md:flex md:items-center md:gap-6
                            ${isMenuOpen ? "block" : "hidden"}`}
                    >
                        <ul className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-100 md:text-gray-100">
                            <li>
                                <a
                                    className="block px-2 py-2 transition hover:text-indigo-600"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-2 py-2 transition hover:text-indigo-600"
                                    href="#"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-2 py-2 transition hover:text-indigo-600"
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-2 py-2 pb-7 md:pb-2 lg:pb-2 transition hover:text-indigo-600"
                                    href="#"
                                >
                                    Services
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className=" sm:flex sm:gap-4">
                            <span
                                className="  rounded-md bg-gray-100  px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:bg-gray-300"
                                
                            >
                                <LoginLink postLoginRedirectURL="/dashboard" >Log in</LoginLink>
                            </span>
                            <span
                                className="sm:block hidden rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:text-white/75 hover:bg-indigo-800"
                                
                            >
                                <RegisterLink>Sign up</RegisterLink>
                            </span>
                        </div>

                        <button
                            className="block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

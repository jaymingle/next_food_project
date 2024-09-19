"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png'
import classes from "./main-header.module.css"
import MainHeaderBackground from "@/components/main-header/main-header-background";
import {usePathname} from "next/navigation";

const MainHeader = () => {

    const path = usePathname()

    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image src={logoImg} alt='The Logo' priority/>
                    My Food App
                </Link>


                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href='/meals'  className={path.startsWith('/meals') ? classes.active : undefined}>Select Meals</Link>
                        </li>
                        <li>
                            <Link href='/community' className={path.startsWith('/community') ? classes.active : undefined}>Explore Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    );
};

export default MainHeader;
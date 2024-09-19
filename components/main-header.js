import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png'
import classes from "./main-header.module.css"
import MainHeaderBackground from "@/components/main-header-background";

const MainHeader = () => {
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
                            <Link href='/meals'>Select Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Explore Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    );
};

export default MainHeader;
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png'

const MainHeader = () => {
    return (
        <header>
            <Link href='/'>
                <Image src={`${logoImg}`} alt='The Logo'/>
                My Food App
            </Link>


            <nav>
                <ul>
                    <li>
                        <Link href='/meals'>Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
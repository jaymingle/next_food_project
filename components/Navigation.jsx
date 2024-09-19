import React from 'react';
import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/meals'>Meals</Link>
                <Lin href='/share'>Share</Link>
                <Link href='/community'>Community</Link>
            </ul>
        </nav>
    );
};

export default Navigation;
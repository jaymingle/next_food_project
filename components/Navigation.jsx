import React from 'react';
import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <ul style={{display: 'flex', gap: 10, color: '#fff'}}>
                <Link href='/'>Home</Link>
                <Link href='/meals'>Meals</Link>
                <Link href='meals/share'>Share</Link>
                <Link href='/community'>Community</Link>
            </ul>
        </nav>
    );
};

export default Navigation;
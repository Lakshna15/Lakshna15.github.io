"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, User, Briefcase, Code, Mail, Box, BookOpen } from "lucide-react";
import { clsx } from "clsx";
import styles from "./Navigation.module.css";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/#about", icon: User },
    { name: "Experience", href: "/#experience", icon: Briefcase },
    { name: "Projects", href: "/#projects", icon: Code },
    { name: "Skills", href: "/#skills", icon: Box },
    { name: "Case Study", href: "/case-study", icon: BookOpen },
];

export default function Navigation() {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.cubeLogo}>
                    <div className={styles.cubeFace + " " + styles.front}></div>
                    <div className={styles.cubeFace + " " + styles.back}></div>
                    <div className={styles.cubeFace + " " + styles.right}></div>
                    <div className={styles.cubeFace + " " + styles.left}></div>
                    <div className={styles.cubeFace + " " + styles.top}></div>
                    <div className={styles.cubeFace + " " + styles.bottom}></div>
                </div>
            </div>

            <ul className={styles.navList}>
                {navItems.map((item) => (
                    <li key={item.name} className={styles.navItem}>
                        <Link href={item.href} className={styles.navLink}>
                            <span className={styles.iconBox}>
                                <item.icon size={20} />
                            </span>
                            <span className={styles.linkText}>{item.name}</span>
                        </Link>
                    </li>
                ))}

                <li className={styles.navItem + " " + styles.contactItem}>
                    <Link href="mailto:lakshnadhanaraj@gmail.com" className={styles.navLink}>
                        <span className={styles.iconBox}>
                            <Mail size={20} />
                        </span>
                        <span className={styles.linkText}>Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

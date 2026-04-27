"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Code, Server, Database, Cloud } from "lucide-react";
import styles from "./CubeGrid.module.css";

const items = [
    {
        title: "Projects",
        description: "ML Tools, Pricing Trackers, and more.",
        icon: Code,
        href: "#projects",
        color: "var(--primary)",
    },
    {
        title: "Experience",
        description: "Android, Backend, & Full-Stack dev.",
        icon: Server,
        href: "#experience",
        color: "var(--accent)",
    },
    {
        title: "Skills",
        description: "Node.js, Python, AWS, PostgreSQL.",
        icon: Database,
        href: "#skills",
        color: "#ff0055", // Adding a contrasting color for variety
    },
    {
        title: "About Me",
        description: "My journey and philosophy.",
        icon: Cloud,
        href: "#about",
        color: "#00ff88",
    },
];

export default function CubeGrid() {
    return (
        <section className={styles.gridContainer}>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <Link href={item.href} key={index} className={styles.cardLink}>
                        <motion.div
                            className={styles.card}
                            whileHover={{ y: -10, scale: 1.02 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper} style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.description}</p>
                                <div className={styles.arrow} style={{ color: item.color }}>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                            <div className={styles.cardGlow} style={{ background: item.color }}></div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section >
    );
}

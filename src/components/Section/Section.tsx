"use client";

import { motion } from "framer-motion";
import styles from "./Section.module.css";
import { clsx } from "clsx";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
    return (
        <section id={id} className={clsx(styles.section, className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={styles.container}
            >
                <div className={styles.header}>
                    <div className={styles.cubeMarker}></div>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.content}>
                    {children}
                </div>
            </motion.div>
        </section>
    );
}

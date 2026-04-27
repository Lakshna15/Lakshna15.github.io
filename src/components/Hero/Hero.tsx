"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.title}>Lakshna Dhanaraj</h1>
                    <h2 className={styles.subtitle}>Software Engineer <span className={styles.divider}>|</span> IT Graduate Student</h2>
                </motion.div>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Building <span className={styles.highlight}>secure</span>, <span className={styles.highlight}>scalable</span>, and <span className={styles.highlight}>maintainable</span> software solutions.
                </motion.p>
            </div>

            <div className={styles.gridBackground}></div>
        </section>
    );
}

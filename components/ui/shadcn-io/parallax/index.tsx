'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from "./parallax.module.css";

export default function Parallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '40%']); // Adjust for parallax effect
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Text moves up more
  
  return (
  <>
    <div ref={container} className={styles.parallaxWrapper}>
        <motion.div className={styles.parallaxImage} style={{ y }}>
            <Image src="/IA-Picture.jpg" alt="Parallax background" layout="fill" objectFit="cover" />
        </motion.div>
        
        <div className={styles.parallaxContent}>
            {/* Image Container */}
            <Image src="/eloisa-profile-1.png" width={350} height={600} alt="Moving Overlay" />
            {/* Text Container */}
            <div className={styles.centeredContent}>
                <h1 className="font-bold mb-4">Eloisa Klementich</h1>
                <p className="text-xl">Yuh</p>
            </div>
        </div>
        
    </div>
  </>
  )
}

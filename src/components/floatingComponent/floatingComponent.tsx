'use client'

import { motion } from 'framer-motion';
import React from 'react';

const FloatingComponent = ({ children }: { children: React.ReactNode }) => {
    const floatAnimation = {
        y: [0, -10, 0], // Moves the component up and down
        transition: {
            duration: 3, // Duration for one complete animation cycle
            ease: 'easeInOut',
            repeat: Infinity, // Repeat the animation infinitely
        },
    };

    return (
        <motion.div
            className="w-fit absolute end-[18vw] p-6 rounded-lg"
            animate={floatAnimation}
        >
            {children}
        </motion.div>
    );
};

export default FloatingComponent;

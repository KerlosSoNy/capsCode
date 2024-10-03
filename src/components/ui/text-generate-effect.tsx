"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const containerRef = useRef<HTMLDivElement | null>(null);
    let wordsArray = words.split(" ");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    animate(
                        "span",
                        {
                            opacity: 1,
                            filter: filter ? "blur(0px)" : "none",
                        },
                        {
                            duration: duration ? duration : 1,
                            delay: stagger(0.2),
                        }
                    );
                    // Unobserve once animation has started
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Adjust this threshold if necessary
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div
                ref={scope}
                className="text-2xl text-align w-[98%] md:w-[51%] mx-auto gap-2"
            >
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-black text-white text-center text-4xl opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div
            ref={containerRef} // Use this ref for observing when it enters the viewport
            className={cn("font-bold", className)}
        >
            <div className="mt-4">
                <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};

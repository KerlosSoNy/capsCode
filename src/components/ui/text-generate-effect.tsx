"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    gap = '2'
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    gap?: string
}) => {
    const [scope, animate] = useAnimate();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wordsArray = words.split(" ");

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
    console.log(gap)
    const renderWords = () => {
        return (
            <motion.div
                ref={scope}
                className={`text-base md:text-2xl flex flex-row text-align w-[90%] md:w-[64%] lg:w-[51%] md:mx-auto lg:mx-auto justify-between items-center`}
            >
                {wordsArray.map((word, idx) => {
                    return (
                        <div>
                            <motion.span
                                key={word + idx}
                                className={`dark:text-black text-white text-center text-md md:text-4xl opacity-0`}
                                style={{
                                    filter: filter ? "blur(10px)" : "none",
                                }}
                            >
                                {word}{" "}
                            </motion.span>
                        </div>
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

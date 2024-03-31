'use client'

import React, { useEffect, useRef } from 'react';

export const ScrollToTopButton = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let timeoutId: number | undefined;

        const toggleScrollToTop = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const display = scrollTop > 20 ? 'block' : 'none';

            if (buttonRef.current) {
                const parent = buttonRef.current.closest("#button-up");
                parent?.classList.toggle("opacity-0", display === 'none');
                buttonRef.current.style.cursor = display === 'none' ? 'default' : 'pointer';
            }
        };

        const throttledScrollHandler = () => {
            if (!timeoutId) {
                timeoutId = window.requestAnimationFrame(() => {
                    toggleScrollToTop();
                    timeoutId = undefined;
                });
            }
        };

        window.addEventListener('scroll', throttledScrollHandler);

        return () => {
            if (timeoutId) {
                window.cancelAnimationFrame(timeoutId);
            }
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="button-up" className="fixed bottom-2 right-2 opacity-0 transition-opacity z-[100]">
            <button
                ref={buttonRef}
                id="scroll-to-top"
                aria-label="Volver al inicio de la página"
                className="group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-green-300 backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition"
                onClick={handleClick}
            >
                <svg
                    aria-label="Subir al inicio de la página"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 -rotate-45 group-hover:-rotate-90 group-hover:text-accent motion-safe:transition"
                    width="20px"
                >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
            </button>
        </div>
    );
};
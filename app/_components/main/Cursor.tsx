"use client"
import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, { duration: 0.2, x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div className="cursor bg-lime-600 h-2 w-2 rounded-full"></div>
        </>
    );
};

export default Cursor;

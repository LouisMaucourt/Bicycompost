"use client";
import { Lenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
    return (
        <Lenis root options={{ lerp: 0.1, duration: 2.5, smoothTouch: true }}>
            {children}
        </Lenis>
    );
}

export default SmoothScrolling;
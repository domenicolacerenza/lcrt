"use client";

import { useEffect, useState } from "react";

const NUM_TRAIL_POINTS = 20; // Numero di sfere nella scia

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            setPosition({ x, y });

            // Aggiorna la scia con movimenti più fluidi
            setTrail((prev) => {
                const newTrail = [...prev, { x, y }];
                return newTrail.slice(-NUM_TRAIL_POINTS); // Mantiene solo gli ultimi elementi
            });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <>
            <div
                className="fixed w-3 h-3 bg-amber-50 rounded-full pointer-events-none z-50"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Scia dinamica */}
            {trail.map((pos, index) => {
                const scale = 1 - index / NUM_TRAIL_POINTS; 
                return (
                    <div
                        key={index}
                        className="fixed bg-amber-50 rounded-full pointer-events-none z-30"
                        style={{
                            width: `${24 * scale}px`,
                            height: `${24 * scale}px`,
                            left: `${pos.x}px`,
                            top: `${pos.y}px`,
                            transform: "translate(-50%, -50%)",
                            opacity: scale * 0.6, // Dissolvenza graduale
                            filter: `blur(${(1 * scale) * 20}px)`, // Effetto blur progressivo
                            transition: "transform 50ms linear, opacity 200ms ease-out",
                        }}
                    />
                );
            })}
        </>
    );
};

export default MouseFollower;

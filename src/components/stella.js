"use client";

import React, { useEffect, useRef } from 'react';
import dynamic from "next/dynamic";

const Sketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let t = 0;
      let colorOffset = 0;
      let rotationAngle = 0;
      let rotationSpeed;
      let p5Instance = null;

      const loadP5 = async () => {
        const p5 = (await import("p5")).default;

        const sketch = (p) => {
          p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current);
            p.noStroke();
            rotationSpeed = p.random(0.01, 0.05);
          };

          p.draw = () => {
            p.clear();

            let x = p.width / 2 + p.sin(t) * 300;
            let y = p.height / 2 + p.cos(t * 0.9) * 200;

            let r = p.map(p.sin(colorOffset), -1, 1, 200, 255);
            let g = p.map(p.sin(colorOffset + p.PI / 3), -1, 1, 100, 220);
            let b = p.map(p.sin(colorOffset + p.PI / 2), -1, 1, 180, 255);

            p.push();
            p.translate(x, y);
            p.rotate(rotationAngle);
            drawGlowingStar(p, 0, 0, r, g, b);
            p.pop();

            t += 0.02;
            colorOffset += 0.05;
            rotationAngle += rotationSpeed;
          };

          function drawGlowingStar(p, x, y, r, g, b) {
            for (let i = 80; i > 0; i -= 8) {
              let alpha = p.map(i, 80, 0, 200, 0);
              p.fill(r, g, b, alpha);
              drawStar(p, x, y, i * 2);
            }
          }

          function drawStar(p, x, y, size) {
            p.beginShape();
            for (let i = 0; i < 10; i++) {
              let angle = p.TWO_PI / 10 * i;
              let radius = i % 2 === 0 ? size : size / 2;
              let xOffset = x + p.cos(angle) * radius;
              let yOffset = y + p.sin(angle) * radius;
              p.vertex(xOffset, yOffset);
            }
            p.endShape(p.CLOSE);
          }

          p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
          };
        };

        p5Instance = new p5(sketch);
      };

      loadP5();

      return () => {
        if (p5Instance) {
          p5Instance.remove();
        }
      };
    }
  }, []);

  return (
    <div
      ref={sketchRef}
      className="p5-container fixed top-0 left-0 w-full h-full -z-10 backdrop-blur-4xl"
      aria-hidden="true"
      style={{ filter: "blur(24px)" } /* Optional: Add blur effect to the canvas */ }
    />
  );
};

export default dynamic(() => Promise.resolve(Sketch), { ssr: false });
'use client';

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number>(0);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Interpolación lineal para suavizar movimiento
  const lerp = (start: number, end: number, amt: number): number => {
    return (1 - amt) * start + amt * end;
  };

  // Animación que actualiza la posición suavemente
  const animate = () => {
    pos.current.x = lerp(pos.current.x, targetPos.current.x, 0.15);
    pos.current.y = lerp(pos.current.y, targetPos.current.y, 0.15);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const onMouseEnterInteractive = () => setIsHovering(true);
    const onMouseLeaveInteractive = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);

    // Detectar elementos interactivos para cambiar tamaño del cursor
    const interactiveElements = document.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      cancelAnimationFrame(requestRef.current);
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <div
        ref={cursorRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: isHovering ? 40 : 20,
            height: isHovering ? 40 : 20,
            borderRadius: '50%',
            backgroundColor: 'aquamarine', // <-- AQUÍ
            pointerEvents: 'none',
            transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`,
            transition: 'width 0.2s ease, height 0.2s ease, background-color 0.3s ease',
            zIndex: 9999,
            mixBlendMode: 'difference',
            border: '1.5px solid aquamarine',
            willChange: 'transform',
        }}
    />
  );
};

export default CustomCursor;

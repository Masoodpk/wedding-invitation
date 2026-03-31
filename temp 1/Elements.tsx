'use client'

import React from 'react';

// Common Sketchy SVG Elements
export const SketchyCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,12" 
          strokeDasharray="300" strokeDashoffset="0" className="animate-[draw_2s_ease-out_infinite]" />
  </svg>
);

export const WavyLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10" />
  </svg>
);

export const SketchyUnderline = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 10" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2,5 Q50,8 98,4 Q50,2 5,6" />
  </svg>
);

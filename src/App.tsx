/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

export default function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen font-sans selection:bg-[#BBCCD7] selection:text-[#0C0C0C] overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Footer / Contact End section (optional but good for spacing) */}
      <footer id="contact" className="bg-[#0C0C0C] py-20 text-center border-t border-[#D7E2EA]/10">
        <p className="text-[#D7E2EA] font-light uppercase tracking-widest text-sm sm:text-base">
          © 2026 Jack -- 3D Creator Portfolio
        </p>
      </footer>
    </main>
  );
}

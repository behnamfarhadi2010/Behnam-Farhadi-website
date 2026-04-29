import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/Buttons';

export const HeroSection: React.FC = () => {
  const navLinks = ["About", "Price", "Projects", "Contact"];

  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-50">
        <ul className="flex justify-between w-full">
          {navLinks.map((link, i) => (
            <li key={link}>
              <FadeIn delay={i * 0.05} y={-20}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
                >
                  {link}
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center relative px-6 md:px-10">
        <div className="overflow-hidden w-full mt-4">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading text-[17.5vw] whitespace-nowrap">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack Portrait"
              className="w-full h-auto object-contain pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};

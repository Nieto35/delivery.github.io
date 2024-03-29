'use client'
import { HeroLogo } from './heroLogo'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { DrawnXLogo } from './drawnXLogo'
import { HamburgerButton } from './hamburgerButton'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Combos', href: '/combos' },
    { name: 'Contacto', href: '/contacto'}
  ].map((page) => ({
    ...page,
    active: pathname === page.href
  }))

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-hidden');
    document.body.classList.toggle('lg:overflow-auto');
  };

  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
  }, []);

  return (
    <header className="mb-1 h-16 max-w-[100vw] lg:h-24">
      <nav className="group flex h-full w-full items-center justify-between px-10 lg:justify-center">
        <a href="/" className="block lg:hidden">
          <DrawnXLogo />
        </a>
        <HamburgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className={`fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto bg-background-color px-10 lg:hidden ${!isOpen && 'hidden'}`} >
          <aside className="flex min-h-16 w-full items-center justify-between">
            <DrawnXLogo />
            <HamburgerButton toggleMenu={toggleMenu} isOpen={isOpen}/>
          </aside>
          <div className="flex min-h-2 w-full items-center">
            <hr
              className="h-[2px] w-full border-t-0"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #7f8f61 50%, transparent 100%)'
              }}
            />
          </div>
          <nav className="flex w-full flex-col items-center gap-5">
            <img
              src="/name-without-bg.png"
              alt="lvda logo"
              className="accent-drop-shadow my-4 max-w-60 drop-shadow-lg"
              loading="lazy"
            />
            <hr
              className="h-[2px] w-full border-t-0"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #7f8f61 50%, transparent 100%)'
              }}
            />
            {pages.map(({  name, href, }, key) => (
              <>
                <a
                  href={href}
                  className={
                    'relative flex flex-col items-center justify-center gap-2 text-xl capitalize'
                  }
                  id={`navmob-link-${key}`}
                >
                  <span className="z-10 uppercase text-primary">{name}</span>
                  
                </a>
                <hr
                  className="h-[2px] w-full border-t-0"
                  style={{
                    background:
                      'linear-gradient(to right, transparent 0%, #7f8f61 50%, transparent 100%)'
                  }}
                />
              </>
            ))}
            {/* <nav className="my-4 flex flex-col gap-10">
              <FooterContent />
              <SocialButtons class="flex items-center justify-center" />
            </nav> */}
          </nav>
        </div>
      </nav>

      <div className="relative flex h-2 w-full flex-col items-center">
        <div
          className={
            styles.gridBottomBarContainer + ' absolute grid w-full items-center justify-between'
          }
        >
          <div
            className="h-[2px] w-full rounded-l-[30%] border-t-0"
            style={{
              background: 'linear-gradient(to right, transparent 3%, #7f8f61  35%, #7f8f61  100%)'
            }}
          ></div>
          <div className="-ml-[4px] -mr-[4px]">
            <a href="/">
              <HeroLogo />
            </a>
          </div>

          <div
            className="h-[2px] w-full rounded-r-[30%] border-t-0 bg-white"
            style={{
              background: 'linear-gradient(to left, transparent 3%, #7f8f61 35%, #7f8f61 100%)'
            }}
          ></div>
        </div>
      </div>
    </header>
  )
}

{
  /* <div className="gridBottomBarContainer absolute grid w-full items-center justify-between"></div> */
}

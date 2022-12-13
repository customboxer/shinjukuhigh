import { Fragment } from "react"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx"

import { Button } from "./Button"
import { Container } from "./Container"
// import { Logo } from "./Logo"
import { NavLink } from "./NavLink"
import { TwitterIcon, InstagramIcon, DiscordIcon } from "./SocialIcons"

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function SocialLink({ icon: Icon, className, ...props }) {
  return (
    <Link className={className} {...props} target="_blank">
      <Icon className={clsx("hover:cursor-pointer", className)} />
    </Link>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/resources/osmosis">Resources</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="/about_us">About Us</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header({linkClassName = "", iconClassName = "", buttonClassName = "", title=true, darkModeToggleBtn=false , ...props}) {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between ">
          <div className="flex items-center">
            <div className="hidden md:flex md:gap-x-6">
              <NavLink className={linkClassName} href="/yearbook">
                Yearbook
              </NavLink>
              <NavLink className={linkClassName} href="/school">
                School
              </NavLink>
              <NavLink className={linkClassName} href="/roadmap">
                Roadmap
              </NavLink>
              <NavLink className={linkClassName} href="/courses">
                Courses
              </NavLink>
            </div>
          </div>
          {
            title &&
            <NavLink href="/" className={clsx("text-shinjuku-profile-name items-center flex", linkClassName)}>
              SHINJUKU HIGH
            </NavLink>
          }
          <div className="flex gap-x-3">
            <div className="hidden md:flex items-center md:gap-x-3">
              <SocialLink
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
                className={iconClassName}
              />
              <SocialLink
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                className={iconClassName}
              />
              <SocialLink
                href="https://discord.com"
                aria-label="Join on Discord"
                icon={DiscordIcon}
                className={iconClassName}
              />
            </div>
            <div className="flex items-center">
              <Button
                className={clsx("uppercase", buttonClassName)}
                href="/delegate"
              >
                {/* TODO: either font or this should be changed */}
                <span className="leading-3">
                  Connect Wallet
                </span>
              </Button>
              {
                darkModeToggleBtn
                &&
                <Button onClick={()=>props.setDark(!props.dark)}>
                  <img src={props.dark ? "/images/sun.svg" : "/images/moon.svg"} alt="dark" className="w-4"/>
                </Button>
              }
              <div className="mr-1 md:hidden">
                <MobileNavigation />
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

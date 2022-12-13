import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({ href, children, className }) {
  return (
    <Link
      href={href}
    >
      <a 
      className={clsx("inline-block py-7 text-xs font-normal uppercase", className)}>
      {children}
      </a>
    </Link>
  )
}

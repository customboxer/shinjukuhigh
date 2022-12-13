import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-3 px-6 text-xs',
}


export function Button({
  variant = 'solid',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} >
      <a className={className} {...props} />
    </Link>
  ) : (
    <button onClick={props.onClick} className={className} {...props} />
  )
}

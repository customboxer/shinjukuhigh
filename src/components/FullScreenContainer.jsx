import clsx from "clsx"

export function FullScreenContainer({ className, ...props }) {
  return <div className={clsx("mx-auto max-w-8xl", className)} {...props} />
}

import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type ButtonProps = ComponentProps<'button'>

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge("hover:text-black hover:bg-white transition-all rounded bg-green px-4 py-1.5 text-sm font-medium text-white",
        className,
      )}
      {...props}
    >
      {props.children}
    </button >



  )
}
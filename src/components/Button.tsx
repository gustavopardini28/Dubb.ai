import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'>

export const Button = (props: ButtonProps) => {
  return (
    <button
      className=" hover:text-black hover:bg-white transition-all rounded bg-green px-4 py-1.5 text-sm font-medium text-white"
      {...props} />


  )
}
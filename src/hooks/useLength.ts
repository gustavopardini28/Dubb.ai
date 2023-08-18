import { InputContext } from "@/contexts/inputContext"
import { useContext } from "react"


export const useLength = () => {
  const { response } = useContext(InputContext)
  const responseLength = response.length;
  let speed = 0

  if (responseLength < 25) {
    speed = 100;
  }
  if (responseLength < 50) {
    speed = 32.5;
  }
  if (responseLength < 75) {
    speed = 25;
  }
  if (responseLength > 75) {
    speed = 12.5;
  }

  return speed

}
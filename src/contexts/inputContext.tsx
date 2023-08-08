import { api } from "@/lib/axios";
import { createContext, ReactNode } from "react";

interface InputProviderProps {
  children: ReactNode;
}

interface inputContextType {
  sendInputLink: (input: string, from: string, to: string) => Promise<void>;
}


export const InputContext = createContext({} as inputContextType);

export function inputProvider({ children }: InputProviderProps) {

  async function sendInputLink(input: string, to: string, from: string) {
    const response = await api.post('https://5000-mamaai-dubb-5x8rr7fi4tv.ws-us102.gitpod.io', {
      input,
      from,
      to
    })
  }

  return (
    <InputContext.Provider value={{
      sendInputLink
    }}>
      {children}
    </InputContext.Provider>
  )
}
import { api } from "../lib/axios";
import { createContext, ReactNode, useState } from "react";

interface InputProviderProps {
  children: ReactNode;
}

interface inputContextType {
  sendInputLink: (link: string, from: string, to: string) => Promise<void>;
  response: string;
  loading: boolean;
}


export const InputContext = createContext({} as inputContextType);

export function InputProvider({ children }: InputProviderProps) {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  async function sendInputLink(from: string, to: string, link: string) {
    setLoading(true);

    const apiResponse = await api.post('translate', {
      from,
      to,
      link
    }).catch(err => {
      alert(err.message);
    }).finally(() => {
      setLoading(false)
    })

    setResponse(apiResponse.data.text);

  }

  return (
    <InputContext.Provider value={{
      sendInputLink,
      response,
      loading
    }}>
      {children}
    </InputContext.Provider>
  )
}
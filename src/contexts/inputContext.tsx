import { api } from "../lib/axios";
import { createContext, ReactNode, useState } from "react";
import { useDecodingAudio } from "@/hooks/useDecodingAudio";

interface InputProviderProps {
  children: ReactNode;
}

interface inputContextType {
  sendInputLink: (link: string, from: string, to: string) => Promise<void>;
  onGetAudio: (text: string, language: string) => Promise<void>;
  response: string;
  loading: boolean;
  urlAudioResponse: string;
}


export const InputContext = createContext({} as inputContextType);

export function InputProvider({ children }: InputProviderProps) {
  const [response, setResponse] = useState<string>('');
  const [urlAudioResponse, setUrlAudioResponse] = useState<string>('');
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

  async function onGetAudio(text: string, language: string) {
    const audio = await api.post('/audio', {
      text,
      language
    })
    setUrlAudioResponse(audio.data);


  }



  return (
    <InputContext.Provider value={{
      sendInputLink,
      onGetAudio,
      response,
      loading,
      urlAudioResponse
    }}>
      {children}
    </InputContext.Provider>
  )
}
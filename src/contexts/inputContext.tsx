import { api } from "../lib/axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useDecodingAudio } from "@/hooks/useDecodingAudio";
import { atob } from 'js-base64'


interface InputProviderProps {
  children: ReactNode;
}

interface inputContextType {
  sendInputLink: (link: string, from: string, to: string) => Promise<void>;
  onHandleGetAudio: (text: string, language: string) => Promise<void>;
  response: string;
  loading: boolean;
  AudioResponse: string;
  urlAudioResponse: string;
}


export const InputContext = createContext({} as inputContextType);

export function InputProvider({ children }: InputProviderProps) {
  const [response, setResponse] = useState<string>('');
  const [AudioResponse, setAudioReponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [urlAudioResponse, setUrlAudioReponse] = useState<string>('');


  const decodingAudio = (audioData: any) => {

    const audioBlob = new Blob([audioData]);
    const audio = URL.createObjectURL(audioBlob);

    return audio;

  }

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

  async function onHandleGetAudio(text: string, language: string) {
    const audio = await api.post('/audio', {
      text,
      language
    }, {
      responseType: 'arraybuffer',
    })



    const decodedAudio = decodingAudio(audio.data);
    console.log(decodedAudio);

    setUrlAudioReponse(decodedAudio);

  }

  return (
    <InputContext.Provider value={{
      sendInputLink,
      onHandleGetAudio,
      response,
      loading,
      AudioResponse,
      urlAudioResponse
    }}>
      {children}
    </InputContext.Provider>
  )
}
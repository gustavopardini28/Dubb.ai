import { InputContext } from '@/contexts/inputContext'
import { atob } from 'js-base64'
import { useContext, useState } from 'react'


export const useDecodingAudio = () => {
  const { urlAudioResponse } = useContext(InputContext)

  const audioBlob = new Blob([urlAudioResponse], { type: 'audio/x-wav' });
  const audio = URL.createObjectURL(audioBlob);

  return audio;

}
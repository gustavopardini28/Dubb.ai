import { InputContext } from '@/contexts/inputContext'
import { useContext, useState } from 'react'


export const useDecodingAudio = () => {
  const { urlAudioResponse } = useContext(InputContext)

  const audioBlob = new Blob([urlAudioResponse], { type: 'audio/x-wav' });
  const audio = URL.createObjectURL(audioBlob);

  return audio;

}
import { InputContext } from '@/contexts/inputContext'
import { atob } from 'js-base64'
import { useContext, useState } from 'react'


export const useDecodingAudio = () => {
  const { urlAudioResponse } = useContext(InputContext)

  const decodedAudio = atob(urlAudioResponse);
  const audioBlob = new Blob([decodedAudio], { type: 'audio/x-wav' });
  const audio = URL.createObjectURL(audioBlob);

  return audio;

}
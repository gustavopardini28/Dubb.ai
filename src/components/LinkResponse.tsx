import { useContext, useState } from "react";
import { InputContext } from "@/contexts/inputContext";
import { CopyButton } from '@mantine/core';

import Typewriter from 'typewriter-effect';

import { Files } from 'lucide-react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Button } from "./Button";
import { useLength } from "@/hooks/useLength";
import { useDecodingAudio } from "@/hooks/useDecodingAudio";



export const ResponseData = () => {

  const to = 'en'

  const { response, onHandleGetAudio, urlAudioResponse, AudioResponse } = useContext(InputContext);

  const speed = useLength();
  // const audio = useDecodingAudio();

  const [finishedTyping, setFinishedTyping] = useState<boolean>(false);
  const [renderAudioButton, setRenderAudioButton] = useState<boolean>(false);


  return (
    <main className=" flex flex-col justify-center items-center h-full w-full -translate-y-16">
      <section className=" flex flex-col justify-center max-w-6xl overflow-y-auto overscroll-none text-white gap-4 text-2xl">
        <Typewriter
          options={{
            delay: speed
          }}
          onInit={(typewriter) => {
            typewriter.typeString(response)
              .callFunction(() => {
                setFinishedTyping(true);
                setRenderAudioButton(true);
              })
              .start();
          }}
        />
        {finishedTyping && (
          <div className="animate-fade-right" >
            <CopyButton value={response}>
              {({ copied, copy }) => (
                <>
                  <button
                    data-tooltip-id="buttonTitle"
                    className="transition-all hover:text-gray-300"
                    data-tip='Copy'
                    onClick={copy}
                  >
                    <Files />
                  </button>
                  <ReactTooltip
                    id="buttonTitle"
                    place="right"
                    content={!copied ? "Copy" : 'Copied'}
                    variant={!copied ? 'dark' : 'success'}
                    className='scale-75'
                    positionStrategy="absolute"

                  />
                </>
              )}
            </CopyButton>
          </div>
        )}
        {renderAudioButton && (
          <div className="flex animate-fade-right pt-4">
            <Button onClick={() => onHandleGetAudio(response, to)}>
              Convert to audio format
            </Button>
          </div>
        )}
        {urlAudioResponse && (
          <div>
            <audio controls>
              <source src={urlAudioResponse} type="audio/x-wav" />
            </audio>
          </div>
        )}
      </section>
    </main>

  )
}
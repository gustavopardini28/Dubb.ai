import { Button, FileButton, Group, Text } from "@mantine/core"
import { useState } from "react"
import { CheckCircle, UploadCloud } from 'lucide-react';

export const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <section className='animate-fade '>
      <Group variant="white" position="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => (
            <>
              <p className="text-white text-lg">Upload Your video/audio</p>
              <div className=" flex justify-center h-full w-full bg-white rounded-md border-2 border-dashed border-gray-700">
                {!file &&
                  <Button variant={"white"} color={'white'} {...props}> <UploadCloud className='text-black bg-white hover:bg-transparent' /></Button>
                }
              </div>
            </>
          )}
        </FileButton>
      </Group>

      {file && (
        <>
          <Text size="md" align="center" mt="sm" color={'gray'}>
            Picked file: {file.name}
          </Text>
          <CheckCircle className="bg-gre" />
        </>
      )}


    </section>
  )
}
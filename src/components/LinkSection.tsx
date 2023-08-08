import { InputContext } from "@/contexts/inputContext";
import { Input } from "@mantine/core"
import { useContext, useState } from "react";
import { Button } from "./Button";

export const LinkSection = () => {


  const { sendInputLink } = useContext(InputContext);

  const [input, setInput] = useState<string | null>();

  const HandleSendInput = (e: any) => {
    e.preventDefault();

    if (input)
      console.log(sendInputLink);


  };


  return (
    <section className='flex flex-col justify-center animate-fade text-white gap-0 '>
      <label >
        Link adress
      </label>
      <form onSubmit={(e) => HandleSendInput(e)} >
        <Input.Wrapper className="text-white flex flex-col gap-4"
          id="input-demo"
          description="Please enter with link that you want to translate"
          size="sm"


        >
          <Input onChange={(event) => setInput(event.target.value)} id="input-demo" placeholder="Your link" />
          <Button type='submit' className='w-full transition-all' >
            Submit
          </Button>
        </Input.Wrapper>

      </form>
    </section>
  )
}

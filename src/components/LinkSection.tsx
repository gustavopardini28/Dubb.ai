import { Input } from "@mantine/core"

export const LinkSection = () => {
  return (
    <section className='flex flex-col animate-fade text-white '>
      <label >
        Link adress
      </label>
      <Input.Wrapper className="text-white"
        id="input-demo"
        description="Please enter with link that you want to translate"
        error="link not found"
        size="sm"

      >
        <Input id="input-demo" placeholder="Your link" />
      </Input.Wrapper>
    </section>
  )
}

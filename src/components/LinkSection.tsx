import { Input } from "@mantine/core"

export const LinkSection = () => {
  return (
    <section className='flex '>
      <Input.Wrapper
        id="input-demo"
        withAsterisk
        label="link adress"
        description="Please enter with link that you want to translate"
        error="link not found"
        size="xl"
      >
        <Input id="input-demo" placeholder="Your link" />
      </Input.Wrapper>
    </section>
  )
}

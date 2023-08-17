import { ColorRing } from "react-loader-spinner"


export const Loading = () => {
  return (
    <div className="flex justify-center items-center m-auto h-full w-full">
      <ColorRing
        visible={true}
        height="25"
        width="25"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  )
}
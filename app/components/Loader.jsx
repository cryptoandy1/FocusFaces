import { Grid } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="absolute flex flex-col gap-10 items-center justify-center z-[150] w-[100vw] h-[100vh] bg-gray-900 text-3xl text-green-900 sm:text-5xl">
      <h1>Loading...</h1>
      <Grid
        height="80"
        width="80"
        color="#431407"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader

import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-[#212121] text-gray-300 py-24 px-6 mt-11">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <span className="capitalize">Bring creative projects to life on</span>
        <br />
        <span className="uppercase text-green-600">Organiz3.</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="cursor-pointer transition-all 
          bg-gray-700 text-white px-6 py-2 rounded-lg
          border-green-400
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-md hover:shadow-green-300 shadow-green-300 active:shadow-none"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          className="cursor-pointer transition-all 
          bg-gray-700 text-white px-6 py-2 rounded-lg
          border-green-400
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-md hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          Back Projects
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center mt-11">


        <div class="flex flex-col justify-center items-center group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 md:mt-4">
          <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
            <span class="text-5xl font-bold">{stats?.totalProjects || 0}</span>
            <p class="text-amber-300 font-thin">- Projects-</p>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 mt-10">
          <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
            <span class="text-5xl font-bold">{stats?.totalBacking || 0}</span>
            <p class="text-amber-300 font-thin">- Backings-</p>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 mt-10">
          <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
            <span class="text-5xl font-bold">{stats?.totalDonations || 0}</span>
            <p class="text-amber-300 font-thin">- Donated-</p>
          </div>
        </div>

        
        
      </div>
    </div>
  )
}

export default Hero

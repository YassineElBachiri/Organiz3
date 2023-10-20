import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center
        p-5 bg-[#212121] shadow-lg fixed top-0 left-0 right-0 z-10"
    >
      <Link
        to="/"
        className="flex justify-start items-center
      text-xl text-white space-x-1"
      >
        <span>Organiz3</span>
        <TbBusinessplan />
      </Link>

      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-md hover:shadow-green-300 shadow-green-300 active:shadow-none"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header

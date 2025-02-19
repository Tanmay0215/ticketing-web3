import coin from '../assets/coin.png';

function RewardCoins({coins}) {
  return (        
    <button className="relative flex p-0.5 font-medium text-lg text-white rounded-full transition-transform transform hover:scale-105">
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full"></span>
      <span className="flex relative px-3 py-1 gap-2 bg-gray-900 rounded-full items-center">
        <img src={coin} alt="coin" className="w-6 h-6"/>
        <div>{coins}</div>
      </span>
    </button>
  )
}

export default RewardCoins

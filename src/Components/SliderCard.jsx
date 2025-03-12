import { NavLink } from 'react-router-dom'

const SliderCard = ({ item }) => {
  return (
    <div className="relative flex justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xl z-0"
        style={{ backgroundImage: `url(${item.Image})` }}
      ></div>
      <div className="relative flex h-1/2 w-10/12 bg-slate-100/10 px-10 py-6 rounded-2xl mt-10 z-10 mb-10">
        <div className="w-4/6 h-full my-auto text-gray-200 space-y-6">
          <div className="text-4xl font-bold uppercase">{item.EventName}</div>
          <div className="leading-relaxed">{item.Description}</div>
          <div className="">Artist : {item.Artist}</div>
          <button className="bg-[#38884A] text-white w-28 h-10 rounded-md">
            <NavLink to={`/Event/${item.id}`}>Book Now</NavLink>
          </button>
        </div>
        <div className="w-2/6 h-full flex justify-center">
          <img src={item.Image} className="object-fill h-96" />
        </div>
      </div>
    </div>
  )
}

export default SliderCard

import './style.css'
const EventCard = ({item})=> {
    return (
        <div className='ml-10 mt-10 mb-10'>
            <div class="relative overflow-hidden w-64 ">
                <img src={item.Image} alt="Your Image" className='w-full'/>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/100 blur"></div>
            <div className='flex flex-col absolute z-50 bottom-14 left-[6%] '>
                <div className='text-center text-black text-3xl'>{item.EventName}</div>
            </div>
            <div className='absolute bottom-2 right-4'><button className='bg-[#38884A] h-8 w-24 rounded-md p-1'>Book Now</button></div>
        </div>
        </div>
    )
}
export default EventCard;
import {data} from '../../data'
import './style.css'
import { useNavigate } from 'react-router-dom';
const EventElement = ()=>{
    const item = data[0];
    const navigate = useNavigate();
    return (
        <div className='flex justify-center'>
        <div className="flex h-screen w-8/12 pt-20">
            <div className='w-1/2 relative'>
                <img src = "https://cdn01.justjared.com/wp-content/uploads/2024/05/new-poster/new-eras-tour-poster.jpg" alt = "Error" className="leftpic h-6/12 aspect-2/3"></img>
            </div>
            <div className="flex flex-col gap-y-8 absolute right-64 top-[18%] w-5/12 justify-between h-4/6">
            <div>
            <div className='text-[#FF9011] text-3xl font-semibold'>{item.EventName}</div>
            </div>
            <div >
            <div className='text-white text-justify text-lg'>{item.Description}</div>
                <div className='text-white flex flex-col gap-y-2 mt-8'>
                <div className='text-2xl'>Artist : <span className='text-[#00FF6A]'>{item.Artist}</span></div>
                <div className='text-2xl'>Venue : <span className='text-[#00FF6A]'>{item.Venue}</span></div>
                <div className='text-2xl'>Date : <span className='text-[#00FF6A]'>{item.Date}</span></div>
                <div className='text-2xl'>Price : <span className='text-[#00FF6A]'>{item.Price}</span></div>
                <button className='bg-[#FF9011] w-40 h-10 rounded-md mt-4 text-black font-semibold text-xl' onClick={()=>{navigate('/billing')}}>BOOK NOW!!</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default EventElement;
import MainSlider from "../Components/MainSlider";
import {data} from '../../data'
const Events = ()=>{
    return (
        <div className="bg-black w-screen h-screen overflow-hidden">
            <MainSlider data = {data}/>
            <div className="mt-12">
                <div className="text-white text-2xl mx-10">Upcoming Events</div>
            </div>
        </div>
    )
}

export default Events;
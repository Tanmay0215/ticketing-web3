import nftTokenImg from "../../public/magicstudio-art.jpg"
import BillingEventCard from "../Components/BillingEventCard";
import ConnectToMetaMask from "../Components/ConnectToMetaMask";
import { useNavigate } from "react-router-dom";
const BillingPage = () => {
    const navigate = useNavigate();
    const event = {
            "EventName" : "THE ERA'S TOUR",
            "Venue" : "Nala Supara",
            "Date" : "09/10/2005",
            "Description" : "The Eras Tour is the ongoing sixth concert tour by the American singer-songwriter Taylor Swift. It commenced on March 17, 2023, in Glendale, Arizona, and is set to conclude on December 8, 2024, in Vancouver, consisting of 149 shows that span five continents. With a cultural and economic impact across the globe, the Eras Tour became the first tour in history to surpass US$1 billion in revenue.",
            "Image" : "https://cdn01.justjared.com/wp-content/uploads/2024/05/new-poster/new-eras-tour-poster.jpg",
            "Artist" : "Taylor Swift",
            "PreviewToken" : nftTokenImg,
            "Price" : 0.4
        }

    return ( <div className="overflow-hidden flex-col gap-y-4 bg-Siuu w-screen min-h-screen flex items-center ">
        <div className="w-10/12 h-[70px] mt-[44px] flex justify-end items-center gap-x-3">
            <ConnectToMetaMask/>
            <div className="bg-purple-600 w-[50px] h-[50px] rounded-full"></div>
        </div>
        <div className="w-10/12 mt-[20px] flex gap-x-3 flex-col justify-center gap-y-6">
            <h3 className="uppercase text-[54px] w-full flex items-center font-bold">Billing</h3>
            <div className="w-full justify-between flex gap-x-10">
                <div className="rounded-md flex p-10 justify-between bg-white flex-col w-6/12 gap-y-2 shadow-lg shadow-black">
                    <h3 className="text-[36px] font-bold ">Event-Details</h3>
                    <div className="flex flex-col gap-y-2 my-3 overflow-hidden justify-center items-center">
                        <BillingEventCard event={event} />
                    </div>
                    <button className="py-2 rounded-lg px-4 max-w-[204px] bg-green-500 font-semibold text-[24px] text-black self-end" onClick={()=>navigate("/events")}>
                        Browse Events
                    </button>
                </div>
                <div className="rounded-md flex flex-col w-6/12 bg-white p-10 justify-between items-center shadow-lg shadow-black">
                        <h3 className="uppercase font-bold text-[36px]">Checkout Details</h3>
                        <div className="w-8/12 flex flex-col items-center border-b border-black pb-3 ">
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">No. Of Tickets : </div>
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">Price : </div>
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">Currency : <span>ETH</span></div>
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">NFT Preview : <img className="w-[50px] h-[50px] rounded-full" src={event["PreviewToken"]}/></div>
                        </div>
                        <div className="flex justify-between text-[28px] w-8/12 px-2 pt-1">
                            <span>Total</span>
                            <div>5 ETH</div>
                        </div>
                        <button className="py-1 px-4 rounded-lg bg-green-500 text-[24px] text-black font-semibold justify-self-end">Pay 1 ETH</button>
                </div>
            </div>
        </div>
        <div className="flex mt-[38px] justify-center w-10/12">
            <h1 className="uppercase font-bold text-[48px]">Get yourself a NFT, Buy ticket now !!</h1>
        </div>
    </div> );
}
 
export default BillingPage;
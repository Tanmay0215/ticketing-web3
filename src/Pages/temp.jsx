import { useContext, useEffect, useState } from "react";
import { EventTicketNFTABI } from "../../data";
import Web3 from "web3";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const contractAddress = "0x494B0e287f24a1D3E0f89a5823D420705B9A5f84";

function Temp({ event, tickets, userName, accountAddress }) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const {ipfsArray, setIpfsArray} = useContext(AppContext)
  const navigate = useNavigate();


  //pinata key and secret
  const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY;
  const pinataApiSecret = import.meta.env.VITE_PINATA_SECRET;


  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          // await window.ethereum.request({ method: "eth_requestAccounts" });

          // Initialize Web3
          const newWeb3 = new Web3(window.ethereum);
          setWeb3(newWeb3);

          // Get the connected accounts
          // const accounts = await newWeb3.eth.getAccounts();

          // Initialize the contract
          const newContract = new newWeb3.eth.Contract(
            EventTicketNFTABI,
            contractAddress
          );
          setContract(newContract);

          // Load events
          //   await loadEvents(newContract);
        } catch (error) {
          console.error("User denied account access or other error:", error);
        }
      } else {
        alert("Please install MetaMask!");
      }
    };

    init();
  }, []);

  //metadata creation and deployement to IPFS
  const deployToIpfs = async() => {
    setIpfsArray([])
    const IpfsUrlArray = []

    for(let i=0; i<tickets; i++){
      const metadata = {
        eventName: event["EventName"],
        eventDescription: event["Description"],
        eventDate: event["Date"],
        eventArtist: event["Artist"],
        eventVenue: event["Venue"],
        owner: userName,
        ticketNumber: event["TotalTickets"],
        NFTimage:  event["NFTimg"]
      }
      try {
        
        event.TotaleTickets--; //this here should be a db call to decrease the total ticket count permanently
  
        const metadataIpfsHash = await uploadMetadataToIPFS(metadata);
        console.log('Metadata uploaded to IPFS ticket ',i," :", `https://ipfs.io/ipfs/${metadataIpfsHash}`);
  
  
        // https://ipfs.io/ipfs/QmQw7DovEvcdmkZZQgp9sAvBAb9HC9iGRoFmSJu1L9Bq3A  -> dummy URI

        IpfsUrlArray.push(`https://ipfs.io/ipfs/${metadataIpfsHash}`)
  
        
      } catch (error) {
        console.log(`error while uploading to IPFS ${error}`);
        throw error;
      }
      IpfsUrlArray.length !== 0 ? setIpfsArray(IpfsUrlArray) : setIpfsArray("no Ipfs Url")

    }

  }

  const uploadMetadataToIPFS = async (metadata) => {
    const url = import.meta.env.VITE_PINATA_URL;

    try {
      const response = await axios.post(url, metadata, {
        headers: {
          'pinata_api_key': pinataApiKey,
          'pinata_secret_api_key': pinataApiSecret,
        },
      });

      return response.data.IpfsHash;


    } catch (error) {
      console.error('Error uploading metadata to IPFS: ', error.message);
      throw error;
    }
  };

  // Function to buy a ticket
  const buyTicket = async (eventId, price) => {
    try {
      const tx = await contract.methods.buyTicket(eventId).send({
        from: accountAddress,
        value: Web3.utils.toWei(price, "ether"),
      });
      console.log("Ticket purchased:", tx);
      if(tx){
        return true;
      }else{
        return false;
      }
    } catch (error) {
      console.error("Error buying ticket:", error);
    }
  };

  const navigateToPaymentPage = (successfullTransaction) => {
    if(successfullTransaction){
      navigate(`/Payment/${event.id}${1}`)
    }else{
      navigate(`/Payment/${event.id}${1}`)
    }
  }

  const buyTicketHandeler = async(eventId, price) => {
    await deployToIpfs()
    const successfullTransaction = await buyTicket(eventId, price);
    navigateToPaymentPage(successfullTransaction);
  }

  return (
    <button
      className="py-1 px-4 rounded-lg bg-green-500 text-[24px] text-black font-semibold justify-self-end"
      onClick={() => buyTicketHandeler(event.id, event.Price * tickets)}
    >
      Buy Ticket
    </button>
  );
}

export default Temp;

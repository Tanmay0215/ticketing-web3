import { useState } from "react";
import axios from "axios";

const PayEth = ({tickets, event, account}) => {

    const totalMoney = tickets * event['Price'];
    
    const user = {
        Name: "Dev",
        Email: "dev@gmail.com",
        ContactNo: 123123122,
    }

    const [loading, setLoading] = useState(false);
    const [eventName, setEventName] = useState(event["EventName"]);
    const [eventDescription, setEventDescription] = useState(event["Description"]);
    const [ipfsUrl, setIpfsUrl] = useState([]);
    const [eventDate, setEventDate] = useState(event["Date"]);
    const [eventArtist, setEventArtist] = useState(event["Artist"]);
    const [eventVenue, setEventVenue] = useState(event["Venue"]);
    const [owner, setOwner] = useState(user.Name);
    const [accountAddress, setAccountAddress] = useState(account)

    // const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY;
    // const pinataApiSecret = import.meta.env.VITE_PINATA_SECRET;
    const pinataApiKey = "38db96094599efa01949";
    const pinataApiSecret = "3f25ca9220af4bcd4deb2870a9be7a5e95550b010aff136c872946f108440c1e";
    console.log(pinataApiKey, pinataApiSecret)

    const uploadMetadataToIPFS = async (metadata) => {
        const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        for(let i=0; i<tickets; i++){

          try {
          const metadata = {
              eventName: eventName,
              eventDescription: eventDescription,
              eventDate: eventDate,
              eventArtist: eventArtist,
              eventVenue: eventVenue,
              owner: owner,
              ticketNo: event['TotalTickets'],
              image: event["PreviewToken"]
          };
  
          event.TotalTickets--;
  
  
          const metadataIpfsHash = await uploadMetadataToIPFS(metadata);
          console.log('Metadata uploaded to IPFS ticket ',i," :", metadataIpfsHash);
  
  
          setIpfsUrl(prev => (
            [
              ...prev,
              `ipfs://${metadataIpfsHash}`
            ]
          ));

          setLoading(false);
          
          } catch (error) {
          console.error('Error in NFT upload:', error);
          setLoading(false);
          }

        }
  };

    return ( 
        <button className="py-1 px-4 rounded-lg bg-green-500 text-[24px] text-black font-semibold justify-self-end" onClick={handleSubmit}>Pay {(totalMoney).toFixed(2)} ETH</button>
    );
}
 
export default PayEth;
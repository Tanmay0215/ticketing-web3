import React,{useState } from "react";

const ConnectToMetaMask = ()=>{
      const [account, setAccount] = useState(null);

      const connectWallet = async () => {
        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            console.log('Connected account:', accounts[0]);
          } catch (error) {
            console.error('Error connecting to MetaMask:', error);
          }
        } else {
          alert('MetaMask not found. Please install MetaMask!');
        }
      };


    
    return (
        <button className="px-4 py-2 text-[24px] max-h-[50px] border border-black rounded-md" onClick={connectWallet}>{account ? (<div>{account.slice(0,4) + '...' + account.slice(-4)}</div>):(<div>Connect Wallet</div>)}</button>
    )
}
export default ConnectToMetaMask;
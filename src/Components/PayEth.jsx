const PayEth = ({tickets, event, account}) => {

    const totalMoney = tickets * event['Price'];

    const pay = () => {
        console.log(totalMoney)
    }

    return ( 
        <button className="py-1 px-4 rounded-lg bg-green-500 text-[24px] text-black font-semibold justify-self-end" onClick={pay}>Pay {(totalMoney).toFixed(2)} ETH</button>
    );
}
 
export default PayEth;
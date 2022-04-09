import React, {useEffect, useState} from "react";
import {ethers} from 'ethers';
import { contractABI, contractAddress } from "../utilities/constants";

export const TransactionContext = React.createContext();
const { ethereum } = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    // console.log({provider, signer, transactionsContract});
    return transactionsContract;
  };

  export const TransactionsProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({addressTo:"",amount:"",keyword:"",message:""});
    const [isLoading,setisLoading] = useState(false);
    const [trans_count,settranscount] = useState(localStorage.getItem('transactionCount'))

    function handleChange(event,name){
        setFormData(prevState=>({...prevState,[name]:event.target.value}));
        // var k = {...prevState};
        // k[name] = event.target.value;
        // console.log(prevState);
        // setFormData(k);
    }

    const CheckIfWalletIsConnected = async ()=>{

        try{

            if(!ethereum) return alert("Please install MetaMask");
    
            const accounts = await ethereum.request({method: 'eth_accounts'});
    
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }else{
                console.log("No accounts found!");
            }
        }
        catch(err){
            console.log(err);
            throw new Error('No ethereum object');
        }
    }

    const connectWallet = async ()=>{
        try{
            if(!ethereum) return alert("Please install MetaMask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }catch(error){
            console.log(error);
            throw new Error('No ethereum object');

        }
    }

    const sendTransaction = async ()=>{
        try{
            if(!ethereum) return alert("Please install MetaMask");
            const {addressTo,amount,message,keyword} = formData;
            const transactionContract = createEthereumContract();
            const parsedAmt = ethers.utils.parseEther(amount);
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:currentAccount,
                    to:addressTo,
                    gas:'0x5208',
                    value:parsedAmt._hex,
                }]
            });
            const transactionHash = await transactionContract.add(addressTo,message,parsedAmt,keyword);
            setisLoading(true);
            console.log(`Loading: ${transactionHash.hash}`);
            await transactionHash.wait();
            setisLoading(false);
            console.log(`Success: ${transactionHash.hash}`);

            const transactioncount = await transactionContract.getcount();
            settranscount(transactioncount.toNumber())

        }catch(err){
            console.log(err);
            throw new Error('No ethereum object');
        }
    }
    useEffect(()=>{
        CheckIfWalletIsConnected();
    },[])


    return(
    <TransactionContext.Provider  value={{ connectWallet, currentAccount, sendTransaction, formData, handleChange, setFormData}}>
        {children}
    </TransactionContext.Provider>
    );
    // const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    // const [currentAccount, setCurrentAccount] = useState("");
    // const [isLoading, setIsLoading] = useState(false);
    // const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    // const [transactions, setTransactions] = useState([]);
  
    // const handleChange = (e, name) => {
    //   setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
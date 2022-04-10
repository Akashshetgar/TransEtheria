import React, {useContext} from 'react';

import './App.css';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import {BsShieldFillCheck} from 'react-icons/bs';
import {BsWallet2} from 'react-icons/bs';
import {BsWindow} from 'react-icons/bs';
// import {useContext} from 'react';
// import {TransactionContext} from '../context/TransactionContext';
import dummyData from './utils/dummyData';
import {Loader} from './';
import {shortenAddress} from './utils/shortenAddress';
import useFetch from './hooks/useFetch';

import { Route, Routes } from 'react-router-dom';
import { TransactionContext } from "./context/TransactionContext";



function App() {

   
  const {connectWallet, currentAccount, handleChange, sendTransaction,formData, transactions, isLoading} = useContext(TransactionContext);
  const Input = ({placeholder,name,type,value,handleChange}) => (
    <input 
    placeholder={placeholder}
    type={type}
    step="0.0001" 
    value={value}
    onChange={(event)=>handleChange(event, name)}
    className="my-2 w-full rounded-small p-2 outline-none bg-trasparent text-white border-none text-sm white-glassmorphism"
    />
  );
  

  const handleSubmit = (event) => {
    const {addressTo,amount,keyword,message} = formData;
      event.preventDefault();
      if(!addressTo || !amount || !keyword || !message){
        return;
      }  
      sendTransaction();
  }



  const TransactionCard = ({addressTo,addressFrom, timestamp, message, keyword, amount, url}) => {
    const gifUrl = useFetch({keyword})
    
    return (
      <div className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl">
        <div className="flex flex-col items-center w-full and mt-3">
          <div className='="w-full mb-6 p-2'>
            <a href={'https://ropsten.etherscan.io/address/${addressFrom}'} target="_blank" rel="noopener noreferrer">
              <p className="text-white text-base">
                From: {shortenAddress(addressFrom)}
              </p>
            </a>
            <a href={'https://ropsten.etherscan.io/address/${addressTo}'} target="_blank" rel="noopener noreferrer">
              <p className="text-white text-base">
                To: {shortenAddress(addressTo)}
              </p>
            </a>
            <p className="text-white text-base">Amount: {amount} ETH</p>
            {message &&(
              <>
              <p className="text-white text-base">Message: {message}</p>
              </>
            )}
            <p className="text-white text-base">Keyword: {keyword}</p>

              {/* <img src={gifUrl || url}
              alt='gif'
              className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"/> */}


              <p className="text-[#37c7da] font-bold">{timestamp}</p>

          </div>
        </div>
      </div>
    )
  }

  // const{currentAccount}=useContext(TransactionContext);

  const ServiceCard = ({color, title, icon, subtitle}) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={'w-10 h-10 rounded-full flex justify-center items-center $(color)'}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-2 text-white text-lg">{title}</h1>
        <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  )


  return (
    <div className="gradient-bg-welcome snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <div class="snap-start w-screen h-screen flex flex-col space-y-4 justify-center items-center">
        <div className="w-120 p-2 text-gradient rounded-xl">
          <p className="font-semibold text-[50px] sm:text-[100px]">TransEtheria</p>
        </div>
        <div className="w-120 p-2 text-gradient rounded-xl">
          <p className="font-semibold text-lg">Etherium Transactions Made Easy</p>
        </div>
        {!currentAccount &&
        (<button type='button' onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-gray-500 p-2 w-60 rounded-full cursor-pointer hover:bg-gray-700">
          <p className="text-white text-base font-seimcolon">Connect Wallet</p> 
        </button>)
        }
      </div>
      <div class="snap-start w-screen h-screen flex flex-col space-y-4 justify-center items-center">
        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
          <div className='p-3 items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex flex-row items-start justify-between">
                <div className="w-10 h-10 border-2 rounded-full border-white flex justify-center items-center">
                  {/* <SiEtherium fontSize={21} color="#ffff" /> */}
                </div>
                {/* <BsInfoCircle fontSize={17} color="#fff" /> */}
              </div>
              <div>
                <p className="text-white font-light index-sm">
                  0xgaudygaygdu.....auwgyduyagwd
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>

          <div className='p-5 w-full sm:w-96 flex flex-col justify-start items-center blue-glassmorphism'>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} value={formData.addressTo}/>
            <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={handleChange} value={formData.amount}/>
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} value={formData.keyword}/>
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} value={formData.message}/>
            

            <div className="h-1px w-full bg-gray-400 my-2"/>

            {isLoading?(
              // <Loader />
              <div />
            ):(<button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">Send Now</button>)}
          </div>

        </div>
      </div>
      <div class="snap-start w-screen h-screen flex flex-col space-y-4 justify-center items-center">
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
              <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl px-2 text-gradient">
                  Benefits of using 
                  <br />
                  our service
                </h1>
              </div>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard 
          color="bg-[#2952E3]"
          title="Minimalistic Interface"
          icon={<BsWindow fontSize={21} className="text-white" />}
          subtitle="We make sure that you you get what you want as soon as possible."
          />
          <ServiceCard 
          color="bg-[#89845F8]"
          title="Impenetrable Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Etherium's blockchain network will guarantee the safety of your transactions."
          />
          <ServiceCard 
          color="bg-[#F84550]"
          title="Instant Transactions"
          icon={<BsWallet2 fontSize={21} className="text-white" />}
          subtitle="No hassle. Just enter your details and you are good to go."
          />
          </div>
        </div>

      </div>
      <div class="snap-start w-screen h-fit flex flex-col space-y-4 justify-center items-center">
        <div className="flex w-full justify-center items-center 2xl:px-20 ">
          <div className='flex flex-col md:p-12 py-12 px-4'>
            {true?(
              <h1 className="text-white text-5xl text-center my-2 text-gradient">
                Latest Transactions
              </h1>
            ):(
              <h1 className="text-white text-5xl text-center my-2 text-gradient">
                Connect your account to see the latest Transactions
              </h1>
            )}
            <div className="flex flex-wrap justify-center items-center mt-10">
              {transactions.reverse().map((transaction,i)=>(
                <TransactionCard key={i} {...transaction}/>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

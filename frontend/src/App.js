import React, {useContext} from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import { TransactionContext } from "./context/TransactionContext";



function App() {

   
  const {connectWallet, currentAccount, handleChange, sendTransaction,formData} = useContext(TransactionContext);
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

  return (
    <div className="gradient-bg-welcome snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <div class="snap-start w-screen h-screen flex flex-col space-y-4 justify-center items-center">
        <div className="w-120 p-2 white-glassmorphism text-gradient rounded-xl">
          <p className="font-semibold text-[100px]">TransEtheria</p>
        </div>
        <div className="w-120 p-2 white-glassmorphism text-gradient rounded-xl">
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
              <div className="flex items-start justify-between">
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

          <div className='p-5 sm:w-95 w-1/2 flex flex-col justify-start items-center blue-glassmorphism'>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} value={formData.addressTo}/>
            <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={handleChange} value={formData.amount}/>
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} value={formData.keyword}/>
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} value={formData.message}/>
            

            <div className="h-1px w-full bg-gray-400 my-2"/>

            {false?(
              // <Loader />
              <div />
            ):(<button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">Send Now</button>)}
          </div>

        </div>
      </div>
      <div class="snap-start w-screen h-screen flex flex-col space-y-4 justify-center items-center">
        3
      </div>
      <div class="snap-start w-screen h-screen flex flex-col space-y-4 justify-center items-center">
        4
      </div>
    </div>
  );
}

export default App;

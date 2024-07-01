import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrencyinfo from './hooks/useCurrencyinfo'
import Inputbox from './components/Inputbox'

function App() {
  const [amount,setamount] =useState(0)
  const [from,setfrom]=useState('usd')
  const [to,setto]=useState('inr')
  const [convertedamount,setconvertedamount] =useState(0)
  const Currencyinfo=usecurrencyinfo(from)
  const options= Object.keys(Currencyinfo)
  const swap =()=>{
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }
  const convert =()=>{
    setconvertedamount(amount*Currencyinfo[to])
  }



  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
    style={{backgroundImage:`url(https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&w=800)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <Inputbox label="from"
              amount={amount}
              currencyoptions={options}
              oncurrencychange={(currency)=>setfrom(currency)}
              onamountchnage={(amount)=>setamount(amount)}
              selectedcurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
        <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
          swap
        </button>
      </div>
      <div className='w-full mb-1'>
              <Inputbox label="to"
              amount={convertedamount}
              currencyoptions={options}
              oncurrencychange={(currency)=>setto(currency)}
              selectedcurrency={to}
              amountdisabled
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>

        </div>
      </div>
      

    </div>
  )
}

export default App

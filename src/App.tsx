import React, { useState } from 'react'
import './App.css'

function App() {
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)

  function calculateDate(dayOfBirth: number, monthOfBirth: number, yearOfBirth: number) { 
        
    const date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
    if(dayOfBirth > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(monthOfBirth > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
        
    const d = d2 - dayOfBirth;
    const m = m2 - monthOfBirth;
    const y = y2 - yearOfBirth;
    
    setDays(d)
    setMonths(m)
    setYears(y)
}

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { days, months, years } = Object.fromEntries(new window.FormData(e.currentTarget))
    const dayOfBirth = parseInt(days.toString());
    const monthOfBirth = parseInt(months.toString());
    const yearOfBirth = parseInt(years.toString());
    calculateDate(dayOfBirth, monthOfBirth, yearOfBirth)
  }

  return (
    <div className='container flex justify-center items-center my-0 mx-auto min-h-screen bg-offWhite'>
      <div className='h-5/6 w-[90%] md:w-[60%] md:h-auto p-5 md:p-10 md:px-14 bg-White rounded-3xl rounded-br-[25%] md:rounded-br-[30%]'>
        <div className='mb-7'>
          <form
            className="border-b-[1px] pt-10 pb-10 md:pb-10 lg:p-5 mb-10 md:mb-3 border-gray-200 relative"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="flex justify-between items-center gap-5 md:w-[70%]">
              <div className="flex flex-col">
                <label htmlFor="day" className='text-smokeyGrey tracking-widest text-xs md:text-lg mb-2'>DAY</label>
                <input name="days" type="datetime" id="input1" required placeholder="DD" className="min-w-[70px] md:min-w-[150px] h-[50px] md:h-[70px] border border-gray-300 text-lg md:text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" maxLength={2} size={2} />
                <div className=""></div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className='text-smokeyGrey tracking-widest text-xs md:text-lg mb-2'>MONTH</label>
                <input name="months" type="datetime" id="input2" required placeholder="MM" className="min-w-[70px] md:min-w-[150px] h-[50px] md:h-[70px] border border-gray-300 text-lg md:text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" maxLength={2} size={2} />
                <div className=""></div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className='text-smokeyGrey tracking-widest text-xs md:text-lg mb-2'>YEAR</label>
                <input name="years" type="datetime" id="input3" required placeholder="YYYY" className="min-w-[70px] md:min-w-[150px] h-[50px] md:h-[70px] border border-gray-300 text-lg md:text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" maxLength={4} size={4} />
                <div className=""></div>
              </div>
            </div>
            <button
              className='bg-purple p-2 rounded-full h-12 md:h-24 w-12 md:w-24 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-6'
              type="submit"
              id="btn"
            >
              <img className='h-6 md:h-10 my-0 mx-auto' src="/src/assets/images/icon-arrow.svg" alt="" />
            </button>
          </form>
        </div>
        <div className='w-full'>
          <p className='text-6xl md:text-9xl italic font-bold tracking-tighter text-offBlack'><span className='text-purple'>{years === 0 ? '-' : years}</span> years</p>
          <p className='text-6xl md:text-9xl italic font-bold tracking-tighter text-offBlack'><span className='text-purple'>{months === 0 ? '-' : months}</span> months</p>
          <p className='text-6xl md:text-9xl italic font-bold tracking-tighter text-offBlack'><span className='text-purple'>{days === 0 ? '-' : days}</span> days</p>
        </div>
      </div>
    </div>
  )
}

export default App

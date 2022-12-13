import React, { useEffect, useState } from "react"

export function TimeElement(){

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  const timeNow = dateState.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true,})

  return(
    <div className="absolute left-0 right-0 bottom-20 flex justify-center items-center">
      <div className="text-center text-white w-20 h-8 rounded-[80px] backdrop-blur-md bg-[#141414]">
        <span className="text-sm align-middle">{timeNow}</span>
      </div>
    </div>
  )
}
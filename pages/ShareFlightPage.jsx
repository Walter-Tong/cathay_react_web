function ShareFlightPage() {
  const [flightType, flightNum, src, dest, date, time, gate] = [
    'hkexpress',
    '888',
    'HKG',
    'CXC',
    '19 Nov 2023',
    '1:15PM',
    '23',
  ]
  return (
    <>
      <div className="space-y-2">
        <div className="text-2xl font-bold text-[#005D63]">
          Flight Detail Sharing
        </div>
        <div
          className={
            'flex h-fit w-full flex-col items-center border-2 border-opacity-30 bg-opacity-10 shadow-lg ' +
            (flightType == 'cathay'
              ? 'border-[#005D63] bg-[#005D63]'
              : 'border-[#68338D] bg-[#68338D]')
          }>
          <div className="mt-2 flex w-full items-center border-b-2 border-[#005D63] border-opacity-30 pb-2">
            <img src={flightType + '.jpg'} className="ml-2 h-24 shadow" />
            <div className="-space-y-1 pl-3">
              <div className="text-xl font-bold">{flightNum}</div>
              <div>
                {src} -{'>'} {dest}
              </div>
              <div>{date}</div>
              <div className="font-bold">{'Gate ' + gate + ' at ' + time}</div>
            </div>
          </div>
          <img src="boarding-pass.jpg" className="h-60 p-5" />
        </div>
      </div>
      <div className="mt-3 px-2">
        You may ask whoever you wish to share your flight details with to scan
        this code, such as your friends and family.
        <p className="mt-2">They will get access to a flight overview. The boarding pass is not shared.</p>
      </div>
    </>
  )
}

export default ShareFlightPage

function BoardingPage() {
  const [flightType, flightNum, src, dest, date, time] = [
    'hkexpress',
    '888',
    'HKG',
    'CXC',
    '19 Nov 2023',
    '1:15PM',
  ]
  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold text-[#005D63]">Boarding Pass</div>
      <div
        className={
          'flex h-60 w-full items-start justify-between border-2 border-opacity-30 bg-opacity-10 shadow-lg ' +
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
            <div className="font-bold">Boarding at {time}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardingPage

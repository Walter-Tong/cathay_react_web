import { Link } from 'react-router-dom'

function BoardingPage() {
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
    <div className="space-y-2">
      <div className="text-2xl font-bold text-[#005D63]">Boarding Pass</div>
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
            <div className="text-xl font-bold">
              {(flightType == 'cathay' ? 'CX' : 'UO') + flightNum}
            </div>
            <div>
              {src} -{'>'} {dest}
            </div>
            <div>{date}</div>
            <div className="font-bold">{'Gate ' + gate + ' at ' + time}</div>
          </div>
        </div>
        <img src="boarding-pass.jpg" className="h-60 p-5" />
      </div>
      <Link
        to="/share-flight"
        className="flex h-12 w-full flex-row items-center justify-center overflow-hidden border-2 border-[#005D63] border-opacity-30 bg-[#005D63] bg-opacity-10 text-xl font-bold text-[#005D63] shadow-lg">
        <div className="mr-2">Share flight details</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </Link>
    </div>
  )
}

export default BoardingPage

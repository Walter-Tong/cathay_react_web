import { Link } from 'react-router-dom'

function FlightInfoCard(props) {
  const { flightType, flightNum, src, dest, date, time } = props.props
  return (
    <Link
      to="boarding"
      className={
        'flex h-28 w-full items-center justify-between border-2 border-opacity-30 bg-opacity-10 shadow-lg ' +
        (flightType == 'cathay'
          ? 'border-[#005D63] bg-[#005D63]'
          : 'border-[#68338D] bg-[#68338D]')
      }>
      <div className="flex items-center">
        <img src={flightType + '.jpg'} className="ml-2 h-24 shadow" />
        <div className="-space-y-1 pl-3">
          <div className="text-xl font-bold">{flightNum}</div>
          <div>
            {src} -{'>'} {dest}
          </div>
          <div>{date}</div>
          <div>Boarding at {time}</div>
        </div>
      </div>
      <div className="pr-2">
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </Link>
  )
}

export default FlightInfoCard

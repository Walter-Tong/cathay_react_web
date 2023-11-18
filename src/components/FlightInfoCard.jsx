function FlightInfoCard(props) {
  const { flightType, flightNum, src, dest, date, time } = props.props
  return (
    <div className="w-full h-28 bg-[#005D63] bg-opacity-25 shadow-lg flex items-center">
      <img src={flightType + '.jpg'} className="h-24 ml-2" />
      <div className="pl-3 pr-9 -space-y-1">
        <div className="font-bold text-xl">{flightNum}</div>
        <div>
          {src} -{'>'} {dest}
        </div>
        <div>{date}</div>
        <div>Boarding at {time}</div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  )
}

export default FlightInfoCard

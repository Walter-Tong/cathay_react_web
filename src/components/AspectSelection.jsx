import AspectSelectionAspectBox from './AspectSelectionAspectBox'

function AspectSelection({ aspect, setAspect }) {
  const aspects = [
    'Flight Bookings',
    'Check-in',
    'Baggage',
    'Seat Selection',
    'Foods and Drinks',
  ]

  return (
    <div className="mt-2 flex flex-col items-center border-2 border-[#005D63] border-opacity-30 text-xs font-semibold">
      {aspects.map((val, ind) => (
        <AspectSelectionAspectBox
          val={val}
          aspect={aspect}
          setAspect={setAspect}
          index={ind}
          key={ind}
        />
      ))}
    </div>
  )
}

export default AspectSelection

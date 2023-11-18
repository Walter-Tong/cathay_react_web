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
    <div className="m-1 flex flex-row rounded-2xl p-1 text-sm shadow">
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

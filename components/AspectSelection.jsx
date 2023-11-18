import AspectSelectionAspectBox from "./AspectSelectionAspectBox"

function AspectSelection({aspect, setAspect}) {
    const aspects = [
        "Flight Bookings",
        "Check-in",
        "Baggage",
        "Seat Selection",
        "Foods and Drinks"
    ]

    return (
        <div className="flex flex-row p-1 text-sm shadow m-1 rounded-2xl">
            {aspects.map((val, ind) => <AspectSelectionAspectBox val={val} aspect={aspect} setAspect={setAspect} index={ind} key={ind} />)}
        </div>
    )
}

export default AspectSelection
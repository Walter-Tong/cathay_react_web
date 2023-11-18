import api2 from "../api2.json"

function BaggageInfoPlane({pid, sid}) {
    if (!api2.hasOwnProperty(pid+sid)) {
        return <></>
    }

    const baggageInfo = api2[pid + sid].data;

    return (
        <div>
            Allow number of baggage: {baggageInfo[0].baggageGroupAllowances.baggageGroupAllowance.quantity}
            <div>
                Allow weight: {baggageInfo[0].baggageGroupAllowances.baggageAllowanceBreakdowns[1].weight?.value}
            </div>
        </div>
    )
}

export default BaggageInfoPlane
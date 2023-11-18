import api5 from "../api5.json"

function FlightInfoPlane({fid}) {
    if (!api5.hasOwnProperty(fid)) {
        return <></>
    }

    const planeData = api5[fid].data;

    console.log(fid)

    return (
        <div>
            <div>
                {fid} {"   "} {planeData.scheduledDepartureDate} 
            </div>
            <div>
                {planeData.flightPoints[0].iataCode} {" TO "} {planeData.flightPoints[1].iataCode}
            </div>
        </div>
    )
}

export default FlightInfoPlane
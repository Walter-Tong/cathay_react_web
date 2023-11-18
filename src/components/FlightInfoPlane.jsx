import api4 from '../../api4.json'

function FlightInfoPlane({ fid }) {
  if (!Object.prototype.hasOwnProperty.call(api4, fid)) {
    return <></>
  }

  const planeData = api4[fid].data

  console.log(fid)

  return (
    <div>
      <div>
        {fid} {'   '} {planeData.scheduledDepartureDate}
      </div>
      <div>
        {planeData.flightPoints[0].iataCode} {' TO '}{' '}
        {planeData.flightPoints[1].iataCode}
      </div>
    </div>
  )
}

export default FlightInfoPlane

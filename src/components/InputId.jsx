import { useState } from 'react'
import QRCode from 'react-qr-code'
import FlightInfoPlane from './flightInfoPlane'
import BaggageInfoPlane from './BaggageInfoPlane'

function InputId() {
  const [qrCode, setQRCode] = useState(null)

  const [flightInfo, setFlightInfo] = useState(null)

  const [baggageInfo, setBaggageInfo] = useState(null)

  const [formItem, setFormItem] = useState({
    BookingID: '',
    Flight: '',
    SegmentID: '',
    PassengerID: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormItem(prevFormItem => ({
      ...prevFormItem,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Perform form submission logic here
    setQRCode(<QRCode value={JSON.stringify(formItem)} />)
    setFlightInfo(<FlightInfoPlane fid={formItem.Flight} />)
    setBaggageInfo(
      <BaggageInfoPlane pid={formItem.PassengerID} sid={formItem.SegmentID} />,
    )
  }

  return (
    <div className="flex w-screen flex-col items-center">
      <button>Scan QR code</button>
      <form onSubmit={handleSubmit}>
        <label>
          Booking ID:
          <input
            type="text"
            name="BookingID"
            value={formItem.BookingID}
            onChange={handleChange}
            placeholder="Enter Booking ID"
          />
        </label>
        <br />
        <label>
          Flight:
          <input
            type="text"
            name="Flight"
            value={formItem.Flight}
            onChange={handleChange}
            placeholder="Enter Flight"
          />
        </label>
        <br />
        <label>
          Segment ID:
          <input
            type="text"
            name="SegmentID"
            value={formItem.SegmentID}
            onChange={handleChange}
            placeholder="Enter Segment ID"
          />
        </label>
        <br />
        <label>
          Passenger ID:
          <input
            type="text"
            name="PassengerID"
            value={formItem.PassengerID}
            onChange={handleChange}
            placeholder="Enter Passenger ID"
          />
        </label>
        <br />
        <button type="submit">Create QR code</button>
      </form>
      {qrCode}
      <button>Check Baggage</button>
      {flightInfo}
      {baggageInfo}
    </div>
  )
}

export default InputId

import FlightInfoCard from '../src/components/FlightInfoCard'

function HomePage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center">
        <img
          src="profile-img.jpg"
          className="w-10 h-10 rounded-full border-2 mr-2 border-[#005D63] border-opacity-25"
        />
        <div className="text-2xl text-[#005D63] font-medium">
          Mercurius Wong
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-2xl text-[#005D63] font-bold">
          Upcoming Flights
        </div>
        <div className="space-y-3">
          <FlightInfoCard
            props={{
              flightType: 'hkexpress',
              flightNum: 'UO888',
              src: 'HKG',
              dest: 'CXC',
              date: '19 Nov 2023',
              time: '1:15PM',
            }}
          />
          <FlightInfoCard
            props={{
              flightType: 'cathay',
              flightNum: 'UO888',
              src: 'HKG',
              dest: 'LAX',
              date: '19 Dec 2024',
              time: '9:15AM',
            }}
          />
          <FlightInfoCard
            props={{
              flightType: 'cathay',
              flightNum: 'UO986',
              src: 'LAX',
              dest: 'HKG',
              date: '25 Sep 2024',
              time: '12:15AM',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage

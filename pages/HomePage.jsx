import FlightInfoCard from '../src/components/FlightInfoCard'

function HomePage() {
  return (
    <div className="space-y-7">
      <div className="flex items-center">
        <img
          src="profile-img.jpg"
          className="mr-2 h-10 w-10 rounded-full border-2 border-[#005D63] border-opacity-25"
        />
        <div className="text-2xl font-medium text-[#005D63]">
          Mercurius Wong
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-bold text-[#005D63]">
            Upcoming Flights
          </div>
          <div className="text-[#005D63]">More</div>
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
              flightNum: 'UO876',
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
          <a
            href="https://www.cathaypacific.com/cx/en_HK/book-a-trip.html"
            className="flex h-12 w-full flex-row items-center justify-center overflow-hidden border-2 border-[#005D63] border-opacity-30 bg-[#005D63] bg-opacity-10 text-xl font-bold text-[#005D63] shadow-lg">
            <div className="mr-2">Book via Cathay</div>
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
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>
          <a
            href="https://www.hkexpress.com/en-hk/"
            className="flex h-12 w-full flex-row items-center justify-center overflow-hidden border-2 border-[#68338D] border-opacity-30 bg-[#68338D] bg-opacity-10 text-xl font-bold text-[#68338D] shadow-lg">
            <div className="mr-2">Book via HK Express</div>
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
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage

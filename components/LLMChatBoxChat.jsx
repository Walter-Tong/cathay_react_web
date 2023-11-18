import { useState } from "react";
import ChatMessagegBox from "./ChatMessageBox";
import AspectSelection from "./AspectSelection";

async function sendChatRequest(system, userPrompts, previousMessages, setPreviousMessages) {
    const url = 'http://localhost:1234/v1/chat/completions';
    const payload = {
        messages: [
            { role: 'system', content: system },
            ...previousMessages,
            { role: 'user', content: userPrompts },
        ],
        temperature: 1,
        max_tokens: -1,
        stream: false
    };

    //console.log(payload.messages)
    setPreviousMessages([...previousMessages, payload.messages[payload.messages.length - 1]])

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.choices[0].message.content);
            setPreviousMessages([...previousMessages, payload.messages[payload.messages.length - 1], { role: "assistant", content: data.choices[0].message.content }])
            // Do something with the response data

        }
    } catch (error) {
        console.error('Request failed with error:', error);
    }
}

function LLMChatBoxChat({previousMessages, setPreviousMessages}) {

    const [aspect, setAspect] = useState(0)

    const baseSystem = "You are a chatbot that provide information to passager, you will given a set of frquency ask question. Please use them to ask to provide answer to passenger question"

    const FAQ = [
        `How do I book a ticket?
        Tickets can be booked via our official website, mobile app, via travel agencies or third-party websites. Booking through our official website or mobile app is easy, if you want to make last minute booking, it is available up to 60 minutes before the flight's departure time. For more information, please visit "Booking via our website". If you have not completed the payment during booking, the ticket will not be reserved.
        
        What types of fare do you offer and what do they include?
        There are 2 types of fare: Fun Fare and FunFlex Fare. The following are the benefits of each type of fare:
        
        Fun Fare
        Free carry on baggage up to 7 kg
        FunFlex Fare
        Free carry on baggage up to 7 kg
        U-First benefits: priority check-in, express boarding and priority baggage
        Free date/time changes up to 3 hours before departure(fare difference applies)
        Can I book multi-city/open jaw flights？
        You can book multi-city/open jaw flights if you depart from Hong Kong, unfortunately this function is temporarily unavailable for flights departing from other origins. To make such bookings, kindly visit our official website, select “Multi-City” from the drop down menu at the flight search section.
        
        How do I book group tickets/family tickets?
        Our expert group booking team will be happy to help with all of your group travel needs. Our dedicated team specialises in coordinating group travel for schools, sports teams, family reunions, weddings, company incentives and more. To make a booking for 10 or more people, or for general group inquiries, please email to hke.groupdesk@hkexpress.com or call us at +852 3702 7616 (Mon - Sat: 09:00 – 19:00).
        
        Can I still use the returning flight of my round trip booking if I missed my outbound flight?
        If for any reason you missed the outbound flight of your round trip booking, your returning flight will still be valid. However, no full refund will be given for the outbound sector (except flights to/from South Korea).
        
        What is processing fee?
        Processing fee is a booking channel fee. It is only applicable for bookings originated outside of Hong Kong(e.g. Tokyo <> Hong Kong).
        
        What is fuel surcharge?
        Fuel surcharge is the additional fee to cover the fluctuating fuel cost. It may be adjusted in accordance with fuel prices. Different fuel surcharges are applicable for flights originating from different regions, and the fee is non refundable. For more information, please visit Fuel Surcharge.
        
        Can I correct a misspelled name or make changes to the names in my booking?
        We allow minor name corrections. The passenger's name on the booking should be identical with the name on the passport. Name correction is permitted for the following instances: spelling, interchanging first and last names, and title. You will need to send us your passport copy for verification. please contact us via WhatsApp or Wechat. Please be reminded that there is a fee for name correction on a per passenger per booking basis. For more information, please visit "Other Fees".
        
        Should I enter my middle name when making my booking?
        Yes, it is necessary to input your full name when making your booking. The name on the booking must exactly match the name on your passport. Therefore, please input your middle name after your first name when purchasing your ticket.
        
        Can I transfer my booking to another person?
        According to standard airline's policy, you are not permitted to transfer your booking to another person. If you want to book a flight for another person, please make a new booking.
        
        Can I make changes to date of birth in my booking?
        Yes, if you need to correct the date of birth in your booking, please contact us via WhatsApp or Wechat. Kindly indicate your booking reference number, name of the passenger and the correct date of birth. No fee will be incurred.
        
        How do I change my contact information and gender in my booking?
        You can modify your contact information and gender of your booking without any cost, please contact us via WhatsApp or Wechat.
        
        When will I get the e-ticket after making a booking?
        A booking confirmation email with details of your itinerary will be sent to the email address in the booking immediately after your booking is made. The itinerary will serve as your "e-ticket", the booking reference number or "PNR" will be your ticket number. We suggest Customers to print and bring the copy of your confirmation email with you to the airport for easy check-in. You may also request your itinerary here.
        
        How do I request for a copy of my travel itinerary?
        To request for a copy of your travel itinerary, please follow the below steps:
        
        Visit this link: https://hkexpress-eform.tpapac.io
        On the request page, select “Request for Itinerary”
        Fill in all the information correctly
        Click “Submit”
        Note: If your booking was created via travel agency, please contact your travel agent regarding your itinerary.
        
        How do I request for an invoice?
        The payment summary in your booking confirmation email entails payment details, this will serve as an invoice for your booking. If you would like to request a copy of your itinerary please visit: https://hkexpress-eform.tpapac.io
        
        How can I change the date/time of my flight?
        To make changes to your flight, the change request must be made at least 48 hours before scheduled flight departure.
        
        A fee will be charged for flight changes on a per passenger and per segment basis. Fare difference may apply and there will not be any refunds for lower fares. Please refer to this link for the updated fees and charges.
        
        You can either use our mobile application or message us via our WhatsApp or Wechat to submit change request. If you made your reservation through our website, you can change your flights via "Manage My Booking". Just follow these simple steps:
        
        Step 1: Select "Manage My Booking" on our official homepage.
        Step 2: To retrieve your reservation, input your reference number/PNR and the last name of the person who made the booking
        Step 3: Click "Change Flight"
        Step 4: Select the desired flight sector you wish to change, then click "Find Flights"
        Step 5: Select the desired new flight time. As you select the new flight, any additional charges incurred will be displayed at the upper right side of your screen. Then click "Next" to proceed
        Please note, If your new flight departs in the next 4 days, your current meal selection will be forfeited. We are unable to allocate your current seats to your new flights. Previous seat selection fees will be refunded to you in the form of credit and can be used for seat selection, other travel extras or to offset the cost of your new flight. Your new flight date may not match the dates of your insurance policy, please contact your insurance provider for details.
        Step 6: Please review flight details and charges carefully before proceeding to payment. Input your credit card details and confirm acceptance of our policies. Then click “Next” to confirm and complete payment. The updated itinerary will be sent via email
        Flights departing from Korea: For changes made at least 48 hours before scheduled departure time, a change fee of KRW 30,000 one-way will be charged; for changes made within 48 hours before scheduled departure time, a fee of KRW 60,000 one-way will be charged. Due to fare and tax applicable at the time of change, fare differences may apply and there will not be any refund for lower fares. Change of names or routes are not permitted. Date/time change is permitted only with respect to flights that depart from Korea.
        
        If my flight is cancelled by HK Express, how do I make changes to the affected flights?
        You can submit change request via this link.
        
        You may also contact us via our WhatsApp or Wechat. Our Customer Care representatives will assist you to accommodate you to the next available flight. Please note that seats are subject to availability.
        
        Can I change the origin/destination of my flight?
        Once your booking is confirmed, re-routing (changing origin/destination) is not permitted.
        
        Do I need to buy tickets for babies under 2 years old?
        We value the comfort and safety of each of our Customers, including those with infants. Infants can only be accepted for travel after 7 days from birth. You are advised to make infant bookings online or via our Call Center 48 hours before travelling due to the limited number of infants that can be accommodated on a flight for safety reasons.
        
        You may find guidelines for travelling with an infant here.
        
        I have another connecting flight with a different airline after my HK Express flight in a separate booking. What documents do I need/ what do I need to do?
        HK Express does not offer through-check and baggage services with other airlines. Please note that the transit counter is only available for U-Connect passengers or those transiting to a ferry at SkyPier in Hong Kong International Airport.
        For transfers involving other airlines, passengers must possess a valid travel document and/or visa to enter the final destination of their HK Express flight. Upon arrival, passengers will need to clear immigration at the transit airport and proceed to the check-in counter of the other airline for check-in. Passengers with connecting flights on other airlines are strongly advised to check in early for their HK Express flight at the departure airport as certain destinations may require additional time to obtain landing permission from local immigration authorities to enter and transit at the respective airport.`,



        `How do I check-in online?
        Online check-in is available between 75 minutes and 48 hours prior to departure time. We strongly recommend our Customers to utilize our online check-in services to save your time and avoid queues at airports.
        
        For online check-in, please follow the steps below:
        
        Step 1: Select "Check In" on our official homepage.
        Step 2: Input the booking reference/PNR and last name, then select "Check-in".
        Step 3: Check the box beside each passenger name and Terms and Conditions. Then, click "Next" to complete
        For mobile check-in, please download our mobile application and follow the steps below:
        
        Step 1: Select "Check-in" tab
        Step 2: Enter your booking reference number/PNR and last name of the person who made the booking
        Step 3: Check the box beside each passenger name and Terms and Conditions. Then, click "Next" to complete
        After successfully check-in online, you may print out your boarding pass and bring it upon boarding.
        
        Please note that online check-in is not available for bookings with more than 9 passengers and some flights, for details please visit Online Check-in.
        
        My e-boarding pass does not show a gate number, how do I know which gate to go to?
        Gate number will be available from 90 minutes before flight departure. You may visit Hong Kong International Airport's wesbite, check flight information board at the airport, or approach our staff at check-in counters to find out your gate number.
        
        Can I go directly to the boarding gate if I have already checked in online?
        If you do not have any check-in baggage and have already obtained your online or mobile boarding pass, you can proceed directly to the boarding gate. For those needing to check in baggage, please visit our designated airport counters before the closing time. Be sure to arrive at the boarding gate with your travel documents by the boarding time stated on your boarding pass. Note that late passengers will not be accommodated, as the boarding gate will close 20 minutes before the scheduled departure time.
        
        Please be aware that the online check-in service is not available for flights departing from Ningbo. All passengers are required to visit airport check-in counters for travel document verification and to obtain a printed boarding pass before proceeding to immigration.
        
        Also note that electronic boarding passes may not be available for some routes*. If you are unable to obtain your electronic boarding pass after online check-in, please visit our check-in counter to obtain a printed boarding pass.
        
        *This includes flights from Busan, Jeju, and Seoul (Incheon) to Hong Kong; from Hong Kong to Taichung, Kaohsiung, and Taipei; as well as flights to and from Da Nang, Nha Trang, and Hanoi.
        
        Are there restrictions to using online check-in(includes web and mobile)?
        Online check-in is not applicable to:
        
        Bookings with more than 9 passengers
        Passengers departing from Chinese mainland
        Passengers who require any special assistance or carry infants
        For more information about online check-in, please visit here.
        
        Where is the location of HK Express check-in counter at Hong Kong International Airport?
        Our check-in counters at Hong Kong International Airport are located at Row H of Terminal 1.
        
        
        How do I get and print my boarding pass?
        After checking in online, you may click "Print Boarding Pass" displaying next to passenger names. If you do not have a printer with you, you may request to print it out at our airport check-in counter.
        
        If you checked in via mobile app, there is no need to print your boarding pass. Checking-in with our mobile app allows you to save your boarding pass directly to your device.
        
        What will happen if I travel with a passport soon to be expired?
        All Customers, including children and infants, must hold a valid travel document to fly on HK Express. Under some circumstances, you may also have to obtain a visa. As the documentation required varies by destination and citizenship, passengers have the responsibility to verify and obtain all necessary documents needed to travel prior to make a booking.
        
        You must have a valid passport or travel document for the duration of your trip, the expiry date must be acceptable in all the countries you enter. Please note that most countries require 3 to 6 months validity at time of travel. For more information, please contact your government’s department or ministry responsible for international travel and the nearest embassy or consulate representing your destination.
        
        HK Express will not be liable for any loss or delay caused by the lacking of such required travel documents. Customers have the responsibility to check the requirements for all members of their party.
        
        For more information, please visit here
        
        What documents do I need to present upon check-in?
        Customers must present valid travel documents such as passport (visa and printed itinerary if applicable) upon check-in.`,

        `What is the weight limit and required dimension of carry on baggage?
        You are allowed to bring one cabin baggage with max. dimensions of 56 x 36 x 23cm (22” x 14” x 9”) and not exceed 7kg (15.4 lbs.), and one small personal item (i.e. handbag, briefcase or camera bag) with max. dimensions of 40 x 25 x 20cm (15.7” x 10” x 8”) onboard.
        
        Duty-free goods purchased after check-in will need to be within the size and weight limitations of the carry-on requirements stated above. Any items exceeding weight or size restrictions will have to be checked in, and fees will apply.
        
        For more information, please visit Carry On Baggage.
        
        Can I bring my musical instruments onboard?
        You may bring musical instruments onboard provided they meet our standard cabin baggage size and weight limitations.
        
        All musical instruments must be stored in a sturdy, hard-side case with round edges. Soft cases will not be accepted. The maximum linear size (H x W x D) accepted in the cabin is 22 x 14 x 9 inches and must not weigh more than 7kg. The instrument will be considered as part of your cabin baggage allowance.
        
        How can I add or upgrade check-in baggage for my existing bookings online?
        You can add check-in baggage online through "Manage My Booking" portal provided that your booking was made through HK Express website and the action is made at least 48 hours prior to departure time. You may check the baggage fees here.
        
        Below are the steps to follow when purchasing check-in baggage allowance:
        
        Step 1: Select "Manage My Booking" on our official webpage.
        Step 2: Input the Booking Reference/PNR and last name/surname to retrieve booking record.
        (Note: You will need to click “Retrieve Booking” button to proceed to next page)
        Step 3: Scroll down, under "Extras," click "Baggage" icon
        Step 4: On the baggage selection page, please select the desired baggage allowance for the specific passeneger of a particular flight. Then, scroll down and click "next" to proceed to the payment page
        Step 5: Input your credit card details and tick the box to confirm that you understand and accept the terms and conditions. Click "Next" to end the transaction and confirm payment
        (Note: Please ensure you have reviewed the Summary of Charges before proceeding)
        The updated itinerary will be sent to the email address you registered upon booking within 24 hours.
        
        If you want to resend your itinerary, please follow the below steps:
        
        On our website, click the tab "Manage My Booking"
        Input the Booking Reference/PNR and last name/surname to retrieve booking
        (Note: You will need to click “Retrieve Booking” button to proceed to next page)
        Click "View Itinerary" then "Resend Itinerary"
        Reminders:
        
        Baggage allowance can only be purchased on our website provided that the time when you make the purchase is at least 48 hours before flight departure time
        Additional fees will be collected if you have already reached the limit for each passenger and wants to add/upgrade the allowance. For the baggage fees, please check here
        Please settle the additional fees through "Manage My Booking" portal on our website.
        
        How do I know if my baggage is oversized/overweight?
        Any checked baggage that exceeds 158cm/62” (L+W+H) is considered special baggage, an additional transportation and excess baggage fee may apply. We cannot accept any single item that weighs more than 32kg . All Special Baggage is charged on a per-piece basis and maximum total dimension must not exceeds 277cm/109” (L+W+H). Please note, each Customer can only purchase one oversized baggage allowance (20kg) when making a booking online. Additional oversized baggage allowance can be purchased during check-in at our airport counters. For more information about oversized/overweight baggage, please visit here.
        
        How do I handle damaged or lost baggage?
        For damaged or lost baggage, kindly find below information for assistance:
        
        HK Express Baggage Services
        Telephone (For baggage enquiries): +852 21802120 / 21802122
        Fax: +852 21866707
        Email address: bagsvcs@has.com.hk
        Office Hours: Mon – Sun / 0700 – 2300
        
        Lost and Found Office
        Hong Kong Airport Ground Services Ltd
        Room 5N024
        Passenger Terminal Building 1
        Hong Kong International Airport
        
        What is the maximum dimension of checked baggage?
        Checked baggage must not exceed 158cm/62" (Length + Width + Height).
        
        You may find information on checked baggage via here.
        
        Is there any baggage transfer service available if I have a connecting flight with another airline?
        HK Express does not have baggage transfer services and we are not affiliated with any airline agreement. You need to retrieve your baggage from HK Express, and check-in your baggage for your next flight manually.
        
        For connecting flight within HK Express, baggage will be loaded to the connecting flight automatically.
        
        What sports equipments can I check-in?
        Sports equipment including golf equipments, skis, snowboards, surfboards and fishing rods are accepted and will be considered as special baggage.
        
        The below items are also accepted but subject to the following additional restrictions:
        
        
        Bicycle – must not be motorised and tires must be deflated
        Diving equipment – gas cylinder must be emptied
        Any other sports equipment (not stated above) that within normal baggage’s size/weight limitation is accepted as normal baggage.
        
        Sports equipments should be encased in a protective box or bag to protect from any damage/impact that may occur during delivery and flight handling. All sports equipments can only be checked in at airport counters. For more information, please visit "Special Baggage"
        
        How many bags can I bring and can I share or transfer my baggage allowance to another passenger?
        All fees levied are per total weight, regardless of number of bags. There is no limit on number of bags as long as they do not exceed the total weight of your purchased baggage allowance. However any single piece of check-in baggage should not weigh more than 32kg, we cannot accept any single item that weighs more than 32kg.
        
        Once baggage allowance is purchased and confirmed, it is non transferable, non cancellable and non refundable.
        
        What is the policy for carrying duty free items onboard?
        Duty free purchase limits vary from country to country, it is the Customer's responsibility to adhere to these limits. For duty free allowance guideline please see here
        
        What are the restrictions on carrying medications/drugs onboard HK Express flights?
        Generally, passengers are permitted to carry injectable medications and associated supplies (including needles, syringes, and auto-injectors) for the treatment and control of their medical conditions onboard. You are recommended to read through "Injectable Medication and Needles" under Medical Assistance.
        
        Can I bring unpackaged oil, hair and styling spray onboard HK Express flights?
        Many countries have strict policies on entry of liquids, sprays and gels into the cabin. These restrictions include:
        
        Liquids, gels and sprays must be stored in containers with a volume of not more than 100 ml
        These containers must be placed in a sealed plastic bag which can be re-sealed, the plastic bag volume shall not exceed 1 liter
        Sealed bag and other baggae must be separated for security personnel to check
        Can I bring my hoverboard or other lithium battery powered vehicles onboard my flight?
        For the safety of our Customers we do not allow lithium powered battery vehicles onboard. Battery powered wheelchairs and mobility aids however are exempted from this restriction. All electronic devices, if stored in checked baggage, must be completely shut down and properly placed before shipment to prevent any accident.
        
        You are advised to read through the requirements of our Lithium Ion Batteries Policy.
        
        If you have any questions, please contact our airport ground staff.
        
        Can I bring baby stroller or car seat onboard?
        Yes. If you are travelling with an infant aged 2 or below, baby carriages and baby car seats can be checked for free and will not count towards baggage allowance. Foldable strollers are allowed to be carried onboard our aircraft as long as they meet the requirements of our carry on baggage policy. Please refer to this link for further information about bringing stroller and car seat.
        
        However, if your child is above 2 years old, baby stroller and car seats will count towards checked baggage.`,



        `How do I select and purchase a seat?
        You may purchase seats at the time when you make a booking. If you have already booked tickets, you can purchase seats in "Manage My Booking" portal provided that you made the reservation through HK Express website no later than 48 hours prior to flight departure.
        
        To purchase seats after a booking is made, please follow the steps below:
        
        Step 1: Select "Manage My Booking" on our official homepage.
        Step 2: To retrieve your reservation, input your reference number/PNR and and last name of the person who made the booking.
        Step 3: Select "Seat Selection" under "Extras".
        Step 4: Choose the desired flight sector where you wish to choose a seat. As you select your preferred seat, any additional charges will be displayed at the upper right side of your screen. Then click “Next" to proceed.
        You may also purchase seats at our airport check-in counters. Please note that seat selection fee is the lowest if you book when you make a booking.
        
        What is the difference between Standard, Upfront and Sweet Seats?
        We provide three seat options to our Customers.
        
        Standard Seats are located in row 6 up to the last row except emergency exit row.
        Upfront Seats are any seats in rows 2-5 with added convenience.
        Sweet Seats are any seats in row 1 and Emergency Exit Row with additional leg room.
        For details and requirements to each seat type, please visit https://www.hkexpress.com/en-hk/plan/extras/seat-options.`,



        `Are there food and drinks onboard?
        We offer a wide selection of food and drinks onboard, but are subject to availability.
        
        You may also purchase meals upon booking your flights on our website. Please note that pre-booking of meals for an existing booking should be made 48 hours prior to the scheduled departure time of your flight via “Manage My Booking”.
        
        Please note that pre-booking / changes of hot meal selection are not available for passengers who have already checked in.
        
        For more information on inflight meals and beverage, please visit https://www.hkexpress.com/en-hk/plan/extras/food-and-drinks.
        
        Can I bring my own food and drinks?
        Please note that no outside food or beverage is allowed to be consumed onboard our aircraft. Our ground staff may stop you from bringing such items onboard. You may purchase our meals and drinks no later than 48 hours prior to the scheduled departure time of your chosen flight via the "Manage My Booking” page.
        
        For more information, please visit https://www.hkexpress.com/en-hk/plan/extras/food-and-drinks.
        
        Can I bring infant milk powder onboard?
        You can carry on a reasonable amount of baby's sustenance or formula to be consumed over the period of the flight.`
    ]

    const [inputText, setInputText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        sendChatRequest(baseSystem + FAQ[aspect], inputText, previousMessages, setPreviousMessages)
        setInputText("")
    };

    console.log(FAQ[aspect])

    return (
        <div className="w-screen">
            <AspectSelection aspect={aspect} setAspect={setAspect} />
            <form onSubmit={handleSubmit} className="flex justify-center">
                <input
                    type="text"
                    value={inputText}
                    placeholder="Type your message here"
                    onChange={() => setInputText(event.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default LLMChatBoxChat
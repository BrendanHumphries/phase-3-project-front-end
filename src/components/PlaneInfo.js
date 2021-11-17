import PilotCard from "./PilotCard";
import SeatCard from "./SeatCard";
import CustomerForm from "./CustomerForm";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function PlaneInfo({planeToDisplay}) {
    const [seats, setSeats] = useState([]);
    const [pilots, setPilots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/seats')
        .then(resp => resp.json())
        .then(data => {
            setSeats(data.filter(seat => seat.plane_id === planeToDisplay.id));
        })
        .catch(error => console.log(`Here is your error: ${error}`))
    }, [planeToDisplay])
    
    return (
        <div className='PlaneInfo'>
            <h2>Information about your flight:</h2>
            <h3>Flatiron Airways Flight: #{planeToDisplay.plane_number} to '{planeToDisplay.destination}'</h3>
            <h4>Pilots:</h4>
            {/* Need updated backend to make pilots work */}
            <h4>Customers:</h4>
            <CustomerForm />
            {seats.map(seat => {
                if (seat.customer) {
                    return <SeatCard key={seat.id} number={seat.seat_number} firstName={seat.customer.first_name} lastName={seat.customer.last_name} customerId={seat.customer_id} occupied={true} />
                } else {
                    return <SeatCard key={seat.id} number={seat.seat_number} occupied={false} />
                }
            })}
        </div>
    )
}

export default PlaneInfo;
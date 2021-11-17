import PilotCard from "./PilotCard";
import SeatCard from "./SeatCard";
import CustomerForm from "./CustomerForm";

function PlaneInfo({planeToDisplay}) {
    return (
        <div className='PlaneInfo'>
            <h2>Information about your flight:</h2>
            <h3>Flatiron Airways Flight: #1 to '{planeToDisplay}'</h3>
            <p>Here we will display information about each plane, including pilots, seats, and who is assigned to each seat</p>
            {/* For each pilot assigned to a plane, render a 'Pilot Card', this is just filler data */}
            <h4>Pilots:</h4>
            <PilotCard name='Brendan' />
            <PilotCard name='Dimitri' />
            <PilotCard name='Alejandro' />
            {/* For each seat of a plane, render a 'Seat Card', this is just filler data */}
            <h4>Customers:</h4>
            <CustomerForm />
            <SeatCard number={1} name='Brice' />
            <SeatCard number={2} name='Peter' />
            <SeatCard number={3} name='Amy' />
            <SeatCard number={4} name='Jane' />
            <SeatCard number={5} name='Alex' />
        </div>
    )
}

export default PlaneInfo;
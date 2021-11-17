import { useState } from "react/cjs/react.development";

function SeatCard({number, firstName, lastName, customerId, occupied}) {
    const [isOccupied, setIsOccupied] = useState(occupied);

    function handleDelete() {
        fetch(`http://localhost:9292/customers/${customerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        .then(() => {
            setIsOccupied(!isOccupied);
        })
    }

    function conditionalRendering() {
        if (isOccupied) {
            return (
            <div className='SeatCard'>
                <p>Seat Number: {number}</p>
                <p>Customer: {firstName} {lastName}</p>
                <p>Customer ID: {customerId}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>)
        } else {
            return (
            <div className='SeatCard'>
                <p>Seat Number: {number}</p>
                <p>UNOCCUPIED</p>
            </div>)
        }
    }
    
    return conditionalRendering()
}

export default SeatCard;
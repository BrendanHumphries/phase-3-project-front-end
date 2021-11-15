function SeatCard({number, name}) {
    return (
        <div className='SeatCard'>
            <p>Seat Number: {number}</p>
            <p>Customer: {name}</p>
            <button>Delete</button>
        </div>
    )
}

export default SeatCard;
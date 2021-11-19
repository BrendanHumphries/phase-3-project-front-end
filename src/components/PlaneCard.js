function PlaneCard({plane, setPlaneToDisplay}) {
    function handleClick() {
        setPlaneToDisplay(plane);
    }
    
    return (
        <div className='PlaneCard' onClick={handleClick}>
            <h3>Flight Number: {plane.plane_number}</h3>
            <h4>Destination: {plane.destination}</h4>
        </div>
    )
}

export default PlaneCard;
function PlaneCard({plane, setPlaneToDisplay}) {
    function handleClick() {
        setPlaneToDisplay(plane);
    }
    
    return (
        <div className='PlaneCard' onClick={handleClick}>
            <h3>{plane}</h3>
        </div>
    )
}

export default PlaneCard;
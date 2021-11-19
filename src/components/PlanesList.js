import PlaneCard from "./PlaneCard";

function PlanesList({planesData, setPlaneToDisplay}) {
    return (
        <div className='PlanesList'>
            <h2>Current Flatiron Airways Flights</h2>
            <div className='planes'>
                {planesData.map(plane => <PlaneCard key={plane.id} plane={plane} setPlaneToDisplay={setPlaneToDisplay} />)}
            </div>
        </div>
    )
}

export default PlanesList;
import PlaneCard from "./PlaneCard";

function PlanesList({planesData, setPlaneToDisplay}) {
    return (
        <div className='PlanesList'>
            <h2>This container holds a list of all of the planes in the planes table</h2>
            {planesData.map(plane => <PlaneCard key={plane} plane={plane} setPlaneToDisplay={setPlaneToDisplay} />)}
        </div>
    )
}

export default PlanesList;
function PilotCard({pilot}) { // will accept an argument of a pilot 
    return (
        <div className='PilotCard'>
            <p>Name: {pilot.first_name} {pilot.last_name}</p>
            <p>Pilot ID: {pilot.id}</p>
        </div>
    )
}

export default PilotCard;
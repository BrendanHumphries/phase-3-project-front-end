import { useState } from "react"
function CustomerForm({planeToDisplay, setSeats}) {
    const [formData, setFormData] = useState(
{
    "first_name": "",
    "last_name": "",
    "seat_number": ""

}

   )
   
  function handleOnChange(e){
      setFormData({...formData, [e.target.name] :e.target.value})
  } 
   console.log(planeToDisplay)
  function handleSubmit(e){
    e.preventDefault()
    //post request here
    console.log(formData)
    fetch(`http://localhost:9292/customers`, {
        method:'POST',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            "first_name": e.target.first_name.value,
            "last_name": e.target.last_name.value,
            "seat_number": e.target.seat_number.value,
            "plane_id": planeToDisplay.id

        }),
    })
    .then((r) => r.json())
    .then(data => {
        setSeats(seats => [...seats, data]);
    })
  }

    return (
        <div className='CustomerForm'>
            <h3>Fill out this form to create a new customer and assign them a seat on this plane!</h3>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input value={formData.first_name} onChange={handleOnChange} type='text' name="first_name" />
                <label> Last Name:</label>
                <input value={formData.last_name} onChange={handleOnChange} type='text' name="last_name"/>
                <label> Seat Number:</label>
                <input value={formData.seat_number} onChange={handleOnChange} type='number' name="seat_number"/>
                <input type='submit'/>
            </form>
        </div>
        
    )
}


export default CustomerForm;
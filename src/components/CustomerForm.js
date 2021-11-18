function CustomerForm() {
    return (
        <div className='CustomerForm'>
            <h3>Fill out this form to create a new customer and assign them a seat on this plane!</h3>
            <form>
                <label>First Name:</label>
                <input type='text'></input>
                <label> Last Name:</label>
                <input type='text'></input>
                <label> Seat Number:</label>
                <input type='number'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default CustomerForm;
const Receiver = () => {
    return (
        <>

            <div style={{ backgroundColor: "#33ccff" }}>
                <div style={{padding:"40px 250px",border:"2px solid black"}}>
                    <h1 style={{fontSize:"48px"}}>Required Blood</h1>
                <form>
                    <label>Name:</label><br></br>
                    <input type="text"></input><br></br>
                    <label>Email:</label><br />
                    <input type="email"></input><br />
                    <label>Phone:</label><br />
                    <input type="number"></input><br />
                    <label for="cars">Choose a Blood Group:</label><br />
                    <select name="cars" id="cars">
                        <option value="volvo">A</option>
                        <option value="saab">B</option>
                        <option value="opel">AB</option>
                        <option value="audi">O</option>
                    </select><br></br>

                    <label>Age:</label><br />
                    <input type="number"></input><br />
                    <label>Weight:</label><br />
                    <input type="number"></input><br />
                </form>
                <button>Submit</button>
                </div>
            </div>

        </>
    )
}
export default Receiver;
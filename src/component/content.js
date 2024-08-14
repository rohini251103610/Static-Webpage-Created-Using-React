import '../index.css';
function Content(){
    return (
        <div className="App">
            <header className="App-header">
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>College</th>
                        <th>City</th>
                    </tr>
                    <tr>
                        <td>Rohini</td>
                        <td>R</td>
                        <td>IT</td>
                        <td>HICET</td>
                        <td>Coimbatore</td>
                    </tr>
                    <tr>
                        <td>Vijay</td>
                        <td>G</td>
                        <td>CSE</td>
                        <td>VIT</td>
                        <td>Bangalore</td>
                    </tr>
                    <tr>
                        <td>Bhushan</td>
                        <td>Y</td>
                        <td>AIML</td>
                        <td>KCG</td>
                        <td>Trichy</td>
                    </tr>
                    <tr>
                        <td>Vinoth</td>
                        <td>V</td>
                        <td>ECE</td>
                        <td>HIT</td>
                        <td>Tuticorin</td>
                    </tr>
                </table>
                <form>
                    <h2>Registration form</h2>
                    <div className='form'>
                        <label>FirstName:</label>
                        <input type="text" placeholder="first name"></input><br></br>
                       <label>LastName:</label>
                        <input type="text" placeholder="last name"></input><br></br>
                        <label>City:</label>
                        <input type="text" placeholder="city"></input><br></br>
                        <label>Phonenumber:</label>
                        <input type="text" placeholder="phone number"></input><br></br>
                        <button>Submit</button>

                    </div>
                </form>
            </header>
        </div>
    )
}
export default Content;
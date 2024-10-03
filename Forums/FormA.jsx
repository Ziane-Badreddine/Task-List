
import './style.css'

export default function FormA() {




    return (
        <>
            <div className="container">
                <h1>Contact Form</h1>
                <hr />
                <form>
                    <div className="Name">
                        <label>Name</label>
                        <input type="text" required />
                    </div>
                    <div className='email'>
                        <label>Email Adress</label>
                    </div>
                    <div className='message'>
                        <label>Message</label>
                        <textarea
                            placeholder="Enter a Message..."
                            cols="50"
                            rows="10"
                            name="email"
                            required
                        ></textarea>
                    </div>
                    <div className='country'>
                        <label>Country</label>
                        <select required>
                            <option>Select Country</option>
                            <option>Maroc</option>
                            <option>Algérie</option>
                            <option>Tunisie</option>
                        </select>
                    </div>
                    <div className='accept'>
                        <input type="checkbox" required />
                        <label>accept all conditions</label>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>




        </>

    )
}
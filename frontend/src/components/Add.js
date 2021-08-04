import axios from "axios";
import { useState } from "react";

const Add = () => {
    const [inputs, setInputs] = useState({ name: "", age: "", email: "" })
    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const saveUser = () => {
        axios.post('/api', inputs)
            .then(result => window.location.href = result.data.redirect)
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Add</h1>
            <form>
                <input type="text" name="name" value={inputs.name} onChange={handleInputs} />
                <input type="text" name="email" value={inputs.email} onChange={handleInputs} />
                <input type="number" name="age" value={inputs.age} onChange={handleInputs} />
            </form>
            <button onClick={saveUser}>Save</button>
        </div>
    );
}

export default Add;
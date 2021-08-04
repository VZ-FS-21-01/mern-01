import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import axios from 'axios'

const UserDetails = () => {
    let { id } = useParams()
    const [user, setUser] = useState(null)
    const [inputs, setInputs] = useState({})
    const [edit, setEdit] = useState(false)
    // console.log(id)
    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    useEffect(() => {
        axios.get(`/api/${id}`)
            .then(result => {
                setUser(result.data)
                setInputs(result.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteUser = () => {
        axios.delete(`/api/${id}`)
            .then(result => window.location.href = result.data.redirect)
            .catch(err => console.log(err))
    }
    const updateUser = () => {
        axios.put(`/api/${id}`, inputs)
            .then(result => window.location.href = result.data.redirect)
            .catch(err => console.log(err))
    }
    return (
        <div>
            {user && (<div>
                {!edit ? <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div> : <>
                    <form>
                        <input type="text" name="name" value={inputs.name} onChange={handleInputs} />
                        <input type="text" name="email" value={inputs.email} onChange={handleInputs} />
                        <input type="number" name="age" value={inputs.age} onChange={handleInputs} />
                    </form>
                    <button onClick={updateUser}>Change</button>
                </>}
                <button onClick={deleteUser}>Delete</button>
                <button onClick={() => setEdit(!edit)}>Edit</button>
            </div>)}
        </div>
    );
}

export default UserDetails;
import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Link
} from "react-router-dom";


const Users = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('/api')
            .then(result => setData(result.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Users</h1>
            {data && (data.map(user => <div key={user._id}>
                <h3>
                    <Link to={`/users/${user._id}`}>
                        {user.name}
                    </Link>
                </h3>
                <p>{user.email}</p>
            </div>))}
        </div>
    );
}

export default Users;
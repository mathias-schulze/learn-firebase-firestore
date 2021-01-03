import React, {useEffect, useState} from 'react';
import * as fs from './FirestoreService'

function UserList() {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({firstname: "", lastname: "", mail: ""});

    useEffect (async () => {
        fs.getUsers().get().then(snapshot => {
            setUsers(snapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}}))
        })
    }, [])

    function addUser(e) {
        e.preventDefault();
        fs.addUser(newUser);
        setNewUser({firstname: "", lastname: "", mail: ""});
    }

    return (
        <div>
            <form key="form">
                <input type="text" name="firstname" placeholder="Firstname" 
                    onChange={e => {setNewUser({ ...newUser, firstname: e.target.value })}} 
                    value={newUser.firstname}/>
                <br/>
                <input type="text" name="lastname" placeholder="Lastname"
                    onChange={e => {setNewUser({ ...newUser, lastname: e.target.value })}} 
                    value={newUser.lastname}/>
                <br/>
                <input type="email" name="mail" placeholder="Mail"
                    onChange={e => {setNewUser({ ...newUser, mail: e.target.value })}} 
                    value={newUser.mail}/>
                <br/>
                <button onClick={addUser}>Add User</button>
            </form>
            <table key="table">
                <tbody key="thead">
                    {users.map(user => <tr key={user.id}>
                        <td key={"first"+user.id}>{user.firstname}</td>
                        <td key={"last"+user.id}>{user.lastname}</td>
                        <td key={"mail"+user.id}>{user.mail}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
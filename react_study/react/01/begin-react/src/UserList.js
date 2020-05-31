import React, {useEffect, useContext} from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({user}){
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);
    // useEffect(() => {
    //     console.log('dd')
    //     return () => {
    //         console.log('ff')
    //     }
    // },[]);

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div>
            <b onClick={() => dispatch({type:'TOGGLE_USER', id})} style={{color : active ? 'green' : 'black', cursor : 'pointer'}}>{user.username}</b> ({user.email})
            <button onClick={() => dispatch({type:'REMOVE_USER',id})}>삭제</button>
        </div>
    )
});

function UserList({users}){
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default React.memo(UserList);
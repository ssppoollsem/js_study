import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../types';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/modules/auth';

export default function Home() {
    const dispatch = useDispatch();
    const token = useSelector<RootState, string | null>((state) => state.auth.token);

    if (token === null) {
        return <Redirect to="/signin" />;
    }

    return (
        <div>
            <h1>HOME</h1>
            <button onClick={click}>logout</button>
        </div>
    );

    function click() {
        dispatch(logout());
    }
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo, completeTodo, showComplete } from './redux/actions';

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTodo('할일'));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());

// // console.log(store);
// store.dispatch(addTodo('coding'));
// store.dispatch(addTodo('read book'));
// store.dispatch(addTodo('eat'));
// // console.log(store.getState());
// unsubscribe();
// store.dispatch(addTodo('coding'));
// store.dispatch(addTodo('read book'));
// store.dispatch(addTodo('eat'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

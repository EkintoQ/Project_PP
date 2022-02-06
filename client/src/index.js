import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import userStore from "./store/userStore";

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new userStore(),
        users: new userStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);



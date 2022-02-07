import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import userStore from "./store/userStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        users: new userStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);



import {createContext, useState} from 'react'



export const Countcontext:any = createContext(null);

const Context = ({ children }:any) => {

    const [count, setCount] = useState(0);
    
    return (
        <>
            <Countcontext.Provider value={{ count, setCount }}>
                {children}
            </Countcontext.Provider>
        </>
    )
}

export default Context
import React, { createContext, useState } from "react";

interface AppContextInterface {
  count: number;
  setCount: Function;
}

type Context = {
  children : React.ReactNode
}

export const Countcontext = createContext<AppContextInterface | null>(null);

const Context = ({ children }:Context)=> {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Countcontext.Provider value={{ count, setCount }}>
        {children}
      </Countcontext.Provider>
    </>
  );
};

export default Context;

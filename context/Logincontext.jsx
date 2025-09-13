import { createContext } from "react";

export const LoginContext = createContext(null);
const LoginContextProvider =(props)=>{
  const url = "http://localhost:3000";

  const contextValue={
    url
  };
  return (
    <LoginContext.Provider value={contextValue}>
        {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
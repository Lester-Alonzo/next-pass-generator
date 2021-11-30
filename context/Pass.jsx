import {createContext, useState} from 'react';

export const Passcontext = createContext()

const PassProvider = (props) => {
    const [Pass, setPass] = useState("")
return(
    <Passcontext.Provider
        value={{
            Pass,
            setPass
        }}
    >
        {props.children}
    </Passcontext.Provider>
)
}

export default PassProvider
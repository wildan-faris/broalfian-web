import * as React from 'react'
export const InfoContext = React.createContext({
    info: null,
    setInfo: () => {},
});

export default function InfoProvider({ children }){
    const [Info, setInfo] = React.useState(null);
    return (
        <InfoContext.Provider value={{ Info, setInfo }}>
            {children}
        </InfoContext.Provider>
    )
}


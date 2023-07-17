import { createContext } from "react";

export const caritoContex=createContext()

export const caritoProvedor=({children})=>{
    return(
        <caritoContex.Provider>
            {children}
        </caritoContex.Provider>
    )
}

'use client'
import { createContext } from "react"

export const GlobalContext = createContext()

const GlobalProvides = ({ children }) => {
     return (
          <GlobalContext.Provider
               value={{}}
          >
               {children}
          </GlobalContext.Provider>
     )
}

export default GlobalProvides
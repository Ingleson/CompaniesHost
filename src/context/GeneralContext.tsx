import { ReactNode, createContext, useState } from "react";

interface IGeneralProviders {
  children: ReactNode;
}
interface IGeneralContext {
  alsoNumber: number
  setAlsoNumber: React.Dispatch<React.SetStateAction<number>>
}

export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

const GeneralProvider = ({ children }: IGeneralProviders) => {

  const [alsoNumber, setAlsoNumber] = useState(0)

  return (
    <GeneralContext.Provider value={
      {
        alsoNumber,
        setAlsoNumber
      }
    }>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider;
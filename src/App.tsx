import { useState, createContext } from 'react';
import { HomePage } from './pages/HomePage';

interface ContextProps {
  search: string;
  setSearch: (value: string) => void;
  currentPage: number;
  setCurrentPage: (value: number )=> void;
}

const initalState: ContextProps = {
  search: '',
  setSearch: () => null,
  currentPage: 0,
  setCurrentPage: () => null
}
export const pokemonContext = createContext<ContextProps>( initalState );

const App = () => {
  const [ currentPage, setCurrentPage ] = useState<number>(0);
  const [ search, setSearch ] = useState<string>("");

  return (
    <pokemonContext.Provider value={ { search, setSearch, currentPage, setCurrentPage } } >
      <HomePage />
    </pokemonContext.Provider>
  )
}

export default App;
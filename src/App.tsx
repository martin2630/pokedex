import { useState } from 'react';
import { HomePage } from './pages/HomePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <HomePage />
    </>
  )
}

export default App;
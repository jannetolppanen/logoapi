import { useState } from 'react';
import LogoBar from './components/LogoBar';

const SearchBar = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <form>
        <label>
          <input
            value={filter}
            type='text'
            name='name'
            placeholder='company logo to search...'
            onChange={handleFilterChange}
          />
        </label>
      </form>
    </>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');
  return (
    <>
      <SearchBar filter={filter} setFilter={setFilter} />
      <LogoBar filter={filter} />
    </>
  );
};

export default App;

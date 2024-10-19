import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();
  return (
    <div className={css.searchContainer}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

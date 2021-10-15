import s from "./Searchbar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements.searchImage.value.toLowerCase());
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearch}>
        <button className={s.SearchForm__button} type="submit">
          <span className={s.SearchForm__buttonLabel}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          name="searchImage"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

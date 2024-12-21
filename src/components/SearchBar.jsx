import styles from "./SearchBar.module.css"

const SearchBar = ({ value, onChange }) => {
    return (
      <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search consultants..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.searchInput}
              />
            </div>
    );
  };
  
  export default SearchBar;
  
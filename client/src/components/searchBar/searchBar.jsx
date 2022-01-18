import "./searchBar.css";
export const SearchBar = () => {
  return (
    <div className="_container">
      <div className="search__container">
        <input className="search__input" type="text" placeholder="Search" />
      </div>
      <form className="b-form">
        <div className="form-row">
          <div className="col_">
            <h4 className="font-weight-light">Genre:</h4>
            <select name="Category" className="form-control">
              <option value="all">all</option>
              <option value="self-help">Self-Help</option>
              <option value="adventure">Adventure</option>
              <option value="classics">Classics</option>
              <option value="novel">Novel</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="biographie">Biographie</option>
              <option value="history">History</option>
            </select>
          </div>
          <div className="col_">
            <h4 className="font-weight-light">Rating:</h4>
            <select name="rating" className="form-control">
              <option value="0">all</option>
              <option value="4">4+</option>
              <option value="3">3+</option>
              <option value="2">2+</option>
              <option value="1">1+</option>
            </select>
          </div>
          <div className="col_">
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

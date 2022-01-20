import "./bookItem.css";

export const BookItem = (book) => {
  return (
    <div
      className="_card card mb-3 scrollable-content"
      style={{ maxWidth: "540px" }}
    >
      <div className="row no-gutters">
        <div className="col-md-5">
          <div className="product-image">
            <img className="_card-img" src={book.cover} alt={book.cover} />
            <span className="tag2 hot">2</span>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="_card-title">
              <b>{book.title}</b>
            </h5>
            <h6 className="_card-category">Category:</h6>
            <span>{book.category}</span>

            <h6 className="_card-pub">Author:</h6>
            <span className="pub">{book.author}</span>
            <div className="_description">
              <p className="_card-text">
                {book.description.slice(0, 180) + "..."}
              </p>
            </div>

            <div className="card-footer">
              <button className="btn btn-success order" id={book._id}>
                Book Now
              </button>
              <div className="rating">
                <label htmlFor="stars-rating-1 ">
                  <i className="fa fa-star text-warning" id="1"></i>
                </label>
                <label htmlFor="stars-rating-2">
                  <i className="fa fa-star text-warning" id="2"></i>
                </label>
                <label htmlFor="stars-rating-3">
                  <i className="fa fa-star text-warning" id="3"></i>
                </label>
                <label htmlFor="stars-rating-4">
                  <i className="fa fa-star text-warning" id="4"></i>
                </label>
                <label htmlFor="stars-rating-5">
                  <i className="fa fa-star" id="5"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

const Card = ({ cards, setCards, book, handleAddBooks }) => {
  function handleDelete() {
    fetch(`https://phase-3-backend-project-production.up.railway.app/books/${book.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const delCard = cards.filter((books) => books.id !== book.id);
        setCards(delCard);
      });
  }
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={book.image_url}
            className="card-img-top"
            alt="..."
            height={330}
          />
          <div className="card-body">
            <h4 className="card-title">{book.title}</h4>
            {/* <p className="card-text">{book.author.name}</p> */}
            <small className="text-muted">{book.genre}</small>
            <p className="card-text">{book.publisher}</p>
            <p className="card-text text-success">{book.rating}⭐⭐⭐⭐</p>
            <div className="card-button row d-flex justify-content-between">
              <button
                onClick={() => handleAddBooks(book)}
                className="btn btn-info ms-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ width: "120px" }}
              >
                Add to Reading
              </button>
              <button
                onClick={() => handleDelete()}
                className="btn btn-warning ms-2 mb-1"
                style={{ width: "120px" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Book added
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  data-bs-target="#exampleModal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">You have added the book to current read</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

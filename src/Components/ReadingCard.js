import React from 'react'

const ReadingCard = ({book, reading, setReading}) => {

  const handleRemove = (book) =>{
    const BookExist = reading.find((books) => books.id !== book.id);
    if (BookExist){
      setReading(reading.filter((books) => books.id !== book.id));
    }
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
                onClick={()=>handleRemove(book)}
                className="btn btn-danger ms-2 mb-1 justify-content-center"
                style={{ width: "150px" }}
              >
                Remove from current
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadingCard
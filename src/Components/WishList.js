import React, { useState } from "react";

const WishList = ({ books, setbooks}) => {
  const [wishListForm, setWishListForm] = useState({
    id: 0,
    title: "",
    image_url: "",
    genre: "",
    publisher: "",
    rating: 0
  });

  const handleChange = (e) => {
    setWishListForm({
      ...wishListForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/books`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishListForm),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...books, data];
        setbooks(newData);
        console.log(newData)
      });
    e.target.reset();
  };

  return (
    <div className="container">
      <h2 className="mt-5 text-center"><b>Contribute to the Library</b></h2>
      <p className="mb-2 text-center">
      If you have an interesting book that you wish to add to the library, <br></br>
       feel free  to fill in the necessary details in the form.
      </p>
      <div className="row d-flex justify-content-center mt-4 mb-3">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Book Details Form</h4>
              <div className="mb-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter the book title"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="image_url"
                  placeholder="Enter image url"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Genre</label>
                <input
                  type="text"
                  className="form-control"
                  name="genre"
                  placeholder="Enter the book genre"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Publisher</label>
                <input
                  type="text"
                  className="form-control"
                  name="publisher"
                  placeholder="Enter book publisher"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Rating</label>
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="Enter the book rating"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-info"> 
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};


export default WishList;
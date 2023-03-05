import React, { useEffect, useState } from "react";
import './WishList.css';

const WishList = ({ setCards}) => {
  const [wishListForm, setWishListForm] = useState({
    author_id: null,
    title: "",
    image_url: "",
    genre: "",
    publisher: "",
    rating: null
  });
  const[searchTerm,setSearchTerm]=useState("")
  const [authors, setAuthors] = useState([])
  const [showDropDown, setShowDropDown] = useState(false)

  const handleChange = (e) => {
    setWishListForm({
      ...wishListForm,
      [e.target.name]: e.target.value,
    });
  };
  function handleSearchAuthor(e){
    setShowDropDown(true)
    setSearchTerm(e.target.value) 
  }

  function handleAuthorClick(name, id){
    setWishListForm(f=>({...f, author_id: id}))
    setSearchTerm(name)
    setShowDropDown(false)
  }
  useEffect(()=>{
    if(searchTerm){
      fetch(`http://localhost:9292/authors/${searchTerm}`)
      .then(r=>{
        if(r.ok){
          r.json().then(setAuthors)
        }
      })
    }
  },[searchTerm])


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(wishListForm)
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
        setCards(cards=>[...cards, data]);
        setSearchTerm("")
        setAuthors([])
      });
    e.target.reset();
  };

  return (
    <div className="container">
      <h2 className="mt-5 text-center"><b>Add to the Library</b></h2>
      <p className="mb-2 text-center">
      Fill the form to add to library.
      </p>
      <div className="row d-flex justify-content-center mt-4 mb-3">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Book Details Form</h4>
              <div className="mb-3">
                <label>Author</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  placeholder="Enter the author name"
                  onChange={handleSearchAuthor}
                  value={searchTerm}
                  // onBlur={()=>setShowDropDown(false)}
                />
                <div className="drop-down">
                    { showDropDown ?
                      authors.map(({name, id})=>{
                        return <div key={id} onClick={()=>handleAuthorClick(name, id)}>{name}</div>
                      }) : null
                    }
                </div>
                
              </div>
              <div className="mb-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter the book title"
                  onChange={handleChange}
                  value={wishListForm.title}
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
                    value={wishListForm.image_url}
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
                  value={wishListForm.genre}
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
                  value={wishListForm.publisher}
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
                  value={wishListForm.rating}
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
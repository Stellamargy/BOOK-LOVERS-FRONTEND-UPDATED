import React from 'react'
import Card from './Card';

const Library = ({cards, setCards, handleAddBooks}) => {
    const displayCards = cards.map((book) => (
        <Card
          key={book.id}
          book={book}
          handleAddBooks={handleAddBooks}
          cards={cards}
          setCards={setCards}
        />
      ));
  return (
    <>
      <div className="container">
        <h1>Library</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {displayCards}
        </div>
      </div>
    </>
  );
};

export default Library;

import React from "react";
import PropTypes from "prop-types";


function Food({name, picture, rating }){

  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:
    "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png", rating: 5


  },
  {
    id:2,
    name: "Bibimbap",
    image:
    "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg"
    ,rating: 4.8
  }

];



function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name ={dish.name} picture={dish.image} rating = {dish.rating} />
      ))}
    </div>
  )
}
      

export default App;

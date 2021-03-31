import React from "react";


function Food({name, picture }){

  return (
  <div>
    <h2>I liek {name}</h2>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:
    "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  },
  {
    id:2,
    name: "Bibimbap",
    image:
    "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg"
  }

];



function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name ={dish.name} picture={dish.image} />
      ))}
    </div>
  )
}
      

export default App;

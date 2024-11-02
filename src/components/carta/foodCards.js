

const FoodCards = ({ category, foodData }) => {
  const selectedFoods = foodData[category];

  return (
    <div className="food-cards d-flex"> 
      {selectedFoods.map((food, index) => (
        <div key={index} className="card-carta">
          <img src={food.image} alt={food.name} />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;


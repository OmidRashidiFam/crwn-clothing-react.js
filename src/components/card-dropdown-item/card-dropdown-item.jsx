import "./card-dropdown-item.scss";

const CardDropdowmItem = ({ dropdowmItem }) => {
  // desructure data from dropdowm item
  const { name, quantity, price, imageUrl } = dropdowmItem;

  return (
    <div className="dropdowm_item_container">
      <img src={imageUrl} alt={`product name: ${name}`} />
      <div className="dropdowm_item_discription">
        <h3>{name}</h3>
        <span>
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
};

export default CardDropdowmItem;

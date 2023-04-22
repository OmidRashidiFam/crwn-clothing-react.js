import {
  DropdowmItemContainer,
  DropdowmItemDiscription,
} from "./card-dropdown-item.style";

const CardDropdowmItem = ({ dropdowmItem }) => {
  // desructure data from dropdowm item
  const { name, quantity, price, imageUrl } = dropdowmItem;

  return (
    <DropdowmItemContainer>
      <img src={imageUrl} alt={`product name: ${name}`} />
      <DropdowmItemDiscription>
        <h3>{name}</h3>
        <span>
          {quantity} x {price}$
        </span>
      </DropdowmItemDiscription>
    </DropdowmItemContainer>
  );
};

export default CardDropdowmItem;

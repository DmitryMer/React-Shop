function BasketItem(props) {
    const {
        id,
        title,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {title}
            <i
                className="material-icons basket-quantity"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            x{quantity}{" "}
            <i
                className="material-icons basket-quantity"
                onClick={() => incQuantity(id)}
            >
                add
            </i>{" "}
            = {Math.ceil(price * 80) * quantity}
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}

export { BasketItem };

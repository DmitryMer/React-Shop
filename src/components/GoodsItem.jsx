function GoodsItem(props) {
    const {
        id,
        image,
        title,
        description,
        price,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            title,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
                    {Math.ceil(price * 80)} руб
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };

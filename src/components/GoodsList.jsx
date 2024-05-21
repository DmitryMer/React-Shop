import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;
    if (!props.goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                    addToBasket={addToBasket}
                />
            ))}
        </div>
    );
}

export { GoodsList };

import "./_products-item.scss"
const ProductsItem = () => {
    const productData = [
        {
            id: 1,
            name: "jacket",
            price: 20,
            img: "shop-1.jpg"
        },
        {
            id: 2,
            name: "Shirt",
            price: 30,
            img: "shop-2.jpg"
        },
        {
            id: 3,
            name: "Blanket",
            price: 40,
            img: "shop-3.jpg"
        },
        {
            id: 4,
            name: "Pants",
            price: 50,
            img: "shop-4.jpg"
        },
        {
            id: 5,
            name: "Skerts",
            price: 60,
            img: "shop-5.jpg"
        },
        {
            id: 6,
            name: "Skerts",
            price: 70,
            img: "shop-6.jpg"
        },
    ]
    return (
        <div className="product-container">
            {
                productData.map((item, i) => {
                    return (
                        <div className="mx-5 p-3  product-card" key={item?.id}>
                            <div className="product-image-container">
                                <img src={require(`../../assets/images/shop/${item?.img}`)} />
                            </div>
                            <div className="product-info">
                                <h5>{item.name}</h5>
                                <p className="product-price">${item?.price}</p>
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductsItem
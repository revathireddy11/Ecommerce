import '../App.css';

function ProductList ({ product, addToCart }) {
    return (
        <div className='flex'>
            {
                product.map(( productItem, productIndex ) => {
                    return (
                        <div style={{ width: '50%'}}>
                            <div className='product-item'>
                                <img src={productItem.url} width="60%" />
                                <p>{productItem.name} </p>
                                <p>Rs. {productItem.price} /-</p>
                                <button
                                onClick={() => addToCart(productItem)} class="productCart"
                                > Add To Cart </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ProductList;
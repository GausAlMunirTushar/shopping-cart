const ProductList = ({ product, addToCart }) => {
  return (
    <div className="flex gap-2 flex-wrap">
        {
            product.map((productItem, index) => {
                return (
                    <div className="flex flex-wrap">
                      <div className="border p-2">
                            <img src={productItem.url} alt={productItem.name} width="300px" />
                            <p>{productItem.name}</p>
                            <p>{productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p>{productItem.price}</p>
                            <button onClick={()=> addToCart(productItem)} className="bg-neutral-900 text-white px-2 py-1 rounded-sm ">Add to Cart</button>
                      </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList
import SingleProduct from "./SingleProduct"
export default function Products({ products }) {

    return <div className="productsListDiv">
        <h2>Products List</h2>
        <div className="productsList">
            {products.length == 0 ?
                <p>No such products exist</p>
                :
                // here i have to run a loop on my products array bro
                <ul>
                    {products.map((item, index) => (
                        <li key={index}><SingleProduct item={item}></SingleProduct></li>
                    ))}
                </ul>
            }

        </div>
    </div >
}
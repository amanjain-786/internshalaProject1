export default function SingleProduct({ item }) {
    // console.log(item)
    return <div className="singleProduct">
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name} className="productImage" />
        <p className="price">Rs.{item.price}</p>
        <span className="companyName">By - {item.company}</span><br />
        <span className="category">{item.category}</span>
    </div>
}
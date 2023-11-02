export default function Footer({ products, setProducts }) {
    const tempProducts = [...products]
    const totalItems = tempProducts.length
    const pages = Math.ceil(totalItems / 3)
    let arr = [];
    for (let i = 1; i <= pages; i++) {
        arr.push(i)
    }

    const handlePageButtonClick = (page) => {
        let low = (page - 1) * 3
        let high = Math.min((page - 1) * 3 + 2, totalItems - 1) + 1
        console.log("lowerIndx : ", (page - 1) * 3, "upperIndx : ", Math.min((page - 1) * 3 + 2, totalItems - 1))
        let newProduct = products.slice(low, high)
        setProducts(newProduct)
    }

    return <div className="footer">
        <ul className="pageButtonList">
            {
                arr.map((page) => {
                    return <button className="buttonPage" key={page} onClick={() => handlePageButtonClick(page)}>{page}</button>
                })
            }
        </ul>
    </div>
}
import { useState } from 'react';
export default function Filter({ brands, category, setProducts, products, productList }) {

    const [filterApplied, setFilterApplied] = useState(false)

    const handleCategoryClick = (cat) => {
        let newProducts = products.filter((item) => {
            return item.category == cat
        })
        setProducts(newProducts)
        setFilterApplied(true)
    }

    const handleReset = () => {
        setProducts(productList)
        setFilterApplied(false)
    }

    const handleBrandsClick = (brand) => {
        let newProducts = products.filter((item) => {
            return item.company == brand
        })
        setProducts(newProducts)
        setFilterApplied(true)
    }

    const handleSortLowToHigh = () => {
        let tempProducts = [...products].sort((a, b) => a.price - b.price)
        setProducts(tempProducts)
        setFilterApplied(true)
    }


    const handleSortHighToLow = () => {
        let tempProducts = [...products].sort((a, b) => b.price - a.price)
        setProducts(tempProducts)
        setFilterApplied(true)
    }


    return <div className="filter">
        <h2>Filters</h2>
        {filterApplied &&
            <button className='resetButton' onClick={handleReset}>reset</button>
        }
        <p>Category</p>
        <div className="category filterList">
            {
                category.map((cat, index) => (
                    <button key={index} onClick={() => handleCategoryClick(cat)}>
                        {cat}
                    </button>
                ))
            }
        </div>
        <p>Brands</p>
        <div className="brands filterList">
            {
                brands.map((b, index) => (
                    <button key={index} onClick={() => handleBrandsClick(b)}>
                        {b}
                    </button>
                ))
            }
        </div>
        <p>Sort By Price</p>
        <div className="filterList">
            <button onClick={handleSortLowToHigh}>Lower To Higher</button>
            <button onClick={handleSortHighToLow}>Higher To Lower</button>
        </div>
    </div>
}
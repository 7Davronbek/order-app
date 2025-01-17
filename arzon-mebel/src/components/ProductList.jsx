import { useEffect, useState } from "react"
import httpClient from "../shared/axios"
import { ALL } from "../constants"
import { Link } from "react-router-dom"
import parse from "html-react-parser";

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(ALL)

    const getProducts = async () => {
        const { data } = await httpClient.get("/products")
        setProducts(data)
        setFilteredProducts(data)
    }

    const getCategories = async () => {
        const { data } = await httpClient.get("/categories")
        setCategories(data)
    }

    const handleChangeCategory = (name) => {
        setActiveCategory(name)
        if (name === ALL) {
            setFilteredProducts(products)
            return
        }
        const filtered = products.filter(p => p.category.name === name)
        setFilteredProducts(filtered)
    }


    useEffect(() => {
        getProducts()
        getCategories()
    }, [])
    return (
        <div className="ProductList">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 position-relative">
                        <div className="sticky">
                            <h5>КАТЕГОРИИ</h5>
                            <h6 className={`categoryBtn ${activeCategory === ALL ? 'active' : ''}`} onClick={() => handleChangeCategory(ALL)}>
                                Все
                            </h6>
                            {categories.map((category) => (
                                <h6 className={`categoryBtn ${activeCategory === category.name ? 'active' : ''}`} key={category.id} onClick={() => handleChangeCategory(category.name)}>
                                    {category.name}
                                </h6>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">

                            {!!filteredProducts && filteredProducts.length !== 0 ? filteredProducts.map((item) => (
                                <Link to={`/detail/${item.id}`} key={item.id} className="col-lg-4 mb-4">
                                    <img className="w-100" src={item.image} alt={item.description} />
                                    <h6>{item.name}</h6>
                                    <p>{parse(item.description)}</p>
                                    <p>{item.price} сум</p>
                                    <button className="btn btn-primary">Заказать</button>
                                </Link>
                            )) : <h6>Product not found</h6>}

                            {!!filteredProducts && filteredProducts.length !== 0 ? filteredProducts.map((item) => (
                                <Link to={`/detail/${item.id}`} key={item.id} className="col-lg-4 mb-4">
                                    <img className="w-100" src={item.image} alt={item.description} />
                                    <h6>{item.name}</h6>
                                    <p>{parse(item.description)}</p>
                                    <p>{item.price} сум</p>
                                    <button className="btn btn-primary">Заказать</button>
                                </Link>
                            )) : <h6>Product not found</h6>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

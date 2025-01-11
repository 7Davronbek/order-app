import { useEffect, useState } from "react"
import httpClient from "../shared/axios"
import { Link, useParams } from "react-router-dom"
import { useLanguage } from "../context/languageContext";
import parse from "html-react-parser";
import { getTrimmedDescription, numberFormat } from "../context/utils";

export default function ProductList() {
    const { language } = useLanguage();
    const ALL = "ВСЕ"
    const { categoryId } = useParams();

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(ALL)

    useEffect(() => {
        const handleChangeCategory = () => {
            if (!categoryId) {
                setActiveCategory(-1);
                setFilteredProducts(products);
                return;
            }

            const categoryIdNumber = Number(categoryId);
            const newCategory = categories.find((c) => c.id === categoryIdNumber);

            if (!newCategory) {
                setActiveCategory(null);
                setFilteredProducts([]);
                return;
            }

            setActiveCategory(newCategory);

            const filteredProducts = products.filter(
                (p) => p.category.name === newCategory.name
            );
            setFilteredProducts(filteredProducts);
        };

        handleChangeCategory();
    }, [categoryId, categories, products, language]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await httpClient.get(`/products/?lang=${language}`)
            setProducts(data)
            setFilteredProducts(data)
        }

        const getCategories = async () => {
            const { data } = await httpClient.get(`/categories/?lang=${language}`)
            setCategories(data)
        }

        getProducts()
        getCategories()
    }, [language])

    return (
        <div className="ProductList pt-5">
            {(categories.length > 0 || filteredProducts.length > 0) &&
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 position-relative">
                            <div className="sticky">
                                <h5>КАТЕГОРИИ</h5>
                                <h6 className={`categoryBtn ${activeCategory === -1 ? 'active' : ''}`} >
                                    <Link to={`/products`}>Все</Link>
                                </h6>
                                {categories.map((category) => (
                                    <h6 className={`categoryBtn ${activeCategory?.name === category.name ? 'active' : ''}`} key={category.id} >
                                        <Link to={`/products-category/${category.id}`}>{category.name}</Link>
                                    </h6>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="row">

                                {!!filteredProducts && filteredProducts.length !== 0 ? filteredProducts.map((item) => (
                                    <Link to={`/products/${item.id}`} key={item.id} className="col-lg-4 mb-4">
                                        <img className="w-100" src={item.image} alt={item.description} />
                                        <h6>{item.name}</h6>
                                        <p>{parse(getTrimmedDescription(item.description))}</p>
                                        {item.pricing[0]?.size && <p>{item.pricing[0].size}</p>}
                                        {item.pricing[0]?.price && <p>{numberFormat(item.pricing[0].price)} сум</p>}
                                        <button className="btn btn-primary">Заказать</button>
                                    </Link>
                                )) : <h6>Product not found</h6>}


                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

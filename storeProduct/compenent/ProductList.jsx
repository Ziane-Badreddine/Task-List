import { useEffect, useState } from "react"
import Product from "./Product";
import './styleGlobale.css'

export default function ProductList() {

    const [productList, setProductList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchButtom, setSearchButtom] = useState('');
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getProduct();
        getcategories();
    }, []);

    const displayCategories = () => {
        return (
                categories.map((categorie) => {
                    return <button id="categorie" onClick={handelerButtom}>{categorie}</button>
                })
            )

    }

    const displayProductList = () => {
        let productListFilter = productList
        if ( searchInput !== '') {
            productListFilter = productList.filter(product => {
                return product.title.startsWith(searchInput);
            })
        }
        if ( searchButtom !== '') {
            productListFilter = productList.filter(product => {
                return product.category === searchButtom;
            })
        }
        return (
            productListFilter.map((product, key) => {
                return <Product product={product} key={key} />
            }))
    }

    const handelerSearch = (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput').value;
        setSearchInput(searchInput);
        setSearchButtom('');
    }

    const handelerButtom = (event) => {
        event.preventDefault();
        setSearchButtom(event.target.textContent);
        setSearchInput('');
        document.getElementById('searchInput').value = '';
    }

    const getcategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())
            .then((response) => setCategories(response));
    }

    const getProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((response) => setProductList(response));
    }

    return (
        <div
            className="table-responsive my-5 mx-5"
        >
            <h1>Liste of Product </h1>
            <div>
                <input placeholder="search" id="searchInput" onChange={handelerSearch}></input>
            </div>
            <div id="categories">
                {displayCategories()}
            </div>
            <table
                className="table table-primary"
            >
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>category</th>
                        <th>image</th>
                        <th>rate</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProductList()}
                </tbody>
            </table>
        </div>
    )
}
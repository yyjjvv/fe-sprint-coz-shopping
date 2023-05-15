import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";

// styles
import "./App.css";

const App = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [httpError, setHttpError] = useState();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        return fetch("http://cozshopping.codestates-seb.link/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(true);
                setProducts(data);
                setIsLoading(false);
            });
    };
    console.log(products);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const response = await fetch(
    //             "http://cozshopping.codestates-seb.link/api/v1/products"
    //         );
    //         if (!response.ok) {
    //             throw new Error("Something went wrong!");
    //         }
    //         const responseData = await response.json();
    //         const loadedProducts = [];
    //         for (const key in responseData) {
    //             loadedProducts.push({
    //                 id: responseData[key].id,
    //                 type: responseData[key].type,
    //                 title: responseData[key].title,
    //                 subTitle: responseData[key]["sub_title"],
    //                 brandName: responseData[key]["brand_name"],
    //                 price: responseData[key].price,
    //                 discountPercentage: responseData[key].discountPercentage,
    //                 imgUrl: responseData[key]["image_url"],
    //                 brandImgUrl: responseData[key]["brand_image_url"],
    //                 follower: responseData[key].follower,
    //             });
    //         }
    //         setProducts(loadedProducts);
    //         setIsLoading(false);
    //     };
    //     fetchProducts().catch(() => {
    //         setIsLoading(false);
    //         setHttpError(products[0].message);
    //     });
    // }, []);

    // if (isLoading) {
    //     return (
    //         <section>
    //             <p>Loading...</p>
    //         </section>
    //     );
    // }
    // if (httpError) {
    //     return (
    //         <section>
    //             <p>{httpError}</p>
    //         </section>
    //     );
    // }

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main products={products} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="/products/list"
                        element={
                            <ProductsList
                                products={products}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route path="/bookmark" element={<Bookmark />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;

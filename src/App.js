import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// custom hooks
import useLocalStorage from "./hooks/useLocalStorage";
// components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";

// styles
import "./App.css";

const App = () => {
    const [products, setProducts] = useLocalStorage("bookmarkLists", []);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        return fetch("http://cozshopping.codestates-seb.link/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(true);
                setProducts(data.map((item) => ({ ...item, bookmark: false })));
                setIsLoading(false);
            });
    };
    console.log(products);

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                products={products}
                                setProducts={setProducts}
                                isLoading={isLoading}
                            />
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

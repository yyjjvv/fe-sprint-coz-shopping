import { useState } from "react";
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
    const getBookmark = JSON.parse(localStorage.getItem("bookmarkLists"));
    const [bookmarkLists, setBookmarkLists] = useState(
        getBookmark === null ? [] : getBookmark
    );

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                bookmarkLists={bookmarkLists}
                                setBookmarkLists={setBookmarkLists}
                            />
                        }
                    />
                    <Route
                        path="/products/list"
                        element={
                            <ProductsList
                                bookmarkLists={bookmarkLists}
                                setBookmarkLists={setBookmarkLists}
                            />
                        }
                    />
                    <Route
                        path="/bookmark"
                        element={
                            <Bookmark
                                bookmarkLists={bookmarkLists}
                                setBookmarkLists={setBookmarkLists}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;

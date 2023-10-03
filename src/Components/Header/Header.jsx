import React from "react";
import logo from "./../../logo.svg";

const Header = ({ setSearchQuery }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };

    return (
        <header className="text-center text-light my-4">
            <img src={logo} className="App-logo" width="150" alt="logo" />
            <h1 className="mb-4">Todo List</h1>
            <form className="search">
                <input type="text" className="form-control m-auto" name="search" placeholder="search todos" onChange={handleSearch} />
            </form>
        </header>
    );
};

export default Header;

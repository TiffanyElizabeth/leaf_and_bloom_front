import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import Text from "./ui/Text";
import Button from "./ui/Button";
import useCategories from "../hooks/useCategories";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const categories = useCategories();


    const handleSearch = (e) => {
        e.preventDefault(); // prevent refresh
        if (searchTerm.trim()) {
            navigate(`/teas?search=${encodeURIComponent(searchTerm.trim())}`); // go to search results
            setSearchTerm(""); // clear input
        } else {
            navigate("/teas");
        }
    };



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 custom-navbar">
            <div className="container-fluid">
                {/* Brand */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <Text level={1} className="mb-0">Leaf & Bloom</Text>
                </Link>

                {/* Toggler for small screens */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item d-flex align-items-center me-3">
                            <Link to="/teas" className="nav-link">
                                <Text level={4} className="mb-0 fs-5">Our Teas</Text>
                            </Link>
                        </li>

                        <li className="d-none d-lg-flex me-3">
                            <PiFlowerLotus />
                        </li>

                        <li className="nav-item dropdown me-3">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center mb-0"
                                href="#"
                                id="categoryDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Text level={4} className="mb-0 me-1 fs-5">Teas by Category</Text>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <Link className="dropdown-item" to={`/teas?category=${cat.id}`}>
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="d-none d-lg-flex me-3">
                            <PiFlowerLotus />
                        </li>

                        <li className="nav-item d-flex align-items-center">
                            <Link to="/about" className="nav-link">
                                <Text level={4} className="mb-0 fs-5">About Us</Text>
                            </Link>
                        </li>
                    </ul>

                    {/* Search bar */}
                    <form className="d-flex ms-4" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="search teas by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button level={1} type="submit">
                            <FaSearch />
                        </Button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

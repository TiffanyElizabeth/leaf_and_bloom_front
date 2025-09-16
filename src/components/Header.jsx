// reusable component that defines a header (that is used site-wide as it is included in DefaultLayout); uses Bootstrap responsive nav bar as a base and includes branding, links to pages (including dynamic links to categories) and a search bar wherein the user can search teas by name and be taken to a results page

import { useState } from "react"; // ensures that whatever the value of a state variable is, that value will be the same when the component re-renders, we use the setter function to change the value and rerender the component
import { Link, useNavigate } from "react-router"; // useNavigate lets us change the page using our code (Rather than the user clicking a Link) 
// Link: for client-side navigation (react router provides routing capabilities for React applications; routing = handling navigation between different views w/o full page reloads)
import { FaSearch } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import Text from "./ui/Text";
import Button from "./ui/Button";
import useCategories from "../hooks/useCategories"; // my custom hook which fetches categories, returning an array of category objects (also manages errors, ex. 404)

export default function Header() {
    const [searchTerm, setSearchTerm] = useState(""); {/* searchTerm stores what teh user types into the search input and we do not give it a default value ("") */ }
    const navigate = useNavigate();
    const categories = useCategories();


    const handleSearch = (e) => {
        e.preventDefault(); // prevent reload
        if (searchTerm.trim()) { // .trim = JS string method to remove spaces at beginning and end of string
            navigate(`/teas?search=${encodeURIComponent(searchTerm.trim())}`); // go to search results // encodeURIComponent converts any special characters (best practice)
            setSearchTerm(""); // clear input
        } else {
            navigate("/teas"); // if input is empty go to teasList
        }
    };



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 custom-navbar">
            <div className="container-fluid">
                {/* branding */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <Text level={1} className="mb-0">Leaf & Bloom</Text>
                </Link>

                {/* toggler for small screens */}
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

                {/* collapsible menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item d-flex align-items-center me-3">
                            <Link to="/teas" className="nav-link">
                                <Text level={8}>Our Teas</Text>
                            </Link>
                        </li>

                        <li className="d-none d-lg-flex me-3">
                            <PiFlowerLotus />
                        </li>

                        {/* dropdown menu, maps through categories to create a dynamic list of dynamic links */}
                        <li className="nav-item dropdown me-3">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center mb-0"
                                href="#"
                                id="categoryDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Text level={8}>Teas by Category</Text>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                {categories.map((cat) => ( // map in JS = array method that allows us to transform an array by applying a function to every element returning a new array with the results -- in React this permits us to dynamically render data in components, transforming an array of data into an array of JSX elements
                                    <li key={cat.id}> {/* need key in order to track which components change and optimize rendering */}
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
                                <Text level={8}>About Us</Text>
                            </Link>
                        </li>
                    </ul>

                    {/* search bar */}
                    <form className="d-flex ms-4" onSubmit={handleSearch}> {/* calls search function */}
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="search teas by name"
                            value={searchTerm} // binds the input field to the state variable searchTerm; whatever is typed in the input is always reflected in the state
                            onChange={(e) => setSearchTerm(e.target.value)} // updates the state variable searchTerm whenever the user types; ensures the input stays in sync with React state
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

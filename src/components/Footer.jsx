// reusable component that defines a footer (that is used site-wide as it is included in DefaultLayout); uses Bootstrap to make responsive 4 column layout

import { Link } from "react-router"; // for client-side navigation (react router provides routing capabilities for React applications; routing = handling navigation between different views w/o full page reloads)
import Text from "./ui/Text"; // my brand typography 
import { PiFlowerLotus } from "react-icons/pi"; // brand icon
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"; // social icons
import useCategories from "../hooks/useCategories"; // my custom hook to fetch and display categories dynamically

export default function Footer() {
    const categories = useCategories(); // runs my hook, returning an array of category objects (manages errors also, ex. 404)

    return (
        <footer className="bg-sage py-5 w-100">
            <div className="container">
                <div className="row">

                    {/* column 1 = Logo, Lotus icon (secret link to back office login) */}
                    <div className="col-12 col-md-3">
                        <Text level={1} className="mb-0"><Link to="/" className="text-decoration-none text-dark">
                            Leaf & <br /> Bloom </Link><br />
                            <Link to="http://localhost:8080/login"><PiFlowerLotus className="ms-2 text-decoration-none text-dark" size={28} /></Link>
                        </Text>
                    </div>

                    {/* column 2 = links to Home, View All Teas, About */}
                    <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
                        <Text level={4} className="link">
                            <Link to="/" className="text-dark text-decoration-none">Home</Link>
                        </Text>
                        <Text level={4} className="link">
                            <Link to="/teas" className="text-dark text-decoration-none">View All Teas</Link>
                        </Text>
                        <Text level={4} className="link">
                            <Link to="/about" className="text-dark text-decoration-none">About Us</Link>
                        </Text>
                    </div>

                    {/* column 3 = maps through categories to create dynamic list of dynamic links */}
                    <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
                        {categories.map((cat) => ( // map in JS = array method that allows us to transform an array by applying a function to every element returning a new array with the results -- in React this permits us to dynamically render data in components, transforming an array of data into an array of JSX elements
                            <Text key={cat.id} level={4} className="link"> {/* need key in order to track which components change and optimize rendering */}
                                <Link
                                    to={`/teas?category=${cat.id}`}
                                    className="text-dark text-decoration-none"
                                >
                                    {cat.name} Teas
                                </Link>
                            </Text>
                        ))
                        }
                    </div>

                    {/* column 4 = contact and social info */}
                    <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">

                        <Text level={4}>Via Alessandria 160</Text>
                        <Text level={4}>Rome, Italy 00198</Text>
                        <Text level={4}>+39 3533533535</Text>
                        <Text level={4}>info@leafandbloom.com</Text>

                        <div className="d-flex gap-2 align-items-center">
                            <Text level={3}><a href="" className="text-dark text-decoration-none link"><FaFacebook /></a></Text>
                            <Text level={3}><a href="" className="text-dark text-decoration-none link"><FaInstagramSquare /></a> </Text>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

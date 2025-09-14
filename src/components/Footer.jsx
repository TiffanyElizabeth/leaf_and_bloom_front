import { Link } from "react-router";
import Text from "./ui/Text";
import { PiFlowerLotus } from "react-icons/pi";
import useCategories from "../hooks/useCategories";

export default function Footer() {
    const categories = useCategories();

    return (
        <footer className="bg-sage py-5 w-100">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-3">

                        <Text level={1} className="mb-0"><Link to="/" className="text-decoration-none text-dark">
                            Leaf & <br /> Bloom </Link><br />
                            <Link to="http://localhost:8080/login"><PiFlowerLotus className="ms-2 text-decoration-none text-dark" size={28} /></Link>
                        </Text>




                    </div>


                    <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
                        <Text level={4} className="link">
                            <Link to="/teas" className="text-dark text-decoration-none">View All Teas</Link>
                        </Text>
                        <Text level={4} className="link">
                            <Link to="/about" className="text-dark text-decoration-none">About Us</Link>
                        </Text>
                    </div>


                    <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
                        {categories.map((cat) => (
                            <Text key={cat.id} level={4} className="link">
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


                    <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">

                        <Text level={4}>Via Alessandria 160</Text>
                        <Text level={4}>Rome, Italy 00198</Text>
                        <Text level={4}>+39 3533533535</Text>
                        <Text level={4}>info@leafandbloom.com</Text>
                    </div>

                </div>
            </div>
        </footer>
    );
}

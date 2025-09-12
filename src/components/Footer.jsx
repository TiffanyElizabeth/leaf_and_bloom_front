import { Link } from "react-router";
import Text from "./ui/Text";
import { PiFlowerLotus } from "react-icons/pi";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#B0C4A5" }} className="text-dark py-5 mt-5 w-100">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-3">
                        <Link to="/" className="text-decoration-none text-dark">
                            <Text level={1} className="mb-0" style={{ fontFamily: "'Cinzel', serif" }}>
                                Leaf & <br /> Bloom <br />
                                <PiFlowerLotus className="ms-2" size={28} />
                            </Text>

                        </Link>

                        <Link to="http://localhost:8080/login"><PiFlowerLotus className="ms-2" size={28} /></Link>
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
                        <Text level={4} className="link"><a href="/teas?category=1" className="text-dark text-decoration-none">White Teas</a></Text>
                        <Text level={4} className="link"><a href="/teas?category=2" className="text-dark text-decoration-none">Green Teas</a></Text>
                        <Text level={4} className="link"><a href="/teas?category=3" className="text-dark text-decoration-none">Oolong Teas</a></Text>
                        <Text level={4} className="link"><a href="/teas?category=4" className="text-dark text-decoration-none">Black Teas</a></Text>
                        <Text level={4} className="link"><a href="/teas?category=5" className="text-dark text-decoration-none">Herbal Teas</a></Text>
                        <Text level={4} className="link"><a href="/teas?category=6" className="text-dark text-decoration-none">Rooibos Teas</a></Text>
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

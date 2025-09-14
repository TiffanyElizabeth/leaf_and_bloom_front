import axios from "../api/axios"; // la mia versione di axios
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import Container from "../components/ui/Container";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";

export default function TeaDetail() {
    const [tea, setTea] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchTea = () => {
        axios.get(`/teas/${id}`).then((response) => {
            setTea(response.data)
        })
            .catch((error) => {
                if (error.status === 404) {
                    navigate("/404");
                }
            });
    };

    useEffect(fetchTea, [id, navigate]);

    return (
        <Container className="my-5">
            {/* Tea name */}
            <div className="text-center mb-3">
                <Text level={2}>{tea.name}</Text>
                {tea.category && (
                    <Button level={2}>
                        <Link to={`/teas?category=${tea.category.id}`} className="text-decoration-none text-dark">
                            {tea.category.name}
                        </Link>
                    </Button>
                )}
                {/* Description & Caffeine info */}
                <div className="my-3">
                    <Text level={4}>{tea.description} {tea.caffeinated ? "Caffeinated" : "Caffeine-free"}</Text>
                </div>
            </div>



            {/* Price & Stock info */}
            <div className="text-center mt-3">
                {tea.stock === 0 ? (
                    <Text level={6}>
                        More on the way!
                    </Text>
                ) : tea.price != null ? (
                    <div >
                        {tea.stock < 4 && (
                            <Text level={7}>
                                Low Stock!
                            </Text>
                        )}
                        <Text level={4} className="fw-bold">
                            ${tea.price.toFixed(2)}
                        </Text>
                    </div>
                ) : null}
            </div>

            {/* Tea image */}
            <div className="text-center mb-3">
                <img
                    src={tea.photoUrl || "/teaplaceholder.jpeg"}
                    alt={tea.name}
                    className="img-fluid rounded"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                />
            </div>





            <div className="text-center">
                <Button level={2}>
                    <Link to={`/teas`} className="text-decoration-none text-dark">
                        View all teas
                    </Link>
                </Button>
            </div>
        </Container>
    );


}
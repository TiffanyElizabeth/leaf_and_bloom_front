// shows details for a single tea, fetching the tea using its id from the URL (if not found = 404)

import axios from "../api/axios"; // custom axios instance to make HTTP requests to my api
import { useEffect, useState } from "react"; // hooks - useState to store state (ddata that can change over time and triggers a re-render when updated), useEffect for side effects (thigns that happen outside of the normal render flow)
import { useParams, useNavigate, Link } from "react-router"; // useParams = read URL params // useNavigate lets us change the page using our code (Rather than the user clicking a Link) 
// Link: for client-side navigation (react router provides routing capabilities for React applications; routing = handling navigation between different views w/o full page reloads) 
import Container from "../components/ui/Container";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";

export default function TeaDetail() {
    const [tea, setTea] = useState({}); // tea = where to store tea data fetched from API - is set by setTea function 
    const { id } = useParams(); // gets id from the URL 
    const navigate = useNavigate(); // allows redirecting the user programmatically 

    const fetchTea = () => {
        axios.get(`/teas/${id}`) // gets tea from backend
            .then((response) => {
                setTea(response.data) // stores API response (the tea in question) in state
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) {
                        navigate("/404");
                    } else if (error.response.status >= 500) { // server problem
                        console.error("Server error:", error.response.status);
                        alert("Server problem. Try again later.");
                    }
                } else if (error.request) {
                    console.error("No response received:", error.request); // connection problem
                    alert("Network error. Please check your connection.");
                } else {
                    console.error("Unexpected error:", error.message);
                }
            });
    };

    useEffect(fetchTea, [id, navigate]); // runs fetchTea when component mounts or id changes (Effect function = fetchTea & dependency array tells React wehn to re-run this effect (i.e. when id changes, fetch new tea) - we include navigate because it's referenced inside fetchTea)

    return (
        <Container className="my-5">
            {/* tea name */}
            <div className="text-center mb-3">
                <Text level={2}>{tea.name}</Text>
                {/* tea category - only shows if category is defined (if tea.category is truthy (i.e. not null, undefined or false) */}
                {tea.category && (
                    <Button level={2}>
                        <Link to={`/teas?category=${tea.category.id}`} className="text-decoration-none text-dark">
                            {tea.category.name}
                        </Link>
                    </Button>
                )}
                {/* description & caffeine info */}
                <div className="my-3">
                    <Text level={4}>{tea.description} {tea.caffeinated ? "Caffeinated." : "Caffeine-free."}</Text>
                </div>
            </div>

            {/* price & stock info */}
            <div className="text-center mt-3">
                {tea.stock === 0 ? (
                    <Text level={6}>
                        More on the way! {/* if out of stock, no price is visible - only this message */}
                    </Text>
                ) : tea.price != null ? ( // if tea price is not null and stock is more than 0 
                    <div >
                        {tea.stock < 4 && ( //* if low stock (less than 4), warning message 
                            <Text level={7}>
                                Low Stock!
                            </Text>
                        )}
                        <Text level={4} className="fw-bold">
                            ${tea.price.toFixed(2)}
                        </Text>
                    </div>
                ) : null} {/* if no price defined, don't show anything */}
            </div>

            {/* tea image */}
            <div className="text-center mb-3">
                <img
                    src={tea.photoUrl || "/teaplaceholder.jpeg"} // placeholder img 
                    alt={tea.name}
                    className="img-fluid rounded detail-img"
                />
            </div>




            {/* view all teas button */}
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

// Component mounts. tea = {}.
// useEffect runs => calls fetchTea.
// axios.get fetches tea from backend.
// Response comes back => setTea(response.data) => triggers re-render.
// Now tea has data: name, category, price, stock, image.
// JSX renders dynamically: Name: {tea.name}, Category button only if tea.category exists, Price & stock info based on tea.stock and tea.price, Image: fallback to placeholder if tea.photoUrl missing
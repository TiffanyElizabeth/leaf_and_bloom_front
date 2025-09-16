// shows a list of teas (either full list, or filtered by category, or filtered in acccordance with a searchTerm). it is a dynamic page that adapts based on how the user arrives at the page, displaying clickable product cards in a uniform, responsive way that also gives stock and pricing details

import { useEffect, useState } from "react"; // hooks - useState to store state (ddata that can change over time and triggers a re-render when updated), useEffect for side effects (thigns that happen outside of the normal render flow)
import { useLocation, Link } from "react-router"; // useLocation = hook to read the URL query string (?search=... or ?category=...) - allows page to respond based on what user is looking for (makes call to backend via Axios accordingly + displays appropriate banner, page title and cards)
// Link: for client-side navigation (react router provides routing capabilities for React applications; routing = handling navigation between different views w/o full page reloads) 
import axios from "../api/axios"; // custom axios instance to make HTTP requests to my api

// my UI components for consistent styling and to maintain DRY code 
import Banner from "../components/ui/Banner";
import Container from "../components/ui/Container";
import Text from "../components/ui/Text";
import DividingLine from "../components/ui/DividingLine";

export default function TeasList() {
    const location = useLocation(); // contains URL info
    const [teas, setTeas] = useState([]); // array of teas to display (initially empty)
    const [pageTitle, setPageTitle] = useState("Our Teas"); // title shown above the teas with default "Our Teas"
    const [bannerImage, setBannerImage] = useState("/categoryplaceholder.jpeg"); // banner image with default "placeholder"

    useEffect(() => { // runs every time location.search changes (as specified in dependency array)
        const params = new URLSearchParams(location.search); // parses query params from the URL
        const searchTerm = params.get("search") || ""; // value of ?search= query param (default empty string)
        const categoryId = params.get("category") || ""; // value of ?category= query param (default empty string)

        let url = "/teas"; // default url for fetching teas
        const query = {}; // will contain query parameters to pass to axios

        if (searchTerm) { // if searchTerm is truthy (not null, undefined or false), then use search endpoint and the query = searchTerm
            url = "/teas/search";
            query.name = searchTerm;
        } else if (categoryId) { // if categoryId is truthy, then use category endpoint with the categoryId
            url = `/teas/categories/${categoryId}`;
        } // else default to "/teas"

        axios // fetch teas based on the constructed url and query params 
            .get(url, { params: query })
            .then((response) => setTeas(response.data)) // stores API response in state
            .catch((error) => {  // error handling
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

        // determine page title and banner
        if (searchTerm) {
            setPageTitle(`Teas matching "${searchTerm}"`);
            setBannerImage("/categoryplaceholder.jpeg");
        } else if (categoryId) {
            // if filtering by category, fetch category info to get name and banner image
            axios
                .get(`/teas/categories/${categoryId}`)
                .then((response) => {
                    const firstTea = response.data[0]; // 0 = get first tea object in the category so I can set the page title and banner image 
                    setPageTitle(firstTea.category.name);
                    setBannerImage(firstTea.category.photoUrl || "/categoryplaceholder.jpeg");
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
        } else { // if no searchTerm and no categoryId 
            setPageTitle("Our Teas");
            setBannerImage("/categoryplaceholder.jpeg");
        }
    }, [location.search, navigate]); // runs everytime location.search changes, following logic to dynamically set page in accordance with URL - we include navigate as it is referenced in error handling of axios call (if dependency array is blank, this only runs once upon original mounting and page will not reflect changes in url)

    return (
        <>
            <Banner title="" imageSrc={bannerImage} />

            <Container>
                <div className="text-center mb-4">
                    <Text level={5}>{pageTitle}</Text>
                    <DividingLine />
                </div>


                <div className="row g-4 justify-content-center">
                    {teas.map((tea) => ( // MAP LOOPS THROUGH TEAS TO DYNAMICALLY RENDER CARDS - map in JS = array method that allows us to transform an array by applying a function to every element returning a new array with the results -- in React this permits us to dynamically render data in components, transforming an array of data into an array of JSX elements
                        <div
                            key={tea.id} // need key in order to track which components change and optimize rendering
                            className="col-12 col-sm-6 col-md-4 col-lg-3"
                        >
                            <Link to={`/teas/${tea.id}`} className="text-decoration-none text-dark">
                                <div className="card h-100 text-center shadow-sm card-hover">
                                    <img
                                        src={tea.photoUrl || "/teaplaceholder.jpeg"}
                                        alt={tea.name}
                                        className="card-img-top list-img"
                                    />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <Text level={3} className="mb-2">{tea.name}</Text>
                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            {tea.category && ( // tea category - only shows if category is defined (if tea.category is truthy (i.e. not null, undefined or false)
                                                < Text level={4} className="mb-0">
                                                    {tea.category.name}
                                                </Text>
                                            )}
                                            {/* stock & price logic */}
                                            {tea.stock === 0 ? (
                                                <Text level={6}>
                                                    More on the way! {/* if out of stock, no price is visible - only this message */}
                                                </Text>
                                            ) : tea.price != null ? ( // if tea price is not null and stock is more than 0 
                                                <div className="d-flex align-items-center gap-2">
                                                    {tea.stock < 4 && ( // if low stock (less than 4), warning message 
                                                        <Text level={7}>
                                                            Low Stock!
                                                        </Text>
                                                    )}
                                                    <Text level={4} className="mb-0 fw-bold">
                                                        ${tea.price.toFixed(2)}
                                                    </Text>
                                                </div>
                                            ) : null} {/* if no price defined, don't show anything */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div >
            </Container >
        </>
    );
}

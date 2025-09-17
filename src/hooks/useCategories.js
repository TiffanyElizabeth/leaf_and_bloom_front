// custom hook to make logic to fetch categories reusable 

import { useEffect, useState } from "react"; // hooks - useState to store state (ddata that can change over time and triggers a re-render when updated), useEffect for side effects (thigns that happen outside of the normal render flow)
import { useNavigate } from "react-router"; // useNavigate lets us change the page using our code (Rather than the user clicking a Link) 
import axios from "../api/axios"; // custom axios instance to make HTTP requests to my api

export default function useCategories() {
    const [categories, setCategories] = useState([]); // creates state variable categories (initially an empty array) setCatgories = function to update categories
    const navigate = useNavigate(); // stores the navigation function in a variable so I can redirect a user in case of 404 error

    useEffect(() => { // runs after the component mounts (or when something in its dependency array changes)
        axios.get("/teas/categories") // GET request to backend
            .then((response) => setCategories(response.data)) // set categories based on data (response) from backend
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) {
                        navigate("/404");
                    } else if (error.response.status >= 500) {
                        console.error("Server error:", error.response.status);
                        alert("Server problem. Try again later.");
                    }
                } else if (error.request) {
                    console.error("No response received:", error.request);
                    alert("Network error. Please check your connection.");
                } else {
                    console.error("Unexpected error:", error.message);
                }
            });
    }, [navigate]); // dependency array is blank except for navigate which is necessary because it is an external variable used inside useEffect (if navigate changes, the effect should re-run) (blank array means effect only runs once when the hook mounts, which here is correct because we only fetch categories once)

    return categories;
}
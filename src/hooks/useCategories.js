import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../api/axios";

export default function useCategories() {
    const [categories, setCategories] = useState([]); // creates state variable categories (initially an empty array) setCatgories = function to update categories
    const navigate = useNavigate(); // permits me to change the route 

    useEffect(() => {
        axios.get("/teas/categories")
            .then((response) => setCategories(response.data))
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
    }, [navigate]);

    return categories;
}
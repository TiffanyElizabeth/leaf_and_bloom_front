import axios from "../api/axios"; // la mia versione di axios
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function TeaDetail() {
    const [tea, setTea] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchTea = () => {
        axios.get(`/api/teas/${id}`).then((response) => {
            setTea(response.data)
        })
            .catch((error) => {
                if (error.status === 404) {
                    navigate("/404");
                }
            });
    };

    useEffect(fetchTea, [id, navigate]);

    return <h1>Details for {tea.name}</h1>
}
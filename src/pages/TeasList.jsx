import axios from "../api/axios"; // la mia versione di axios
import { useEffect, useState } from "react";

export default function TeasList() {
    const [teas, setTeas] = useState([]);


    const fetchTeas = () => {
        axios.get("/api/teas").then((response) => {
            setTeas(response.data);
        });
    };

    useEffect(fetchTeas, []);

    return <>
        <h1>Listing teas</h1>
        {teas.map((tea) => (
            <div key={tea.id}>{tea.name}</div>
        ))}

    </>
}
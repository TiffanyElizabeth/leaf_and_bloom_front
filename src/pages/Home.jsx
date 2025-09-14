import { useEffect, useState } from "react";
import { Link } from "react-router";
import Banner from "../components/ui/Banner";
import Container from "../components/ui/Container";
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";
import axios from "../api/axios";
import useCategories from "../hooks/useCategories";
import DividingLine from "../components/ui/DividingLine";

export default function Home() {
    const categories = useCategories();

    return (
        <>
            <Banner
                title="Welcome to Leaf & Bloom"
                subtitle="Small-batch, ethically sourced loose-leaf teas"
                imageSrc="/homehero.jpeg"
                variant="hero"
            />

            <Container>
                <div className="text-center mb-5">
                    <Text level={5}>What fills your cup?</Text>
                    <DividingLine />
                    <Text level={4}>
                        Explore our tea categories and discover your perfect cup
                    </Text>
                    <Button level={2}>
                        <Link to={`/teas`} className="text-decoration-none text-dark">
                            View all teas
                        </Link>
                    </Button>

                </div>

                <div className="d-flex flex-column gap-4">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/teas?category=${cat.id}`}
                            className="text-decoration-none"
                        >
                            <div className="card shadow-sm card-hover">
                                <img
                                    src={cat.photoUrl || "/categoryplaceholder.jpeg"}
                                    alt={cat.name}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <Text level={5} className="mb-0 text-start">
                                        {cat.name}
                                    </Text>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}

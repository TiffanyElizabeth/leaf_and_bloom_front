// serves as the landing page for the application using components to maintain spacing, typography, colors and layout across the application 

// shows a hero banner with title and subtitle, a brief introduction, a call-to-action button (view all teas) and dynamically renders tea categories as clickable cards so users can explore all teas or filter by category

// categories are fetched using my custom hook and rendered using .map() 

import { Link } from "react-router"; // Link: for client-side navigation (react router provides routing capabilities for React applications; routing = handling navigation between different views w/o full page reloads)

import useCategories from "../hooks/useCategories"; // my custom hook which fetches categories

import Banner from "../components/ui/Banner"; // displays hero image
import Container from "../components/ui/Container"; // ensures consistent spacing and alignment for page content
import Text from "../components/ui/Text"; // standardizes typography
import Button from "../components/ui/Button"; // establishes brand button styles
import DividingLine from "../components/ui/DividingLine"; // consistent component to separate sections

export default function Home() {
    const categories = useCategories(); // returns an array of category objects

    return (
        <>
            <Banner
                title="Welcome to Leaf & Bloom"
                subtitle="Small-batch, ethically sourced loose-leaf teas"
                imageSrc="/homehero.jpeg"
                variant="hero" // taller than standard banner
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

                {/* single column with horizontal cards for categories = maps through categories to create dynamic list with dynamic links */}
                <div className="d-flex flex-column gap-4">
                    {categories.map((cat) => ( // MAP LOOPS THROUGH CATEGORIES TO DYNAMICALLY RENDER CARDS - map in JS = array method that allows us to transform an array by applying a function to every element returning a new array with the results -- in React this permits us to dynamically render data in components, transforming an array of data into an array of JSX elements
                        <Link
                            key={cat.id} // need key in order to track which components change and optimize rendering
                            to={`/teas?category=${cat.id}`}
                            className="text-decoration-none"
                        >
                            <div className="card shadow-sm card-hover">
                                <img
                                    src={cat.photoUrl || "/categoryplaceholder.jpeg"} // in case of no image, placeholder
                                    alt={cat.name}
                                    className="card-img-top home-card"
                                />
                                <div className="card-body">
                                    <Text level={5} className="mb-0" >
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

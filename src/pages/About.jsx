import Banner from "../components/ui/Banner"
import Button from "../components/ui/Button"
import Container from "../components/ui/Container"
import Text from "../components/ui/Text"
import { Link } from "react-router"
export default function About() {
    return (
        <>
            <Banner
                imageSrc="/abouthero.jpeg"
                variant="hero"
            />

            <Container>
                <div className="text-center mb-4">
                    <h1 className="display-5">About Us</h1>
                    <hr className="w-25 mx-auto" />
                    <Text level={4}>At Leaf & Bloom, we believe tea is more than a drink — it is a ritual of pause, connection, and care. Our small-batch, ethically sourced loose-leaf teas are thoughtfully curated to bring you pure, vibrant flavors while honoring the people and places behind every leaf. Whether it is your first cup in the morning or a quiet moment in the afternoon, each blend is crafted to help you slow down, breathe, and savor time for yourself. <br /> <br />

                        Leaf & Bloom began with a simple question: what if tea could be more than a beverage — what if it could be a daily ritual of renewal? <br /> <br />

                        Our founders, longtime friends and tea lovers, spent years exploring tea gardens across Asia and Europe, meeting growers who shared their passion for sustainable farming and time-honored traditions. What they discovered was that every leaf has a story — of soil, climate, and careful hands that nurture it. <br /> <br />

                        Inspired, they returned home determined to share these stories in the form of small-batch, ethically sourced loose-leaf teas. Leaf & Bloom was born not as a mass-market label, but as a way to celebrate the quiet beauty of tea: the swirl of steam, the warmth of the cup, and the bloom of flavor in every sip. <br /> <br />
                    </Text>

                    <Button level={2}>
                        <Link to={`/teas`} className="text-decoration-none text-dark">
                            View our teas
                        </Link>
                    </Button>
                </div>
            </Container>
        </>
    )
}
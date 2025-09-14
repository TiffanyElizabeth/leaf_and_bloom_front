import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router";
import axios from "../api/axios";
import Banner from "../components/ui/Banner";
import Container from "../components/ui/Container";
import Text from "../components/ui/Text";
import DividingLine from "../components/ui/DividingLine";

export default function TeasList() {
    const location = useLocation();
    const [teas, setTeas] = useState([]);
    const [pageTitle, setPageTitle] = useState("Our Teas");
    const [bannerImage, setBannerImage] = useState("/categoryplaceholder.jpeg");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchTerm = params.get("search") || "";
        const categoryId = params.get("category") || "";

        let url = "/teas";
        const query = {};

        if (searchTerm) {
            url = "/teas/search";
            query.name = searchTerm;
        } else if (categoryId) {
            url = `/teas/categories/${categoryId}`;
        }

        axios
            .get(url, { params: query })
            .then((res) => setTeas(res.data))
            .catch((err) => console.error(err));

        // Determine page title and banner
        if (searchTerm) {
            setPageTitle(`Teas matching "${searchTerm}"`);
            setBannerImage("/categoryplaceholder.jpeg");
        } else if (categoryId) {
            // fetch category info to get name and banner
            axios
                .get(`/teas/categories/${categoryId}`)
                .then((res) => {
                    // TeaService returns list of teas, we want the category info from first tea
                    if (res.data.length > 0 && res.data[0].category) {
                        const cat = res.data[0].category;
                        setPageTitle(cat.name);
                        setBannerImage(cat.photoUrl || "/categoryplaceholder.jpeg");
                    }
                })
                .catch((err) => console.error(err));
        } else {
            setPageTitle("Our Teas");
            setBannerImage("/categoryplaceholder.jpeg");
        }
    }, [location.search]);

    return (
        <>
            <Banner title="" imageSrc={bannerImage} />

            <Container>
                <div className="text-center mb-4">
                    <Text level={5}>{pageTitle}</Text>
                    <DividingLine />
                </div>


                <div className="row g-4 justify-content-center">
                    {teas.map((tea) => (
                        <div
                            key={tea.id}
                            className="col-12 col-sm-6 col-md-4 col-lg-3"
                        >
                            <Link to={`/teas/${tea.id}`} className="text-decoration-none text-dark">
                                <div className="card h-100 text-center shadow-sm card-hover">
                                    <img
                                        src={tea.photoUrl || "/teaplaceholder.jpeg"}
                                        alt={tea.name}
                                        className="card-img-top"
                                        style={{ height: "200px", objectFit: "contain" }}
                                    />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <Text level={3} className="mb-2">{tea.name}</Text>
                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            {tea.category && (
                                                <Text level={4} className="mb-0">
                                                    {tea.category.name}
                                                </Text>
                                            )}
                                            {/* Stock & Price logic */}
                                            {tea.stock === 0 ? (
                                                <Text level={6}>
                                                    More on the way!
                                                </Text>
                                            ) : (
                                                <div className="d-flex align-items-center gap-2">
                                                    {tea.stock < 4 && (
                                                        <Text level={7}>
                                                            Low Stock!
                                                        </Text>
                                                    )}
                                                    <Text level={4} className="mb-0 fw-bold">
                                                        ${tea.price.toFixed(2)}
                                                    </Text>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}

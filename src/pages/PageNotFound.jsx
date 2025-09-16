// simple 404 page that maintains the style of the application and displays when a user navigates to a route which doesn't exist

import Container from "../components/ui/Container";
import Text from "../components/ui/Text";

export default function PageNotFound() {
    return (
        <Container>
            <div className="text-center">
                <Text level={1}>Page Not Found</Text>
            </div>
        </Container>
    )
}
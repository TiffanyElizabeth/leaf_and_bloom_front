// a component that is only for development purposes - to see all text styles and button styles in one place, making it easier to ensure consistency

import Text
    from "../components/ui/Text";
import Button from "../components/ui/Button";
import DividingLine from "../components/ui/DividingLine";
export default function DesignSystem() {
    return (
        <>
            <section>
                <Text level={1}>Text option 1</Text>
                <Text level={2}>Text option 2</Text>
                <Text level={3}>Text option 3</Text>
                <Text level={4}>Text option 4</Text>
                <Text level={5}>Text option 5</Text>
                <Text level={6}>Text option 6</Text>
                <Text level={7}>Text option 7</Text>
                <Text level={8}>Text option 8</Text>
            </section>
            <DividingLine></DividingLine>
            <section>
                <Button level={1}>Search</Button>
                <Button level={2}>Option 2</Button>
            </section>
        </>
    )
}
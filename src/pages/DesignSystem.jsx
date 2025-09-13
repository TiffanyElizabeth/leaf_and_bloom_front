import Text
    from "../components/ui/Text";
import Button from "../components/ui/Button";
export default function DesignSystem() {
    return (
        <>
            <section>
                <Text level={1}>Text option 1</Text>
                <Text level={2}>Text option 2</Text>
                <Text level={3}>Text option 3</Text>
                <Text level={4}>Text option 4</Text>
            </section>
            <section>
                <Button level={1}>Search</Button>
                <Button level={2}>Option 2</Button>
            </section>
        </>
    )
}
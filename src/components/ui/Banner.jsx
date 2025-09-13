import Text from "./Text";

export default function Banner({ title, subtitle, imageSrc, variant = "banner" }) {
    // Set height based on variant
    const height = variant === "hero" ? "600px" : "300px";

    return (
        <div
            className="banner d-flex flex-column justify-content-center align-items-center text-center"
            style={{
                height,
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
                borderBottom: "8px solid #B0C4A5",
            }}
        >
            {title && <Text level={1} className="mb-2" style={{ color: "#fff" }}>{title}</Text>}

            {/* Only show subtitle if  hero */}
            {variant === "hero" && subtitle && (
                <Text level={3} style={{ color: "#fff" }}>{subtitle}</Text>
            )}
        </div>
    );
}
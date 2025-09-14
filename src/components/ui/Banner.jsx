import Text from "./Text";

export default function Banner({ title, subtitle, imageSrc, variant = "banner" }) {
    // Set height based on variant
    const height = variant === "hero" ? "600px" : "300px";

    return (
        <div
            className="banner banner-image d-flex flex-column justify-content-center align-items-center text-center"
            style={{
                height,
                backgroundImage: `url(${imageSrc})`,


            }}
        >
            {title && <Text level={1} className="mb-2" style={{ color: "#fff" }}>{title}</Text>}

            {/* Only show subtitle if  hero */}
            {variant === "hero" && subtitle && (
                <Text level={3} className="text-white">{subtitle}</Text>
            )}
        </div>
    );
}

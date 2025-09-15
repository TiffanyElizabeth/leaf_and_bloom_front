// reusable componentso doefor page banners and heros 

import Text from "./Text";

export default function Banner({ title, subtitle, imageSrc, variant = "banner", className = "", children, ...props }) {
    // Set height based on variant (default is banner at 300px)
    const height = variant === "hero" ? "600px" : "300px";

    return (
        <div
            className={`banner banner-image d-flex flex-column justify-content-center align-items-center text-center ${className}`}
            style={{
                height,
                backgroundImage: `url(${imageSrc})`,
            }}
            {...props}
        >
            {title && <Text level={1} className="mb-2 text-white">{title}</Text>}
            {subtitle && <Text level={3} className="text-white">{subtitle}</Text>}
            {children} {/* in case of any other content - ad es. buttons */}
        </div>
    );
}

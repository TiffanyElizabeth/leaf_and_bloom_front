export default function Text({ level = 1, children, ...props }) {
    if (level === 1) {
        return (
            <h1 className="text-h1" {...props}>
                {children}
            </h1>
        );
    }

    if (level === 2) {
        return (
            <h2 className="text-h2" {...props}>
                {children}
            </h2>
        );
    }

    if (level === 3) {
        return (
            <h5 className="text-h5" {...props}>
                {children}
            </h5>
        );
    }

    if (level === 4) {
        return (
            <p className="text-body-black" {...props}>
                {children}
            </p>
        );
    }

    if (level === 5) {
        return (
            <h1 className="text-h1-subtle display-5" {...props}>
                {children}
            </h1>
        );
    }

    if (level === 6) {
        return (
            <p className="text-body-sage ">
                {children}
            </p>
        )
    }

    if (level === 7) {
        return (
            <p className=" text-body-gold ">
                {children}
            </p>
        )
    }

    // fallback
    return (
        <p className="text-body" {...props}>
            {children}
        </p>
    );
}

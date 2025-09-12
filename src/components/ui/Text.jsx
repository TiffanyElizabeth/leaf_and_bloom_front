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
            <h3 className="text-h3" {...props}>
                {children}
            </h3>
        );
    }

    if (level === 4) {
        return (
            <p className="text-body" {...props}>
                {children}
            </p>
        );
    }

    // fallback
    return (
        <p className="text-body" {...props}>
            {children}
        </p>
    );
}

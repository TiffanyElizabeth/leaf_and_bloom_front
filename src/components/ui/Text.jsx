// standardizes font throughout my application, having defined custom fonts and colors - makes code cleaner, more consistent and easier to update (if desire to change font or color for example)

export default function Text({ level, children, ...props }) { // level = which version; children = content; ...props = any other attributes (makes it more flexible)
    if (level === 1) { // big bold header 
        return (
            <h1 className="text-h1" {...props}>
                {children}
            </h1>
        );
    }

    if (level === 2) { // smaller bold header
        return (
            <h2 className="text-h2" {...props}>
                {children}
            </h2>
        );
    }

    if (level === 3) { // subtitle text
        return (
            <h5 className="text-h5" {...props}>
                {children}
            </h5>
        );
    }

    if (level === 4) { // basic body text 
        return (
            <p className="text-body-black" {...props}>
                {children}
            </p>
        );
    }

    if (level === 5) { // subtle header 
        return (
            <h1 className="text-h1-subtle display-5" {...props}>
                {children}
            </h1>
        );
    }

    if (level === 6) { // small sage font
        return (
            <p className="text-body-sage ">
                {children}
            </p>
        )
    }

    if (level === 7) { // small gold font 
        return (
            <p className=" text-body-gold ">
                {children}
            </p>
        )
    }

    if (level === 8) { // basic nav bar text 
        return (
            <p className="text-body-black mb-0 fs-5" {...props}>
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

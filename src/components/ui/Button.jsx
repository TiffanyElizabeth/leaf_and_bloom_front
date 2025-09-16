// resuable button component to maintain consistency across application (keep with the brand and make code cleaner and more easily modifiable - customizable yet adhers to DRY)

export default function Button({ level = 1, children, ...props }) { // level = which version of button, children = what is shown on button, props = any other attributes 
    if (level === 1) {
        return (
            <button className="btn-1" {...props}>{children}</button>
        )
    }
    if (level === 2) {
        return (
            <button className="btn-2" {...props}>{children}</button>
        )
    }

    // fallback - decided to keep multiple if statements due to potential future scalability
    return (
        <button className="btn-1" {...props}>{children}</button>
    );
}

// used custom styling to tie in with brand - see index.css for detail
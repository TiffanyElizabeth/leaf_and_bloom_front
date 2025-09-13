export default function Button({ level = 1, children, ...props }) {
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
}
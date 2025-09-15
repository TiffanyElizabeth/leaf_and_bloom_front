// reusable layout component that reduces duplicate code - applies uniform container where it is imported 

export default function Container({ children, className = "", ...props }) { //
    return (
        <div className={`container mx-auto py-5 ${className}`} {...props}>{children}</div>
    )
}

// children = what goes in the container 
// added className = "" to parameters so that can add additional classes in components (like bg-sage) and it won't overwrite my other classes - default is an empty string so that it works also if i don't add any other classes
// ...props any other attributes a component passes will be applied 
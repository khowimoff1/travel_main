const Container = ({children, className}) => {
    return (
        <div className={` w-full px-3 mx-auto ${className?.includes("max-w-") ? (className) : (className + " " + "max-w-[1320px]")}`}>
            {children}
        </div>
    )
}

export default Container
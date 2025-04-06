import Link from "next/link"

const Button = ({children, className, onClick = () => {}, href = "", type = "button"}) => {
    return (
        type == "button" ? (
            <button onClick={onClick} className={`capitalize px-[20px] md:px-[30px] py-[10px] md:py-3 text-white font-semibold text-base bg-primary border border-primary rounded-[30px] hover:text-primary hover:bg-transparent transition-all duration-500 ${className}`}>
                {children}
            </button>
        ) : (
            <Link href={href} className={`capitalize px-[20px] md:px-[30px] py-[10px] md:py-3 text-white font-semibold text-base bg-primary border border-primary rounded-[30px] hover:text-primary hover:bg-transparent transition-all duration-500 ${className}`} >
                {children}
            </Link>
        )
    )
}

export default Button
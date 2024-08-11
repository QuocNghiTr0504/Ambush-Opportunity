export const Button: React.FC<React.PropsWithChildren<{ onClick?: () => void, className?: string }>> = ({ children, onClick, className }) => {
    return (
        <button className={`${className} py-4 px-6 rounded-full mb-2 w-auto hover:opacity-90 hover:shadow-2xl hover:shadow-maintext hover:text-black transition-colors duration-500 ease-in-out`} onClick={onClick}>
            <div className=" font-bold">
                {children}
            </div>
        </button>
    )
}
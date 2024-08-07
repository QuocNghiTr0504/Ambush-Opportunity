export const Button: React.FC<React.PropsWithChildren<{ onClick?: () => void, className?: string }>> = ({ children, onClick, className }) => {
    return (
        <button className={`${className} py-4 px-6 rounded-full mb-2 w-auto bg-gradient-to-r from-orange-400 to-red-400 hover:shadow-2xl transition-all duration-500 ease-in-out`} onClick={onClick}>
            <div className="text-white font-bold">
                {children}
            </div>
        </button>
    )
}
import React from 'react';

export const Title: React.FC<React.PropsWithChildren<{ barPosition?: 'center' | 'start' | 'end', barColor?: 'orange' | 'white', className?: string }>> = ({ children, className, barPosition = "start", barColor = "orange" }) => {

    const renderBar = () => {
        if (barColor == "orange")
            return (<div className="my-4 w-16 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded"></div>)
        if (barColor == "white")
            return (<div className="my-4 w-16 h-2 bg-white rounded"></div>)
    }
    return (
        <div className={`flex flex-col items-${barPosition}`}>
            {renderBar()}
            <h2 className={`${className} text-3xl font-bold mb-4 text-gray-800`}>{children}</h2>
        </div>
    );
};

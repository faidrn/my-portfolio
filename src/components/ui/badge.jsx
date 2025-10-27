import React from 'react';

import { cn } from './utils';

function Badge ({
    children,
    className = "",
    variant = "default",
}){
    // Definimos las variantes manualmente 
    const variantClasses  = {
        default: "bg-blue-600 text-white border-transparent hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 border-transparent hover:bg-gray-300",
        destructive: "bg-red-600 text-white border-transparent hover:bg-red-700",
        outline: "bg-transparent text-gray-800 border border-gray-400 hover:bg-gray-100",
    };


    return (
        <span 
            className={cn(
                "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap gap-1",
                variantClasses[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

export { Badge };
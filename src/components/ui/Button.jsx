import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl font-exo';

    const variants = {
        primary: 'bg-[#2d95bc] text-white hover:bg-[#2270c2]',
        secondary: 'bg-white text-[#2d95bc] border border-[#2d95bc] hover:bg-gray-50',
        outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
        ghost: 'bg-transparent text-[#2d95bc] hover:bg-gray-50',
        lime: 'bg-[#b3fc6a] hover:bg-[#a3ec5a] text-[#191919] shadow-md hover:shadow-lg', // The CTA button style
        white: 'bg-white text-[#090f4e] hover:bg-gray-100 shadow-sm'
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-[52px] px-6 text-base', // Default header button height
        lg: 'h-[54px] px-8 text-lg',
        xl: 'px-8 py-4 text-xl'
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

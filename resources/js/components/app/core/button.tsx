import classNames from 'classnames';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
}

export function Button({ children, className = '', variant = 'primary', startIcon, endIcon, ...props }: Readonly<ButtonProps>) {
    const baseClass = 'inline-flex items-center gap-2 px-4 py-2 rounded transition font-medium';

    const variantClass = {
        primary: 'bg-primary-500 dark:bg-primary-500 text-white hover:bg-primary-400 dark:hover:bg-primary-300',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    };

    return (
        <button {...props} className={classNames(baseClass, variantClass[variant], className)}>
            {startIcon && <span className="icon-before">{startIcon}</span>}
            <span>{children}</span>
            {endIcon && <span className="icon-after">{endIcon}</span>}
        </button>
    );
}

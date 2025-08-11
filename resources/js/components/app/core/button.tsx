import classNames from 'classnames';
import { Loader, LoaderCircle } from 'lucide-react';
import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'info' | 'warning';
  variant?: 'contained' | 'outline';
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

type VariantStyles = {
  contained: ColorStyles;
  outline: ColorStyles;
};

type ColorStyles = {
  primary: string;
  secondary: string;
  danger: string;
  info: string;
  warning: string;
};

type SizeStyles = {
  sm: string;
  md: string;
  lg: string;
};

const LoadingSpinner = () => <LoaderCircle className="animate-spin opacity-75" />;

/**
 * @param params {ButtonProps, HTMLButtonElement}
 * @returns{React.ReactNode}
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      color = 'primary',
      variant = 'contained',
      size = 'md',
      loading = false,
      disabled = false,
      fullWidth = false,
      startIcon,
      endIcon,
      type = 'button',
      ...props
    },
    ref,
  ): React.ReactNode => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded transition-all duration-200 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';

    // Size styles
    const sizeStyles: SizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    // Variant and color styles
    const variantStyles: VariantStyles = {
      contained: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300 disabled:bg-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:disabled:bg-primary-400',
        secondary:
          'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-300 disabled:bg-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300 disabled:bg-red-300 dark:bg-red-600 dark:hover:bg-red-700',
        info: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 disabled:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700',
        warning:
          'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300 disabled:bg-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700',
      },
      outline: {
        primary:
          'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-300 disabled:border-primary-300 disabled:text-primary-300 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900',
        secondary:
          'border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 focus:ring-secondary-300 disabled:border-secondary-300 disabled:text-secondary-300 dark:text-secondary-400 dark:border-secondary-400',
        danger:
          'border-2 border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-300 disabled:border-red-300 disabled:text-red-300 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-900',
        info: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-300 disabled:border-blue-300 disabled:text-blue-300 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900',
        warning:
          'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-300 disabled:border-yellow-300 disabled:text-yellow-300 dark:text-yellow-400 dark:border-yellow-400 dark:hover:bg-yellow-900',
      },
    };

    // Loading styles
    const loadingStyles = 'disabled:opacity-70';

    // Full width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Combine all styles
    const buttonStyles = classNames(baseStyles, sizeStyles[size], variantStyles[variant][color], loading && loadingStyles, widthStyles, className);

    const isDisabled = disabled || loading;

    return (
      <button ref={ref} type={type} disabled={isDisabled} className={buttonStyles} {...props}>
        {loading ? (
          <LoadingSpinner />
        ) : startIcon ? (
          <span className="flex-shrink-0" aria-hidden="true">
            {startIcon}
          </span>
        ) : null}

        <span className={loading ? 'opacity-70' : ''}>{children}</span>

        {!loading && endIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </button>
    );
  },
);

export { Button };

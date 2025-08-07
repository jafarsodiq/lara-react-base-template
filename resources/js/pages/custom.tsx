import ThemeToggle from '@/components/app/toogle';
import { Button } from '@/components/app/core';

export default function Custom() {
    return (
        <div className="min-h-screen flex-col items-center justify-center bg-background dark:bg-background">
            <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                <nav className="flex items-center justify-end gap-4">
                    <ThemeToggle />
                </nav>
            </header>

            <div className='w-full flex items-center justify-center'>
              <Button>TRS</Button>
            </div>
        </div>
    );
}

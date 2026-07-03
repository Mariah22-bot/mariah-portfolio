import { type ReactNode } from "react";

type MainProps = {
    children?: ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-(--color-background)sm:p-4 sm:pt-4 md:p-8 md:pt-6">
            {children}
        </main>
    );
};

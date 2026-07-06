import { type ReactNode } from "react";

type MainProps = {
    children?: ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return (
        <main className="relative flex min-h-screen w-full flex-col items-stretch justify-start overflow-hidden bg-(--color-background)">
            {children}
        </main>
    );
};

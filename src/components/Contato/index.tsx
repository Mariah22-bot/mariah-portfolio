import { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface ContactItem {
    name: string;
    icon: IconType;
    href: string;
}

const contacts: ContactItem[] = [
    {
        name: "E-mail",
        icon: FiMail,
        href: "mailto:isa.bel.rodrigues.mi@gmail.com",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://linkedin.com/in/maria-isabel-502268195/",
    },
];

export const Contato = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const currentElement = containerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <footer
            ref={containerRef}
            id="contato"
            className=" scroll-mt-0 min-h-screen w-full relative overflow-hidden bg-linear-to-b from-[#a057e1] via-[#8769a5] to-black shrink-0 flex flex-col justify-between"
        >
            <div
                className={`absolute left-0 top-0 rounded-full bg-[#EFD9C7]/10 blur-[160px] transition-all duration-2000 ease-out ${isVisible ? "h-96 w-96 opacity-100 scale-150" : "h-72 w-72 opacity-50 scale-50"
                    }`}
            />

            <div
                className={`absolute right-0 bottom-0 rounded-full bg-[#EFD9C7]/5 blur-[170px] transition-all duration-2000 ease-out delay-300 ${isVisible ? "h-96 w-96 opacity-100 scale-150" : "h-72 w-72 opacity-50 scale-50"
                    }`}
            />

            <div
                className={`mx-auto flex max-w-7xl grow w-full flex-col items-center justify-center gap-12 px-8 py-16 md:flex-row lg:flex-row md:justify-between transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="text-center lg:text-left flex flex-col gap-4">
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[8px] text-[#EFD9C7] drop-shadow-[0_0_18px_rgba(239,217,199,0.45)] transition-all duration-1000 ease-out transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
                            }`}
                    >
                        Gostou do meu trabalho?
                    </h2>

                    <p
                        className={`max-w-xl text-xl leading-9 text-[#EFD9C7]/80 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        Entre em contato e vamos criar algo incrível juntos.
                    </p>
                </div>

                <div
                    className={`flex flex-row gap-5 items-center justify-center transition-all duration-1000 delay-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-75"
                        }`}
                >
                    {contacts.map((contact) => {
                        const Icon = contact.icon;

                        return (
                            <a
                                key={contact.name}
                                href={contact.href}
                                aria-label={`Entrar em contato via ${contact.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    h-24
                                    w-24
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-3xl
                                    
                                    bg-[#EFD9C7]/5
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-[#EFD9C7]
                                    hover:bg-[#EFD9C7]/10
                                    hover:shadow-[0_0_30px_rgba(239,217,199,0.35)]

                                    animate-float"
                            >
                                <Icon
                                    className="
                                        text-5xl
                                        text-[#EFD9C7]
                                        transition-all
                                        duration-500
                                        group-hover:scale-125
                                        group-hover:rotate-6
                                        group-hover:drop-shadow-[0_0_12px_rgba(239,217,199,0.8)]
                                    "
                                />
                            </a>
                        );
                    })}
                </div>

            </div>

            <div className="border-t border-[#EFD9C7]/10 w-full shrink-0">
                <div className="mx-auto flex max-w-7xl items-center justify-center py-4">
                    <p className="text-base tracking-[3px] text-[#EFD9C7]/60 text-center">© {new Date().getFullYear()} • Desenvolvido com React + TypeScript</p>
                </div>
            </div>
        </footer>
    );
};

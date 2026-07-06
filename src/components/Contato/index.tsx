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
        href: "mailto:seuemail@exemplo.com",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://linkedin.com/in/seuperfil",
    },
];

export const Contato = () => {
    return (
        <footer id="contato" className="scroll-mt-24 mt-auto w-full relative overflow-hidden bg-linear-to-b from-[#a057e1] via-[#8769a5] to-black shrink-0">
            {/* Glow */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#EFD9C7]/10 blur-[160px]" />

            <div className="absolute right-0 bottom-0 rounded-full bg-[#EFD9C7]/5 blur-[170px]" />

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-8 py-8 md:flex-row lg:flex-row">
                {/* Texto */}

                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-black uppercase tracking-[8px] text-[#EFD9C7] drop-shadow-[0_0_18px_rgba(239,217,199,0.45)]">
                        Gostou do meu trabalho?
                    </h2>

                    <p className="max-w-xl text-xl leading-9 text-[#EFD9C7]/80">
                        <br />
                        Entre em contato e vamos criar algo incrível juntos.
                    </p>
                </div>

                {/* Redes */}

                {contacts.map((contact) => {
                    const Icon = contact.icon;

                    return (
                        <a
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                h-24
                                w-24
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

            {/* Linha inferior */}

            <div className="border-t border-[#EFD9C7]/10">
                <div className="mx-auto flex max-w-7xl items-center justify-center py-4">
                    <p className="text-base tracking-[3px] text-[#EFD9C7]/60 text-center">© {new Date().getFullYear()} • Desenvolvido com React + TypeScript</p>
                </div>
            </div>
        </footer>
    );
};
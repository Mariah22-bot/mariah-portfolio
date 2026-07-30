import { FaCode } from "react-icons/fa";

export const Sobre = () => {

    const tecnologias = [
        { categoria: "Linguagens", itens: "TypeScript, JavaScript, HTML5 e CSS3" },
        { categoria: "Biblioteca", itens: "React.js" },
        { categoria: "Estilização", itens: "Tailwind CSS" },
        { categoria: "Ferramentas de versionamento", itens: "Git e GitHub" },
        { categoria: "Conceitos/Foco", itens: "Desenvolvimento Front-end, Web Design Responsivo, APIs REST" },
    ];

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-4 sm:py-10 md:py-12 max-[680px]:items-start max-[680px]:justify-start max-[680px]:pt-24 max-[600px]:pt-28 max-[520px]:pt-32">

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center pt-0 sm:pt-6 md:pt-0">

                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[10px] text-[#EFD9C7] drop-shadow-[0_0_25px_rgba(43,11,210,1)]">
                    Sobre
                </h1>

                <div className="mt-5 h-0.5 w-32 rounded-full bg-[#3e1de0]" />

                <article
                    className="
                        mt-10 sm:mt-12 md:mt-14
                        w-full
                        rounded-3xl
                        border
                        border-[#19a6b9]/15
                        bg-[#19a6b9]/5
                        p-5
                        md:p-14
                        backdrop-blur-xl
                        shadow-[0_15px_50px_rgba(0,0,0,.35)]
                    "
                >

                    <section className="space-y-6">

                        <h2 className="text-center text-3xl font-bold text-[#f20e4f]">
                            Quem sou eu?
                        </h2>

                        <p className="text-lg leading-9 text-[#0000F6]/85">
                            Me faço essa pergunta todos os dias, e a resposta
                            sempre muda a cada momento.
                        </p>

                    </section>

                    <section className="mt-12">

                        <blockquote
                            cite="https://pt.wikipedia.org/wiki/S%C3%B3crates"
                            className="
                                border-l-4
                                border-[#550542]/50
                                pl-8
                                italic
                                text-xl
                                leading-10
                                text-[#0000F6]/85
                                space-y-6
                            "
                        >
                            <p>Sou um amontoado de átomos e moléculas?</p>

                            <p>Sou um espírito de passagem pela terra?</p>

                            <p>Sou uma alma que habita um corpo?</p>

                            <p>
                                E sempre me lembro de Sócrates, que dizia:
                            </p>

                            <p className="text-2xl font-semibold text-[#0000F6]/85">
                                <cite className="not-italic">"Só sei que nada sei."</cite>
                            </p>

                        </blockquote>

                    </section>

                    <section className="mt-14 space-y-8">

                        <h2 className="text-3xl font-bold text-[#f20e4f]">
                            O presente
                        </h2>

                        <p className="text-lg leading-9 text-[#0000F6]/85">
                            Mas nesse momento sou uma desenvolvedora front-end,
                            que ama criar interfaces e experiências incríveis
                            para os usuários.
                        </p>

                        <p className="text-lg leading-9 text-[#0000F6]/85">
                            Confesso que estou engatinhando ainda no mundo do
                            desenvolvimento, e este portfólio é uma forma de
                            mostrar o que já aprendi e o que ainda estou
                            aprendendo, ele é meu primeiro projeto desenvolvido do zero.
                        </p>

                        <p className="text-lg leading-9 text-[#0000F6]/85">
                            Sei que tenho uma longa jornada pela frente, mas
                            estou animada para continuar aprendendo e crescendo
                            cada vez mais.
                        </p>

                    </section>

                    <section className="mt-14 space-y-6">

                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4">
                            <FaCode className="text-5xl text-[#f20e4f]" />

                            <h2 className="text-3xl font-bold text-[#f20e4f]">
                                Tecnologias
                            </h2>
                        </div>

                        <ul className="space-y-4 text-lg leading-9 text-[#0000F6]/85">
                            {tecnologias.map((tech, index) => (
                                <li key={index}>
                                    <span className="font-semibold text-[#f20e4f]">{tech.categoria}: </span>
                                    {tech.itens}
                                </li>
                            ))}
                        </ul>

                    </section>

                </article>

            </div>

        </section>
    );
};
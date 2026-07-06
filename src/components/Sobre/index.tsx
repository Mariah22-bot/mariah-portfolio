export const Sobre = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

            {/* Glow */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#550542]/5 blur-[150px]" />
            <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#550542]/5 blur-[150px]" />

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">

                {/* Título */}

                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[10px] text-[#550542] drop-shadow-[0_0_18px_rgba(85,5,66,0.90)]">
                    Sobre
                </h1>

                <div className="mt-5 h-[2px] w-32 rounded-full bg-[#550542]/50" />

                {/* Card */}

                <article
                    className="
                        mt-14
                        w-full
                        rounded-3xl
                        border
                        border-[#F60002]/15
                        bg-[#F60002]/5
                        p-8
                        md:p-14
                        backdrop-blur-xl
                        shadow-[0_15px_50px_rgba(0,0,0,.35)]
                    "
                >

                    {/* Introdução */}

                    <section className="space-y-6">

                        <h2 className="text-3xl font-bold text-[#F60002]">
                            Quem sou eu?
                        </h2>

                        <p className="text-lg leading-9 text-[#0000F6]/85">
                            Me faço essa pergunta todos os dias, e a resposta
                            sempre muda a cada momento.
                        </p>

                    </section>

                    {/* Reflexões */}

                    <section className="mt-12">

                        <blockquote
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
                                "Tudo que sei é que nada sei."
                            </p>

                        </blockquote>

                    </section>

                    {/* Desenvolvimento */}

                    <section className="mt-14 space-y-8">

                        <h2 className="text-3xl font-bold text-[#F60002]">
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
                            aprendendo, pois este é o primeiro projeto que faço
                            sozinha.
                        </p>

                        <p className="text-lg leading-9 text-[#0000F6]/85">
                            Sei que tenho uma longa jornada pela frente, mas
                            estou animada para continuar aprendendo e crescendo
                            cada vez mais.
                        </p>

                    </section>

                    {/* Encerramento */}

                    <section
                        className="
                            mt-16
                            rounded-2xl
                            border
                            border-[#F60002]/15
                            bg-[#F60002]/5
                            p-8
                        "
                    >

                        <h2 className="text-3xl font-bold text-[#F60002]">
                            Obrigada pela visita!
                        </h2>

                        <p className="mt-6 text-lg leading-9 text-[#0000F6]/85">
                            E se você chegou até aqui, quero te agradecer por
                            dedicar um tempo para conhecer um pouco mais sobre
                            mim.
                        </p>

                    </section>

                </article>

            </div>

        </section>
    );
};


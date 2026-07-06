export const Contato = () => {
    const emailLink = "mailto:seuemail@exemplo.com?subject=Contato%20pelo%20site";
    const linkedInLink = "https://www.linkedin.com/in/seu-perfil/";

    return (
        <section className="relative min-h-screen bg-#EFD9C7 px-6 py-20 text-white sm:px-10 lg:py-16">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b1224]/5 p-8 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-xl sm:p-12">
                <div className="mb-8 flex flex-col gap-4">
                    <div>
                        <h1 className="text-center text-4xl font-semibold tracking-tight text-cyan-400 sm:text-5xl">Conecte-se comigo</h1>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <a
                        href={emailLink}
                        className="group overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-[#081025]/80 p-6 text-left transition duration-500 hover:-translate-y-1 hover:border-cyan-400/70 hover:bg-[#0d1b3a]/90"
                    >
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-950/80 shadow-[0_0_30px_rgba(56,189,248,0.15)] transition duration-500 group-hover:scale-105">
                            <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/10 opacity-90 blur-xl" />
                            <svg viewBox="0 0 24 24" className="relative h-12 w-12 text-cyan-300 transition duration-500 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 6.5h16" />
                                <path d="M4 17.5h16" />
                                <path d="M4 6.5l8 6 8-6" />
                                <path d="M4 17.5l8-6 8 6" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="mt-6">

                        </div>
                        <div className="mt-6 flex items-center gap-3 text-sm text-cyan-300">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 transition duration-300 group-hover:bg-cyan-500/20">→</span>
                            <span className="uppercase tracking-[0.2em] text-cyan-200/80">Abrir e-mail</span>
                        </div>
                    </a>

                    <a
                        href={linkedInLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-[2rem] border border-fuchsia-500/20 bg-[#081025]/80 p-6 text-left transition duration-500 hover:-translate-y-1 hover:border-fuchsia-400/70 hover:bg-[#250a3d]/90"
                    >
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-950/80 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition duration-500 group-hover:scale-105">
                            <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-transparent to-cyan-500/10 opacity-90 blur-xl" />
                            <svg viewBox="0 0 24 24" className="relative h-12 w-12 text-fuchsia-300 transition duration-500 group-hover:scale-110" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.351V9h3.415v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.603 0 4.269 2.373 4.269 5.459v6.284zm-14.52-12.94c-1.144 0-2.07-.928-2.07-2.07 0-1.145.926-2.07 2.07-2.07 1.144 0 2.07.925 2.07 2.07 0 1.142-.926 2.07-2.07 2.07zm1.777 12.94H4.151V9h3.553v11.452z" />
                            </svg>
                        </div>
                        <div className="mt-6">

                        </div>
                        <div className="mt-6 flex items-center gap-3 text-sm text-fuchsia-300">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 transition duration-300 group-hover:bg-fuchsia-500/20">→</span>
                            <span className="uppercase tracking-[0.2em] text-fuchsia-200/80">Abrir perfil</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { GoRepo } from "react-icons/go";

export const Projetos = () => {
  const githubUrl = "https://github.com/Mariah22-bot?tab=repositories";
  const vercelUrl = "https://vercel.com/mariah22-bots-projects";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#f20e4f]/5 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#f20e4f]/5 blur-[150px]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">

        <h1 className="text-3xl md:text-7xl font-black uppercase tracking-[10px] text-[#EFD9C7] drop-shadow-[0_0_10px_rgba(43,11,210,0.90)]">
          Projetos
        </h1>

        <div className="mt-5 h-0.5 w-36 rounded-full bg-[#3e1de0]/80" />

        <article
          className="
                        mt-14
                        w-full
                        rounded-3xl
                        border
                        border-[#f20e4f]/15
                        bg-[#f20e4f]/5
                        p-10
                        md:p-14
                        backdrop-blur-xl
                        shadow-[0_15px_50px_rgba(0,0,0,.35)]
                    "
        >
          <div className="flex flex-col items-center text-center">

            <GoRepo className="text-5xl md:text-8xl lg:text-8xl text-[#f20e4f]" />

            <h2 className="mt-8 text-2xl md:text-4xl lg:text-4xl font-bold text-[#f20e4f]">
              Meus Repositórios
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#0000F6]/85">
              Estou no início da minha jornada como desenvolvedora.
              Por isso, ainda estou construindo meus próprios
              projetos e consolidando meus conhecimentos.

              <br />
              <br />

              Enquanto isso, compartilho no GitHub e na Vercel alguns projetos desenvolvidos
              acompanhando cursos e estudos práticos. Eles mostram
              minha evolução, dedicação e vontade constante de
              aprender.
            </p>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                                mt-12

                                flex
                                items-center
                                gap-4

                                rounded-2xl

                                border
                                border-[#f20e4f]

                                bg-[#f20e4f]/10

                                px-10
                                py-5

                                text-xl
                                font-semibold

                                text-[#f20e4f]

                                transition-all
                                duration-500

                                hover:-translate-y-2
                                hover:bg-[#f20e4f]/15
                                hover:shadow-[0_0_25px_rgba(239,217,199,.3)]
                            "
            >
              <FaGithub />

              Visitar GitHub
            </a>

            <a
              href={vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                                mt-12

                                flex
                                items-center
                                gap-4

                                rounded-2xl

                                border
                                border-[#f20e4f]

                                bg-[#f20e4f]/10

                                px-10
                                py-5

                                text-xl
                                font-semibold

                                text-[#f20e4f]

                                transition-all
                                duration-500

                                hover:-translate-y-2
                                hover:bg-[#f20e4f]/15
                                hover:shadow-[0_0_25px_rgba(239,217,199,.3)]
                            "
            >
              <SiVercel />

              Visitar Vercel
            </a>

            <section
              className="
                            mt-16
                            rounded-2xl
                            border
                            border-[#f20e4f]/15
                            bg-[#f20e4f]/5
                            p-5
                        "
            >

              <h2 className="text-3xl font-bold text-[#f20e4f]">
                Obrigada pela visita!
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#0000F6]/85">
                E se você chegou até aqui, quero te agradecer por
                dedicar um tempo para conhecer um pouco mais sobre
                mim.
              </p>

            </section>

          </div>

        </article>

      </div>

    </section>
  );
};
import imagemCentral from "../../../assets/images/imagem-central.png";

type InteractiveContainerProps = {
    showHotspots?: boolean;
    onSelectHotspot?: () => void;
};

export const InteractiveContainer = ({ showHotspots = false, onSelectHotspot }: InteractiveContainerProps) => {
    // Mostrar as animações (animate-float) enquanto o menu estiver fechado.
    // showHotspots === true significa menu aberto, então invertemos.
    const shouldRevealHair = !showHotspots;
    const shouldRevealEye = !showHotspots;
    const shouldRevealMouth = !showHotspots;

    return (
        <div className="absolute inset-x-0 top-20 z-10 flex justify-center sm:top-16 md:top-12 lg:top-8">
            {/* Container Pai: Limita o tamanho máximo na tela */}
            <div className="w-full max-w-[min(90vw,37.5rem)] aspect-square animate-fade-in sm:max-w-lg md:max-w-xl lg:max-w-160">
                <svg
                    viewBox="0 0 1000 1000"
                    className="w-full h-full select-none"
                >
                    {/* 1. A SUA ILUSTRAÇÃO COMO BASE DO SVG */}
                    <image
                        href={imagemCentral}
                        width="1000"
                        height="1000"
                        className="rounded-2xl"
                    />

                    {/* ------------------------------------------------------------- */}
                    {/* HOTSPOT DA BOCA (CONTATO) */}
                    {/* ------------------------------------------------------------- */}
                    <a href="#" className="group cursor-pointer focus-visible:outline-none"
                        onClick={(event) => {
                            event.preventDefault();
                            onSelectHotspot?.();
                        }}
                    >

                        {/* 
                          Mudança: Adicionado 'group-hover:scale-110' e ajustado origin para o centro exato [493px_740px]
                          para expandir suavemente sem deslocar para os lados.
                        */}
                        <g
                            className={`fill-none transition-all duration-500 origin-[493px_740px] group-hover:scale-110
                            filter-[drop-shadow(0_0_4px_var(--color-glow-mouth))] 
                            group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-mouth))]
                            translate-x-3
                            translate-y-8

                            ${shouldRevealMouth ? "animate-float" : ""}`}
                        >
                            {/* Área interna invisível para clique total */}
                            <path
                                d="M 420,730 
                                   C 440,715 465,700 485,710 
                                   C 492,713 496,713 502,710 
                                   C 522,700 547,715 567,730 
                                   C 577,734 577,738 567,741 
                                   C 548,748 526,770 493,770 
                                   C 460,770 438,748 420,741 
                                   C 410,738 410,734 420,730 
                                   Z"
                                fill="transparent"
                                className="cursor-pointer"
                            />
                            {/* Contorno Neon dos Lábios */}
                            <path
                                d="M 420,730 
                                    C 440,715 465,700 485,710 
                                    C 492,713 496,713 502,710 
                                    C 522,700 547,715 567,730 
                                    C 577,734 577,738 567,741 
                                    C 548,748 526,770 493,770 
                                    C 460,770 438,748 420,741 
                                    C 410,738 410,734 420,730 
                                    Z"
                                stroke="var(--color-glow-mouth)"
                                strokeWidth="5"
                                className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M 422,734 
                                    C 455,730 480,740 493,737 
                                    C 505,740 530,730 565,734"
                                stroke="var(--color-glow-mouth)"
                                strokeWidth="2"
                                className={`${shouldRevealMouth ? "opacity-80" : "opacity-20"} group-hover:opacity-80 transition-opacity duration-500`}
                            />
                        </g>
                    </a>

                    {/* ------------------------------------------------------------- */}
                    {/* HOTSPOT DO OLHO ESQUERDO (SOBRE MIM)                          */}
                    {/* ------------------------------------------------------------- */}
                    <a href="#" className="group cursor-pointer focus-visible:outline-none"
                        onClick={(event) => {
                            event.preventDefault();
                            onSelectHotspot?.();
                        }}
                    >
                        {/* 
                          Mudança: Adicionado 'group-hover:scale-110' e corrigido origin para [365px_577px] 
                          (o centro da massa do olho esquerdo).
                        */}
                        <g
                            className={`fill-none transition-all 
                            duration-500 origin-[365px_577px] group-hover:scale-110
                            filter-[drop-shadow(0_0_4px_var(--color-glow-eye))] 
                            group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-eye))]
                            translate-x-6
                            translate-y-4.5

                            ${shouldRevealEye ? "animate-float" : ""}`}
                        >
                            {/* Área interna invisível para clique total */}
                            <path
                                d="M 435,595 
                                   C 415,575 375,560 340,565 
                                   C 320,567 305,563 295,555 
                                   C 310,587 325,587 325,595
                                   C 365,618 410,615 435,595 Z"
                                fill="transparent"
                                className="cursor-pointer"
                            />
                            {/* Desenho do Olho Esquerdo */}
                            <path
                                d="M 435,595 
                                    C 415,575 375,560 340,565 
                                    C 320,567 305,563 295,555 
                                    C 300,568 315,586 335,590
                                    C 370,596 410,600 435,595 
                                    Z"
                                stroke="var(--color-glow-eye)"
                                strokeWidth="5"
                                className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M 435,595 
                                    C 410,615 365,618 325,595 
                                    C 310,587 295,555 295,555"
                                stroke="var(--color-glow-eye)"
                                strokeWidth="3"
                                className={`${shouldRevealEye ? "opacity-90" : "opacity-30"} group-hover:opacity-90 transition-opacity duration-500`}
                                strokeLinecap="round"
                            />
                        </g>
                    </a>

                    {/* HOTSPOT DO OLHO DIREITO (SOBRE MIM) */}

                    <a href="#" className="group">
                        <g className="">
                            <g
                                className={`fill-none transition-all duration-500 origin-[365px_577px] group-hover:scale-110
                                scale-x-[-1]
                                group-hover:scale-x-[-1.1] 
                                group-hover:scale-y-[1.1]
                                filter-[drop-shadow(0_0_4px_var(--color-glow-eye))] 
                                group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-eye))]
                                translate-x-52
                                translate-y-5.5

                                ${shouldRevealEye ? "animate-float" : ""}`}
                            >
                                {/* Área interna invisível para clique total */}

                                <path
                                    d="M 435,595 
                                       C 415,575 375,560 340,565 
                                       C 320,567 305,563 295,555 
                                       C 310,587 325,587 325,595
                                       C 365,618 410,615 435,595 Z"
                                    fill="transparent"
                                    className="cursor-pointer"
                                />

                                {/* Desenho do Olho Direito */}
                                <path
                                    d="M 435,595 
                                        C 415,575 375,560 340,565 
                                        C 320,567 305,563 295,555 
                                        C 300,568 315,586 335,590
                                        C 370,596 410,600 435,595 
                                        Z"
                                    stroke="var(--color-glow-eye)"
                                    strokeWidth="5"
                                    className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M 435,595 
                                        C 410,615 365,618 325,595 
                                        C 310,587 295,555 295,555"
                                    stroke="var(--color-glow-eye)"
                                    strokeWidth="3"
                                    className={`${shouldRevealEye ? "opacity-90" : "opacity-30"} group-hover:opacity-90 transition-opacity duration-500`}
                                    strokeLinecap="round"
                                />
                            </g>
                        </g>
                    </a>


                    {/* HOTSPOT DO CACHO DE CABELO CENTRAL (PROJETOS) */}

                    <a href="#" className="group cursor-pointer focus-visible:outline-none"
                        onClick={(event) => {
                            event.preventDefault();
                            onSelectHotspot?.();
                        }}
                    >

                        <g
                            className={`fill-none transition-all duration-500 origin-[485px_130px] group-hover:scale-110
                            filter-[drop-shadow(0_0_4px_var(--color-glow-hair))] 
                            group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-hair))]
                            translate-x-3
                            translate-y-3

                            ${shouldRevealHair ? "animate-float" : ""}`}
                        >
                            {/* O Cacho ondulado visível */}
                            <path
                                d="M 490,260 
                                    C 440,240 430,220 490,210 
                                    C 550,200 540,190 480,180 
                                    C 420,170 430,160 490,150 
                                    C 550,140 540,130 480,120
                                    C 420,110 430,100 490,90
                                    C 550,80 540,70 480,60
                                    C 420,50 430,40 490,30
                                    C 545,20 540,10 492,2"
                                stroke="var(--color-glow-hair)"
                                strokeWidth="6"
                                className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Área de clique invisível espessa */}
                            <path
                                d="M 490,260 
                                    C 440,240 430,220 490,210 
                                    C 550,200 540,190 480,180 
                                    C 420,170 430,160 490,150 
                                    C 550,140 540,130 480,120 
                                    C 420,110 430,100 490,90 
                                    C 550,80 540,70 480,60 
                                    C 420,50 430,40 490,30 
                                    C 545,20 540,10 492,2"
                                stroke="transparent"
                                strokeWidth="40"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cursor-pointer"
                            />
                        </g>
                    </a>

                    {/* ------------------------------------------------------------- */}
                    {/* HOTSPOT DO CACHO DE CABELO ESQUERDO (DIAGONAL) */}
                    {/* ------------------------------------------------------------- */}
                    <a href="#" className="group cursor-pointer focus-visible:outline-none"
                        onClick={(event) => {
                            event.preventDefault();
                            onSelectHotspot?.();
                        }}
                    >
                        {/* Camada de animação contínua (Pulso) */}
                        <g className="">
                            {/* Camada de Zoom e Posicionamento: */}
                            <g
                                className={`fill-none transition-all duration-500 origin-[485px_260px] group-hover:scale-110
                                filter-[drop-shadow(0_0_4px_var(--color-glow-hair))] 
                                group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-hair))]
                                rotate-[-32deg] 
                                -translate-x-12 
                                translate-y-5
                                ${shouldRevealHair ? "animate-float" : ""}`}
                            >

                                {/* O Cacho ondulado visível (Mesmo caminho D) */}
                                <path
                                    d="M 490,260 
                                        C 440,240 430,220 490,210 
                                        C 550,200 540,190 480,180 
                                        C 420,170 430,160 490,150 
                                        C 550,140 540,130 480,120 
                                        C 420,110 430,100 490,90 
                                        C 550,80 540,70 480,60 
                                        C 420,50 430,40 490,30 
                                        C 545,20 540,10 492,2"
                                    stroke="var(--color-glow-hair)"
                                    strokeWidth="6"
                                    className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {/* Área de clique invisível espessa */}
                                <path
                                    d="M 490,260 
                                        C 440,240 430,220 490,210 
                                        C 550,200 540,190 480,180 
                                        C 420,170 430,160 490,150 
                                        C 550,140 540,130 480,120 
                                        C 420,110 430,100 490,90 
                                        C 550,80 540,70 480,60 
                                        C 420,50 430,40 490,30 
                                        C 545,20 540,10 492,2"
                                    stroke="transparent"
                                    strokeWidth="40"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="cursor-pointer"
                                />
                            </g>
                        </g>
                    </a>

                    {/* ------------------------------------------------------------- */}
                    {/* HOTSPOT DO CACHO DE CABELO DIREITO (DIAGONAL)                 */}
                    {/* ------------------------------------------------------------- */}
                    <a href="#" className="group cursor-pointer focus-visible:outline-none"
                        onClick={(event) => {
                            event.preventDefault();
                            onSelectHotspot?.();
                        }}
                    >
                        {/* Camada de animação contínua (Pulso) */}
                        <g className="">
                            {/* Camada de Zoom e Posicionamento: */}
                            <g
                                className={`fill-none transition-all duration-500 origin-[485px_260px] group-hover:scale-110
                                filter-[drop-shadow(0_0_4px_var(--color-glow-hair))] 
                                group-hover:filter-[drop-shadow(0_0_20px_var(--color-glow-hair))]
                                rotate-32 
                                translate-x-20 
                                translate-y-5
                                ${shouldRevealHair ? "animate-float" : ""}`}
                            >

                                {/* O Cacho ondulado visível (Mesmo caminho D) */}
                                <path
                                    d="M 490,260 
                                        C 440,240 430,220 490,210 
                                        C 550,200 540,190 480,180 
                                        C 420,170 430,160 490,150 
                                        C 550,140 540,130 480,120 
                                        C 420,110 430,100 490,90 
                                        C 550,80 540,70 480,60 
                                        C 420,50 430,40 490,30 
                                        C 545,20 540,10 492,2"
                                    stroke="var(--color-glow-hair)"
                                    strokeWidth="6"
                                    className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                </path>
                                {/* Área de clique invisível espessa */}
                                <path
                                    d="M 490,260 
                                        C 440,240 430,220 490,210 
                                        C 550,200 540,190 480,180 
                                        C 420,170 430,160 490,150 
                                        C 550,140 540,130 480,120 
                                        C 420,110 430,100 490,90 
                                        C 550,80 540,70 480,60 
                                        C 420,50 430,40 490,30 
                                        C 545,20 540,10 492,2"
                                    stroke="transparent"
                                    strokeWidth="40"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="cursor-pointer"
                                />
                            </g>
                        </g>
                    </a>
                </svg>
            </div>
        </div>
    );
};
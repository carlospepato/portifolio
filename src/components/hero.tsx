import { useState } from "react";
import qrCode from "../assets/aboutMe.svg"
import { Link } from "react-scroll";

interface HeroProps {
    Ref: React.RefObject<HTMLElement>;
    goingsTo: string;

}



export function Hero(props: HeroProps){
    const photoPortifolio = "https://avatars.githubusercontent.com/u/71358695?v=4"
    const [exibirQRCode, setExibirQRCode] = useState(false);
    const handleButtonClick = () => {
      setExibirQRCode(!exibirQRCode);
    };
    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    return(
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Olá, Sou o Carlos Pepato</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Um desenvolvedor Full-stack com habilidades nas tecnologias mais atuais do mercado!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md cursor-pointer bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    onClick={handleButtonClick}
                  >
                    Contato
                  </a>
                  <Link
                    onClick={() => scrollToRef(props.Ref)}
                    className="inline-flex h-10 items-center justify-center rounded-md cursor-pointer border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-gray-50 dark:focus-visible:ring-zinc-300"
                    to={props.goingsTo}
                  >
                    Projetos
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Foto do Portifólio"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src={photoPortifolio}
                  width="550"
                />
                <img
                  alt="QR Code"
                  className={`absolute mx-auto inset-0 aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square transition-opacity ${exibirQRCode ? 'opacity-100' : 'opacity-0'}`}
                  height="350"
                  src={qrCode}
                  width="350"
                />
              </div>
            </div>
          </div>
    )
}
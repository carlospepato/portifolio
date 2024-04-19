import { Technologies } from "./technologies";
import reactIcon from '../assets/react.svg';
import typescriptIcon from '../assets/typescript.svg';
import nodeIcon from '../assets/nodejs.svg';
import tailwindcss from '../assets/tailwindcss.svg'
import pythonIcon from '../assets/python.svg'
import dockerIcon from '../assets/docker.svg'

export function Skills(){
    return(
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Minhas Experiências</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Estou me especializando em construir aplicações web modernas, responsivas e acessíveis utilizando 
                  as mais recentes tecnologias de front-end e back-end.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Technologies
                image={typescriptIcon}
                titleImage="TypeScript"
                title="Type-Safe"
                description="Tecnologia utilizada para garantir mais segurança e robustez ao desenvolver aplicações, permitindo a detecção precoce de erros e a melhoria da manutenibilidade do código."
              />
              <Technologies
                image={tailwindcss}
                titleImage="Tailwind CSS"
                title="Estilização Utilitária"
                description="Tecnologia utilizada para estilizar aplicações web de forma rápida e eficiente, aproveitando suas classes utilitárias para criar interfaces de usuário consistentes e responsivas."
              />
              <Technologies
                image={reactIcon}
                titleImage="ReactJs"
                title="Componentização"
                description="Construção de aplicações web escaláveis utilizando ReactJs, aproveitando sua arquitetura baseada em componentes para criar componentes de interface de usuário reutilizáveis e modulares."
              />
              <Technologies
                image={nodeIcon}
                titleImage="NodeJs"
                title="Server-Side"
                description="Desenvolvimento de aplicações server-side utilizando Node.js, aproveitando seu modelo de I/O não bloqueante e orientado a eventos para construir sistemas backend eficientes e escaláveis."
              />
              <Technologies
                image={pythonIcon}
                titleImage="Python"
                title="Desenvolvimento Versátil"
                description="Python é utilizado para uma variedade de tarefas de desenvolvimento, desde scripting até desenvolvimento web e análise de dados, aproveitando sua simplicidade e versatilidade."
              />
              <Technologies
                image={dockerIcon}
                titleImage="Docker"
                title="Contêinerização"
                description="Docker é usado para criar, implantar e executar aplicativos em contêineres, proporcionando portabilidade, escalabilidade e isolamento do ambiente de execução."
              />
            </div>
          </div>
    )
}
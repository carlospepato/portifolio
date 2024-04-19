import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";

interface Project {
    id: number;
    name: string;
    html_url: string;
    description: string;
    languages_url: string;
}
interface cardProps {
    description: string;
    maxLength: number;
}
export function CardDescription({ description, maxLength } : cardProps) {
    if (!description) {
      return <>{description}</>;
    } else if (description.length <= maxLength) {
        return <>{description}</>;
    }else{
        return <>{description.slice(0, maxLength)}...</>;
    }
  }

export function Projects(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    
    // useEffect(() => {
    //     const url = new URL(`https://api.github.com/users/carlospepato/repos`);
    //     try{
    //         fetch(url.toString())
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if(data.message){
    //                 console.log(data.message);
    //                 return;
    //             }
    //         setProjects(data);
    //         setReload(false);
    //     });
    //     }catch(error){
    //         console.log(error);
    //     }
        
    //   }, [reload]);
    return(
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meus Projetos Recentes</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Confira algumas das aplicações web que construí para demonstrar minhas habilidades de desenvolvimento front-end.
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-5xl py-12 lg:gap-4">
              <Carousel opts={{ align: "center"}} className="w-full lg:max-w-5xl">
                <CarouselContent className="-ml-1">
                  {projects.length == 0 ? Array.from({length: 5}).map((_, index) => (
                    <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                      <Card className="w-72 h-60 flex flex-col justify-between dark:bg-zinc-800 bg-zinc-100">
                        <CardHeader>
                          <CardTitle className="text-md">teste</CardTitle>
                          <CardDescription description={'teste'} maxLength={100}/>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CardFooter className="justify-center">
                          <a
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href={'teste'}
                            target="_blank"
                          >
                            Ver Projetos
                          </a>
                        </CardFooter>
                      </Card>
                      </div>
                    </CarouselItem>
                  )) 
                : projects.map((project) => (
                    <CarouselItem key={project.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                      <Card className="w-72 h-60 flex flex-col justify-between dark:bg-zinc-800 bg-zinc-100">
                        <CardHeader>
                          <CardTitle className="text-lg">{project.name}</CardTitle>
                          <CardDescription description={project.description} maxLength={100}/>
                        </CardHeader>
                        <CardFooter className="justify-center">
                          <a
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href={project.html_url}
                            target="_blank"
                          >
                            Ver Projetos
                          </a>
                        </CardFooter>
                      </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
              </Carousel>
            </div>
          </div>
    )
}
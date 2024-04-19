import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Moon, Sun } from "lucide-react";
import { NavLink } from "./nav-link";

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    heroRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
}

export function Header(props: HeaderProps){
    const photoPortifolio = "https://avatars.githubusercontent.com/u/71358695?v=4"
    
      const toggleDarkMode = () => {
        props.setDarkMode(!props.darkMode);
      };
    return(
        <header className="px-4 lg:px-6 h-14 flex items-center dark:text-gray-200 dark:bg-zinc-900">
            <div className="container flex">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={photoPortifolio} alt="@carlospepato" />
                        <AvatarFallback>CP</AvatarFallback>
                    </Avatar>
                    <a
                        className="cursor-pointer"
                        onClick={toggleDarkMode}
                    >
                        {props.darkMode ? <Sun/> : <Moon/>}
                    </a>
                </div>
                <nav className="ml-auto flex gap-5">
                    <div className="flex gap-4">
                        <NavLink 
                            Ref={props.heroRef}
                            goingsTo="#hero"
                            children="Sobre"
                        />
                        <NavLink 
                            Ref={props.skillsRef}
                            goingsTo="#skills"
                            children="Skills"
                        />
                        <NavLink 
                            Ref={props.projectsRef}
                            goingsTo="#projects"
                            children="Projetos"
                        />
                    </div>
                </nav>
            </div>
      </header>
    )
}
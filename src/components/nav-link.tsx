import { Link } from "react-scroll";

interface NavLinkProps {
    Ref: React.RefObject<HTMLDivElement>;
    goingsTo: string;
    children: string;

}

export function NavLink(props: NavLinkProps){
    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
            <div className="flex gap-4">
                <Link
                onClick={() => scrollToRef(props.Ref)}
                className="text-sm gap-4 font-medium hover:underline underline-offset-4 cursor-pointer"
                smooth={true}
                offset={50} 
                duration={500}
                to={props.goingsTo}>
                {props.children}
                </Link>
            </div>
            
        
    )
}
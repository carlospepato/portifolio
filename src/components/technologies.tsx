interface TechnologiesProps {
    image: string;
    titleImage: string;
    title: string;
    description: string;
}

export function Technologies(props: TechnologiesProps){
    return(
        <div className="flex flex-col justify-start space-y-4">
            <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-1 py-1 dark:bg-zinc-800">
                <div className="w-10 h-10">
                    <img src={props.image} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold">{props.titleImage}</span>  
            </div>
            <h3 className="text-2xl font-bold">{props.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">
                {props.description}
            </p>
        </div>
    )
}

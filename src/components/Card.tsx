interface IProps{
    title:string,
    desc:string,
    image:string,
    buttonText:string,
    onClick:()=>void
}

export default function Card ({title,desc,image,buttonText}:IProps){
    return(
        
        <div className="w-full  bg-white p-12 shadow-card ">
            <figure className="text-center">
                <img src={image} alt={title} />
                <h5 className="text-black font-bold text-[28px] mt-[28px] text-center ">{title}</h5>
                <p className="text-center text-secondary">{desc}</p>
            </figure>
        </div>
        
        

    )
}
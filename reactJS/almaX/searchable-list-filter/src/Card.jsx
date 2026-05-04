function Card({title, description, category}) {
    return ( <div className="border shadow-md hover:shadow-lg m-4">
        <h1 className="text-lg line-clamp-1">{title}</h1>
        <p className="text-gray-500 text-base">{category[0].toUpperCase()+category.slice(1)}</p>
        <p className="text-base line-clamp-2">{description}</p>
    </div> );
}

export default Card;
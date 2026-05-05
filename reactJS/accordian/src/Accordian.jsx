function Accordian({title, description, isOpen, toggle}) {
    return ( <div>
        <button onClick={toggle}>{title}</button>
        {isOpen && <p>{description}</p>}
    </div> );
}

export default Accordian;
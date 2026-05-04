function Modal({title, description, ref}) {
    return ( <div className="overlay">
        <div className="modalOpen" ref={ref}>
            <div>
                <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    </div> );
}

export default Modal;
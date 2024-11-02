import "./inicioPage.css"

const SlideCard = ({ imgSrc, title, address, phone, className }) => {
    return (
        <div className={`card container ${className}`} style={{ "width": "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{address}</p>
                <p className="card-text">{phone}</p>
            </div>
        </div>
    );
};

export default SlideCard;
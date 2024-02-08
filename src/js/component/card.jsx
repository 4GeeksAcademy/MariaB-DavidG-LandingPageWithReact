import React from "react";
import PropType from "prop-types";

const Card = ({title, imageUrl, description, buttonLabel}) => {

    return (
    <div className = "d-flex justify-content-center gap-3">
        <div className = "border border-light-subtle mt-4 mb-4">
            <img className = "card-img-top" src = {imageUrl}/>
            <div className = "card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text text-center">{description}</p>
                <div className = "bg-light w-100 d-flex justify-content-center p-2 border border-light-subtle">
                    <a href = "#" className = "btn btn-primary btn-lg w-50" role="button">{buttonLabel}</a>
                    </div>
            </div>
        </div>
        <div className = "border border-light-subtle mt-4 mb-4">
            <img className = "card-img-top" src = {imageUrl}/>
            <div className = "card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text text-center">{description}</p>
                <div className = "bg-light w-100 d-flex justify-content-center p-2 border border-light-subtle">
                    <a href = "#" className = "btn btn-primary btn-lg w-50" role="button">{buttonLabel}</a>
                    </div>
            </div>
        </div>
        <div className = "border border-light-subtle mt-4 mb-4">
            <img className = "card-img-top" src = {imageUrl}/>
            <div className = "card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text text-center">{description}</p>
                <div className = "bg-light w-100 d-flex justify-content-center p-2 border border-light-subtle">
                    <a href = "#" className = "btn btn-primary btn-lg w-50" role="button">{buttonLabel}</a>
                    </div>
            </div>
        </div>
        <div className = "border border-light-subtle mt-4 mb-4">
            <img className = "card-img-top" src = {imageUrl}/>
            <div className = "card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text text-center">{description}</p>
                <div className = "bg-light w-100 d-flex justify-content-center p-2 border border-light-subtle">
                    <a href = "#" className = "btn btn-primary btn-lg w-50" role="button">{buttonLabel}</a>
                    </div>
            </div>
        </div>
    </div>)
    };

	Card.propTypes ={
        title: PropType.string,
        imageUrl: PropType.string,
        description: PropType.string,
        buttonLabel: PropType.string,
    };

    Card.defaultProps = {
        title: 'Card Title',
        imageUrl: 'https://via.placeholder.com/500x325',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. Viverra nibh cras pulvinar mattis nunc sed.',
        buttonLabel: `Click here`
    }

    

    export default Card;


const PrincipalButton = ({onClick, buttonText, className,containerClass,type = "button"}) => {
    return(
        <div className={`button-container ${containerClass}`}>
            <button type={type} onClick={onClick}  className={`btn btn-principal ${className}`}>{buttonText}</button>
        </div>
    )
}
export default PrincipalButton;
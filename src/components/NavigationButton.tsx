
type Props = {
    onClickHandler: () => any
    classes: string
    text: string
}


const NavigationButton = ({ onClickHandler, text, classes }: Props) => {
    return (
        <button onClick={onClickHandler} className={`button ${classes}`}>

            {text}
        </button>
    )
}

export default NavigationButton

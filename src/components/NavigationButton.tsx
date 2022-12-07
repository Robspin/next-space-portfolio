
type Props = {
    onClickHandler: () => any
    classes: string
    text: string
}


const NavigationButton = ({ onClickHandler, text, classes }: Props) => {
    return (
        <div onClick={onClickHandler} className={`button ${classes}`}>
            {text}
        </div>
    )
}

export default NavigationButton

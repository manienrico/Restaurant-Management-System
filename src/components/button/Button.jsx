import './button.css'

const BUTTON_TYPE_CLASSES = {
  google: ' ',
  inverted: '',
}

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} { ...otherProps }>
      { children }
    </button>
  )
}

import './form-input.styles.css'

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className='group'>
        <input className='form-input' {...otherProps} />
        {label && (
            <label className='form-input-label'>{label}</label>
        )}
    </div>
  )
}

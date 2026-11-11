import './Button.css'

export function PrimaryButton({
  text = 'Button',
  primaryColor = '#BFBFBF',
  primaryColorAlt = '#fff',
  textColor = '#ffffff',
  textColorAlt = '#000',
  blur = '0px',
  blurAlt = '0px'
}) {
  return (
    <button className="cta-wrap">
      <div
        className="primary-button"
        style={{ backgroundColor: primaryColor, backdropFilter: `blur(${blur})` }}
      >
        <span
          className="button-text"
          style={{ color: textColor }}
        >{text}</span>
      </div>
      <div
        className="primary-button-alt"
        style={{ backgroundColor: primaryColorAlt, backdropFilter: `blur(${blurAlt})` }}
        aria-hidden="true"
      >
        <span 
        className="button-text"
        style={{ color: textColorAlt }}
        >{text}</span>
      </div>
    </button>
  )
}




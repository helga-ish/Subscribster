import './PopupWithSubscr.css';
import usePopupClose from "../hooks/usePopupClose";


export default function PopupWithSubscr({ title, children, isOpen, onClose }) {

  const className = `popupWithSubscr ${isOpen ? 'popupWithSubscr_active' : ''}`;
  usePopupClose(isOpen, isClose);


  return(
    <section className={className}>
      <div className='popupWithSubscr__container'>
        <button className="popupWithSubscr__toggle" type="button" onClick={onClose}/>
          <form className="form">
              <h2 className="form__heading">{`${title}`}</h2>
              <fieldset className="form__fields">
                  {children}
              </fieldset>
              <button type="submit" className="form-button">Add</button>
          </form>
      </div>
    </section>
  )
}
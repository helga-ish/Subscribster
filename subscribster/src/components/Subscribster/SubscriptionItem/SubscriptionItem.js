import './SubscriptionItem.css';
import netflixicon from '../../../images/netflixicon.svg';

export default function SubscriptionItem() {

  return(
    <li className="subscriptionItem">
      <div className="subscriptionItem__block">
        <img className='subscriptionItem__icon' src={netflixicon} alt='icon'/>
      </div>
      <div className="subscriptionItem__info">
        <h2 className="subscriptionItem__name">Netflix</h2>
        <p className="subscriptionItem__status subscriptionItem__status_active subscriptionItem__status_notactive">Active</p>
      </div>
      <p className='subscriptionItem__expire'>Expires on 11/12/23</p>
    </li>
  )
}
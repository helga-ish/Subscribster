import './Subscriptions.css';
import SubscriptionItem from '../SubscriptionItem/SubscriptionItem';

export default function Subscriptions() {
  return(
    <main>
      <section className='subscriptionsList'>
        <ul className='subscriptionsList__gallery'>
          <SubscriptionItem />
        </ul>
        <button type="button" className="subscriptionsList__showmore">More</button>
      </section>
    </main>
  )
}
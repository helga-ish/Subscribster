import './Main.css';
import Subscriptions from '../Subscriptions/Subscriptions';

export default function Main() {
  return(
    <main>
      <div>
        <Subscriptions />
        <button>Add subscription</button>
      </div>
    </main>
  )
}
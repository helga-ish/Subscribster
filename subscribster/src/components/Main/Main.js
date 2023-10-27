import './Main.css';
import Subscriptions from '../Subscriptions/Subscriptions';

function Main() {

  return(
    <main className='main'>
      <div className='main__container'>
        <button className='main__button'>Add subscription</button>
        <Subscriptions />

      </div>
    </main>
  )

}

export default Main;
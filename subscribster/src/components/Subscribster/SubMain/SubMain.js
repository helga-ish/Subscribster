import './SubMain.css';
import Subscriptions from '../Subscriptions/Subscriptions';

function SubMain() {

  return(
    <main className='submain'>
      <div className='submain__container'>
        <button className='submain__button'>Add subscription</button>
        <Subscriptions />

      </div>
    </main>
  )

}

export default SubMain;
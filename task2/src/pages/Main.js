import Person from '../components/person/Person';
import Menu from '../components/menu/Menu';

function Main() {
    let props = {first_name: "Karthik", age: 29, data:[{"skill":"java","rating":4}, {"skill":"DSA", "rating":4}, 
    {"skill":"HTML", "rating":4}, {"skill":"CSS", "rating":4}]}
    return (
      <div className="Resume">
        <div className='Top'>
        </div>
        <div className='Bottom'>
          <div className='Left'><Menu {...props}/></div>
            <div className='Right'><Person token = {'Backend'} age={29}/></div>
        </div>
      </div>
    );
  }
  
  export default Main;
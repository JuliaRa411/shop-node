
import './App.css';
import Cart from './Components.js/Cart/Cart';
import Dishes from './Components.js/DishesComponents/Dishes';
import AllCategories from './Components.js/Filter/AllCategories';

function App() {
  return (
    <div className='App'> 
    <div className='block'> 
<AllCategories/>
<Cart/>
</div>
<div className='block'> 
<Dishes/>
</div>

    </div>
   
  );
}

export default App;

import List from './Components/list'
import MenuBar from './Components/Nav'
import {Route, BrowserRouter} from 'react-router-dom'
import Profile from './Components/profiles/profile'

function App() {
  return (
    <div>
      
        
      <BrowserRouter>
      <MenuBar/>
        <Route exact path='/list' component={List}></Route>
        <Route exact path ='/profile' component={Profile}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

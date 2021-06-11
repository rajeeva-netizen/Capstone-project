import {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import List from './list'
import {Redirect, useHistory} from 'react-router-dom'


function Navigation(props){
  const history= useHistory()
  const [login, setLogin] = useState(false)

  function HandleClick(){
    console.log('cliked')
    // history.push('/profile')
    setLogin(true)
    console.log(login)
    
  }

  function HandleHome(){
   history.push('/list')
  }
  return(
    <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand onClick={HandleHome}>Home</Navbar.Brand>
    
    <Nav className="me-auto" onClick={HandleClick}>
      <Nav.Link>Profile</Nav.Link>
    </Nav>
  </Navbar>
  
  {
    login? <Redirect to={'/profile'}/>:<Redirect to={'/list'}/>
  }
    </div>
  )
}

export default Navigation
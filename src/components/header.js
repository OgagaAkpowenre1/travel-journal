import logo from './logo.svg';

export default function Header(){
 return (
  <div className='nav'>
    <h1>My Travel Journal</h1>
    <img src={logo} className="App-logo" alt=''/>
  </div>
 )
}
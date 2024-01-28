import Header from './components/header';
import data from './components/data';
import Entry from './components/entry';
import './App.css';

function App() {
  const travelDetails = data.map(detail => {
      return <Entry 
      detail = {detail}/>
  })

  return (
    <div className="App">
      <Header />
      {travelDetails}
    </div>
  );
}

export default App;

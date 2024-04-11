import '../src/assets/fonts/roboto'
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';

function App() {

  return (
    <div className='main'>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default App

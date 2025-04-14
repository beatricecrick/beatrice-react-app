import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import Demo from './Demo.jsx';

function App(){

  return(
    <>
      <Header/>
      <Stuff name="Bob Smith" title="CEO"/>
      <Stuff name="Sue Jones" title="CFO"/>
      <Stuff/>
      <Stuff/>
      <Footer/>
    </>
  );
}
export default App
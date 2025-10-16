// import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// import './App.css';

// function App() {

//   function handleNameChange(){
//     let names = ["Earn","Grow", "Give"];
//     let randomNames = Math.floor(Math.random() * names.length);
//     return names[randomNames];
//   }

//   return (
//    <div>
//     <p>Let's {handleNameChange()} money</p>
//    </div>
//   );
// }

function App() { 
   return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

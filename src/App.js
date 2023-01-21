import Header from "../src/Components/Header";
import Letter from "../src/Components/Letter";
import './App.css';

function App() {
  return (
    <div className="App m-0 px-5 py-5 max-w-3xl m-auto ">
      <Header/>
      <Letter/>
      <div className="flex gap-5">
         {/* Buttons */}
         <button style={{backgroundColor:"#ff6e6d",color:"white",padding:"5px",width:"8rem",borderRadius:"5px"}}>Download Pdf</button>
         <button style={{backgroundColor:"white",color:"#ff6e6d",border:"1px solid #ff6e6d",padding:"5px",borderRadius:"5px"}}>Mail Pdf to Stationery shop</button>
      </div>

    </div>
  );
}

export default App;

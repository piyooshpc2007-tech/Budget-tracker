import { Card } from "./components/Card";
import { Expance } from "./components/Expance";
import { Navbar } from "./components/Navbar";


function App() {

  return <div className="w-screen h-screen bg-amber-50">
    <Navbar />
    <div className="content-center ">
    <div className="flex justify-between items-center p-8"></div>
    <div className="flex"><Card type="Income" balance="2000" />
    <Card type="Expence" balance="0" />
    <Card type="Balance" balance="2000" /></div>
    <Expance />
    </div>
  </div>
  
}
export default App;
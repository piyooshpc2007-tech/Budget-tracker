import { Card } from "./components/Card";
import { Expance } from "./components/Expance";
import { Navbar } from "./components/Navbar";


function App() {

  return <div className="w-screen h-screen bg-amber-50">
    {/* <Navbar /> */}
    <div className="flex justify-between items-center p-8"></div>
    {/* <Card type="Income" balance="2000" /> */}
    <Expance />
  </div>
  
}
export default App;
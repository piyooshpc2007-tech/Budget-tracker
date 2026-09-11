

import { Input } from "./Input";
import { Button } from "./Button";

export function Expance() {
  return (
    <div className="h-96 w-3xl bg-white rounded-xl p-8">
      <div className="flex">
        <div className="w-full bg-[#D4553E] mr-2 text-center text-md font-semibold p-3 rounded-xl">
          Expense
        </div>

        <div className="w-full bg-[#3D6B8C] ml-2 text-center text-md font-semibold p-3 rounded-xl">
          Income
        </div>
      </div>
      <div className="flex">
            <div className="w-96">
          <Input label={"Amount"} placeholder={0.00} /></div>
          <div className="w-96">
          <Input label={"Category"} placeholder={"Food"} />
          </div>
        </div>
        <div className="w-3xl">
            <Input label={"Note (optional)"} placeholder={"Write somethings..."}></Input>
        </div>
        <Button label={"Add Transaction"}></Button>
    </div>
  );
}
// export function Expance(){
//     return <div className="h-96 w-3xl bg-white rounded-xl p-8">
//         <div className="flex">
//              <div className="w-full bg-[#D4553E]  mr-2 text-center text-md
//              font-semibold p-3 rounded-xl ">Expense</div>
//              <div className="w-full bg-[#3D6B8C] ml-2  text-center text-md
//              font-semibold p-3 rounded-xl ">Income</div>
//              <div className="flex">
//                 <Input label={"Amount"} placeholder={0.00}></Input>
//                 <Input label={"Category"} placeholder={"Food"}></Input>
//              </div>
//         </div>
//     </div>
// } 
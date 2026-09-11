export function Button({label,onClick}){
    return <div className="w-full bg-black text-white hover:cursor-pointer hover:bg-gray-700 p-2 rounded-md text-center">
        <button onClick={onClick}>{label}</button>

    </div>

}
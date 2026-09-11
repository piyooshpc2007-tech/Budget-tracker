export function Input({ label, placeholder }) {
  return (
    <div>
      <div>{label}</div>
      <input
        placeholder={placeholder}
        className="w-auto border border-gray-300 p-2 rounded-md"
        
      />
    </div>
  );
}
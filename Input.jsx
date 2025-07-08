
export function Input({ name, value, onChange, placeholder }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
    />
  );
}

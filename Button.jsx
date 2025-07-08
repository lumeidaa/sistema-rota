
export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
    >
      {children}
    </button>
  );
}

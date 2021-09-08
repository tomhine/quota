export default function FormInput({ htmlFor, label, type, onChange }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} name={htmlFor} onChange={onChange} />
    </div>
  );
}

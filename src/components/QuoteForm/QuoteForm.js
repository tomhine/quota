import FormInput from '../FormInput/FormInput';

export default function QuoteForm({ onNameInput, setName, setAddress }) {
  return (
    <form onSubmit={onNameInput}>
      <div>
        <FormInput
          type="text"
          htmlFor="name"
          label="Name"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <FormInput
          type="text"
          htmlFor="address"
          label="Address"
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

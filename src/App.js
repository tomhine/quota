import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import QuoteForm from './components/QuoteForm/QuoteForm';
import QuoteView from './components/QuoteView/QuoteView';

export default function App() {
  const [quote, setQuote] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const nameInputHandler = e => {
    e.preventDefault();
    setQuote(c => ({ ...c, name: name, address: address }));
  };

  const quoteViewRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => quoteViewRef.current,
  });

  return (
    <div>
      <QuoteForm
        onNameInput={nameInputHandler}
        setName={setName}
        setAddress={setAddress}
      />
      <QuoteView quote={quote} ref={quoteViewRef} />
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

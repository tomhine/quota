import { forwardRef } from 'react';
import styles from './QuoteView.module.css';

const QuoteView = forwardRef(({ quote }, ref) => {
  return (
    <div className={styles.printout} ref={ref}>
      <h3>{quote.name}</h3>
      <address>{quote.address}</address>
    </div>
  );
});

export default QuoteView;

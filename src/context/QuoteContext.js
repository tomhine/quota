import React, { useReducer } from 'react';
import quoteReducer, {
  ADD_CUSTOMER_DETAILS,
  REMOVE_CUSTOMER_DETAILS,
  ADD_WORK_DETAILS,
  REMOVE_WORK_DETAILS,
} from './quoteReducer';

export const quoteCtx = React.createContext({
  customerDetails: {},
  workDetails: [],
  addCustomerDetails: () => {},
  removeCustomerDetails: () => {},
  addWorkDetails: () => {},
  removeWorkDetails: () => {},
});

export default function QuoteContext({ children }) {
  const [quoteState, quoteDispatch] = useReducer(quoteReducer, {
    customerDetails: {},
    workDetails: [],
  });

  const addCustomerDetails = customer => {
    quoteDispatch({ type: ADD_CUSTOMER_DETAILS, customer: customer });
  };

  const removeCustomerDetails = () => {
    quoteDispatch({ type: REMOVE_CUSTOMER_DETAILS });
  };

  const addWorkDetails = work => {
    quoteDispatch({ type: ADD_WORK_DETAILS, work: work });
  };

  const removeWorkDetails = id => {
    quoteDispatch({ type: REMOVE_WORK_DETAILS, id: id });
  };

  return (
    <quoteCtx.Provider
      value={{
        customerDetails: quoteState.customerDetails,
        workDetails: quoteState.workDetails,
        addCustomerDetails: addCustomerDetails,
        removeCustomerDetails: removeCustomerDetails,
        addWorkDetails: addWorkDetails,
        removeWorkDetails: removeWorkDetails,
      }}
    >
      {children}
    </quoteCtx.Provider>
  );
}

export const ADD_CUSTOMER_DETAILS = 'ADD_CUSTOMER_DETAILS';
export const REMOVE_CUSTOMER_DETAILS = 'REMOVE_CUSTOMER_DETAILS';
export const ADD_WORK_DETAILS = 'ADD_WORK_DETAILS';
export const REMOVE_WORK_DETAILS = 'REMOVE_WORK_DETAILS';

const addCustomerDetails = (state, customer) => {};

const removeCustomerDetails = state => {};

const addWorkDetails = (state, work) => {};

const removeWorkDetails = (state, id) => {};

export default function quoteReducer(state, action) {
  switch (action.type) {
    case ADD_CUSTOMER_DETAILS:
      return addCustomerDetails(state, action.customer);
    case REMOVE_CUSTOMER_DETAILS:
      return removeCustomerDetails(state);
    case ADD_WORK_DETAILS:
      return addWorkDetails(state, action.work);
    case REMOVE_WORK_DETAILS:
      return removeWorkDetails(state, action.id);
    default:
      return state;
  }
}

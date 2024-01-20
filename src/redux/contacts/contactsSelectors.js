export const selectContacts = state => state.contacts.items;
export const selectLoadingContacts = state => state.contacts.isLoading;
export const selectErrorContacts = state => state.contacts.error;
export const selectContactEdit = state => state.contacts.ContactEdit;

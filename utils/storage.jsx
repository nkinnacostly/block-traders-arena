const storeItemToSessionStorage = ({ key, value }) => {
  sessionStorage.setItem(key, value ?? "");
};

const deleteSessionStorageItem = ({ key }) => {
  sessionStorage.removeItem(key);
};

const clearSessionStorage = () => {
  sessionStorage.clear();
};

const getSessionStorageItem = ({ key }) => {
  return sessionStorage.getItem(key);
};

export {
  storeItemToSessionStorage,
  deleteSessionStorageItem,
  clearSessionStorage,
  getSessionStorageItem,
};

interface StorageItem {
  key: string;
  value?: string;
}

const isBrowser = typeof window !== "undefined";

const storeItemToSessionStorage = ({ key, value }: StorageItem): void => {
  if (isBrowser) {
    sessionStorage.setItem(key, value ?? "");
  }
};

const deleteSessionStorageItem = ({ key }: { key: string }): void => {
  if (isBrowser) {
    sessionStorage.removeItem(key);
  }
};

const clearSessionStorage = (): void => {
  if (isBrowser) {
    sessionStorage.clear();
  }
};

const getSessionStorageItem = ({ key }: { key: string }): string | null => {
  if (isBrowser) {
    return sessionStorage.getItem(key);
  }
  return null;
};

export {
  storeItemToSessionStorage,
  deleteSessionStorageItem,
  clearSessionStorage,
  getSessionStorageItem,
};

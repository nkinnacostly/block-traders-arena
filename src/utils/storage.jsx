const Cookie = require("js-cookie");

const storage = {
  localStorage: {
    set: function (key, value) {
      localStorage?.setItem(key, JSON.stringify(value));
    },
    get: function (key) {
      return JSON.parse(localStorage?.getItem(key) || '""') || undefined;
    },
    remove: function (key) {
      localStorage?.removeItem(key);
    },
    has: function (key) {
      return localStorage.getItem(key) !== null;
    },
  },
  cookieStorage: {
    set: function (key, value, options) {
      Cookie?.set(key, JSON.stringify(value), options);
    },
    get: function (key) {
      return JSON.parse(Cookie?.get(key) || '""') || undefined;
    },
    remove: function (key, options) {
      Cookie.remove(key, options);
    },
    has: function (key) {
      return Boolean(Cookie.get(key));
    },
  },
  sessionStorage: {
    set: function (key, value) {
      sessionStorage?.setItem(key, JSON.stringify(value));
    },
    get: function (key) {
      return JSON.parse(sessionStorage?.getItem(key) || '""') || undefined;
    },
    remove: function (key) {
      sessionStorage?.removeItem(key);
    },
    has: function (key) {
      return sessionStorage.getItem(key) !== null;
    },
  },
};

module.exports = { storage };

function cacheToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function cacheToSession(key, value) {
  sessionStorage.setItem(key, value);
}

export default { cacheToLocal, cacheToSession };

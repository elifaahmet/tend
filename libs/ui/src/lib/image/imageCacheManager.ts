
export default class CacheManager {
  _caches = {};
  static _instance: CacheManager;

  static getInstance() {
    if (!this._instance) {
      this._instance = new CacheManager();
    }

    return this._instance;
  }

  add(src: string): void {
    if (this._caches[src]) {
      return;
    }

    this._caches[src] = false;
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;

      img.src = src;
    })
      .then(() => (this._caches[src] = true))
      .catch(() => (this._caches[src] = undefined));
  }

  clear() {
    delete this._caches;
  }
}

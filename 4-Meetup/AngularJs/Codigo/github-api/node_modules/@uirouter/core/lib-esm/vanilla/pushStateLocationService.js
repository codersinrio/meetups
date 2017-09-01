var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { splitQuery, splitHash } from "./utils";
import { BaseLocationServices } from "./baseLocationService";
/**
 * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
 *
 * Uses `history.pushState` and `history.replaceState`
 */
var PushStateLocationService = (function (_super) {
    __extends(PushStateLocationService, _super);
    function PushStateLocationService(router) {
        var _this = _super.call(this, router, true) || this;
        _this._config = router.urlService.config;
        window.addEventListener("popstate", _this._listener, false);
        return _this;
    }
    ;
    PushStateLocationService.prototype._get = function () {
        var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
        search = splitQuery(search)[1]; // strip ? if found
        hash = splitHash(hash)[1]; // strip # if found
        return pathname + (search ? "?" + search : "") + (hash ? "$" + search : "");
    };
    PushStateLocationService.prototype._set = function (state, title, url, replace) {
        var _a = this, _config = _a._config, _history = _a._history;
        var fullUrl = _config.baseHref() + url;
        if (replace) {
            _history.replaceState(state, title, fullUrl);
        }
        else {
            _history.pushState(state, title, fullUrl);
        }
    };
    PushStateLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        window.removeEventListener("popstate", this._listener);
    };
    return PushStateLocationService;
}(BaseLocationServices));
export { PushStateLocationService };
//# sourceMappingURL=pushStateLocationService.js.map
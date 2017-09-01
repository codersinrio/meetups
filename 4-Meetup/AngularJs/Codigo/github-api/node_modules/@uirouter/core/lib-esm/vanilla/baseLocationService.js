/**
 * @internalapi
 * @module vanilla
 */ /** */
import { parseUrl, getParams, buildUrl } from "./utils";
import { isDefined } from "../common/predicates";
import { extend, deregAll, removeFrom } from "../common/common";
/** A base `LocationServices` */
var BaseLocationServices = (function () {
    function BaseLocationServices(router, fireAfterUpdate) {
        var _this = this;
        this.fireAfterUpdate = fireAfterUpdate;
        this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
        this._listeners = [];
        this.hash = function () { return parseUrl(_this._get()).hash; };
        this.path = function () { return parseUrl(_this._get()).path; };
        this.search = function () { return getParams(parseUrl(_this._get()).search); };
        this._location = window && window.location;
        this._history = window && window.history;
    }
    BaseLocationServices.prototype.url = function (url, replace) {
        if (replace === void 0) { replace = true; }
        if (isDefined(url) && url !== this._get()) {
            this._set(null, null, url, replace);
            if (this.fireAfterUpdate) {
                var evt_1 = extend(new Event("locationchange"), { url: url });
                this._listeners.forEach(function (cb) { return cb(evt_1); });
            }
        }
        return buildUrl(this);
    };
    BaseLocationServices.prototype.onChange = function (cb) {
        var _this = this;
        this._listeners.push(cb);
        return function () { return removeFrom(_this._listeners, cb); };
    };
    BaseLocationServices.prototype.dispose = function (router) {
        deregAll(this._listeners);
    };
    return BaseLocationServices;
}());
export { BaseLocationServices };
//# sourceMappingURL=baseLocationService.js.map
"use strict";
/**
 * @internalapi
 * @module vanilla
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var predicates_1 = require("../common/predicates");
var common_1 = require("../common/common");
/** A base `LocationServices` */
var BaseLocationServices = (function () {
    function BaseLocationServices(router, fireAfterUpdate) {
        var _this = this;
        this.fireAfterUpdate = fireAfterUpdate;
        this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
        this._listeners = [];
        this.hash = function () { return utils_1.parseUrl(_this._get()).hash; };
        this.path = function () { return utils_1.parseUrl(_this._get()).path; };
        this.search = function () { return utils_1.getParams(utils_1.parseUrl(_this._get()).search); };
        this._location = window && window.location;
        this._history = window && window.history;
    }
    BaseLocationServices.prototype.url = function (url, replace) {
        if (replace === void 0) { replace = true; }
        if (predicates_1.isDefined(url) && url !== this._get()) {
            this._set(null, null, url, replace);
            if (this.fireAfterUpdate) {
                var evt_1 = common_1.extend(new Event("locationchange"), { url: url });
                this._listeners.forEach(function (cb) { return cb(evt_1); });
            }
        }
        return utils_1.buildUrl(this);
    };
    BaseLocationServices.prototype.onChange = function (cb) {
        var _this = this;
        this._listeners.push(cb);
        return function () { return common_1.removeFrom(_this._listeners, cb); };
    };
    BaseLocationServices.prototype.dispose = function (router) {
        common_1.deregAll(this._listeners);
    };
    return BaseLocationServices;
}());
exports.BaseLocationServices = BaseLocationServices;
//# sourceMappingURL=baseLocationService.js.map
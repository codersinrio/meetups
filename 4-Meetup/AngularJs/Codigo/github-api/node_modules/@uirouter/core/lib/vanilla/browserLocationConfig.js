"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internalapi
 * @module vanilla
 */
/** */
var predicates_1 = require("../common/predicates");
/** A `LocationConfig` that delegates to the browser's `location` object */
var BrowserLocationConfig = (function () {
    function BrowserLocationConfig(router, _isHtml5) {
        if (_isHtml5 === void 0) { _isHtml5 = false; }
        this._isHtml5 = _isHtml5;
        this._baseHref = undefined;
        this._hashPrefix = "";
    }
    BrowserLocationConfig.prototype.port = function () {
        if (location.port) {
            return Number(location.port);
        }
        return this.protocol() === 'https' ? 443 : 80;
    };
    BrowserLocationConfig.prototype.protocol = function () {
        return location.protocol.replace(/:/g, '');
    };
    BrowserLocationConfig.prototype.host = function () {
        return location.host;
    };
    BrowserLocationConfig.prototype.html5Mode = function () {
        return this._isHtml5;
    };
    BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
        return predicates_1.isDefined(newprefix) ? this._hashPrefix = newprefix : this._hashPrefix;
    };
    ;
    BrowserLocationConfig.prototype.baseHref = function (href) {
        return predicates_1.isDefined(href) ? this._baseHref = href : this._baseHref || this.applyDocumentBaseHref();
    };
    BrowserLocationConfig.prototype.applyDocumentBaseHref = function () {
        var baseTags = document.getElementsByTagName("base");
        return this._baseHref = baseTags.length ? baseTags[0].href.substr(location.origin.length) : "";
    };
    BrowserLocationConfig.prototype.dispose = function () { };
    return BrowserLocationConfig;
}());
exports.BrowserLocationConfig = BrowserLocationConfig;
//# sourceMappingURL=browserLocationConfig.js.map
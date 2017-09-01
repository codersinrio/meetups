/**
 * @internalapi
 * @module vanilla
 */
/** */
import { LocationConfig } from "../common/coreservices";
import { UIRouter } from "../router";
import { BaseLocationServices } from "./baseLocationService";
/**
 * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
 *
 * Uses `history.pushState` and `history.replaceState`
 */
export declare class PushStateLocationService extends BaseLocationServices {
    _config: LocationConfig;
    constructor(router: UIRouter);
    _get(): string;
    _set(state: any, title: string, url: string, replace: boolean): void;
    dispose(router: UIRouter): void;
}

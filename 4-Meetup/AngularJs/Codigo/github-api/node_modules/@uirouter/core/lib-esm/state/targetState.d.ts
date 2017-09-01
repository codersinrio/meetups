/**
 * @coreapi
 * @module state
 */ /** for typedoc */
import { StateDeclaration, StateOrName, TargetStateDef } from "./interface";
import { ParamsOrArray } from "../params/interface";
import { TransitionOptions } from "../transition/interface";
import { StateObject } from "./stateObject";
/**
 * Encapsulate the target (destination) state/params/options of a [[Transition]].
 *
 * This class is frequently used to redirect a transition to a new destination.
 *
 * See:
 *
 * - [[HookResult]]
 * - [[TransitionHookFn]]
 * - [[TransitionService.onStart]]
 *
 * To create a `TargetState`, use [[StateService.target]].
 *
 * ---
 *
 * This class wraps:
 *
 * 1) an identifier for a state
 * 2) a set of parameters
 * 3) and transition options
 * 4) the registered state object (the [[StateDeclaration]])
 *
 * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
 * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
 * The `TargetState` class normalizes those options.
 *
 * A `TargetState` may be valid (the state being targeted exists in the registry)
 * or invalid (the state being targeted is not registered).
 */
export declare class TargetState {
    private _identifier;
    private _definition;
    private _options;
    private _params;
    /**
     * The TargetState constructor
     *
     * Note: Do not construct a `TargetState` manually.
     * To create a `TargetState`, use the [[StateService.target]] factory method.
     *
     * @param _identifier An identifier for a state.
     *    Either a fully-qualified state name, or the object used to define the state.
     * @param _definition The internal state representation, if exists.
     * @param _params Parameters for the target state
     * @param _options Transition options.
     *
     * @internalapi
     */
    constructor(_identifier: StateOrName, _definition?: StateObject, _params?: ParamsOrArray, _options?: TransitionOptions);
    /** The name of the state this object targets */
    name(): String;
    /** The identifier used when creating this TargetState */
    identifier(): StateOrName;
    /** The target parameter values */
    params(): ParamsOrArray;
    /** The internal state object (if it was found) */
    $state(): StateObject;
    /** The internal state declaration (if it was found) */
    state(): StateDeclaration;
    /** The target options */
    options(): TransitionOptions;
    /** True if the target state was found */
    exists(): boolean;
    /** True if the object is valid */
    valid(): boolean;
    /** If the object is invalid, returns the reason why */
    error(): string;
    toString(): string;
    /** Returns true if the object has a state property that might be a state or state name */
    static isDef: (obj: any) => obj is TargetStateDef;
}

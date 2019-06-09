// Type definitions for react-redux 7.1
// Project: https://github.com/reduxjs/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>,
//                 Kenzie Togami <https://github.com/kenzierocks>,
//                 Curits Layne <https://github.com/clayne11>
//                 Frank Tan <https://github.com/tansongyang>
//                 Nicholas Boll <https://github.com/nicholasboll>
//                 Dibyo Majumdar <https://github.com/mdibyo>
//                 Thomas Charlat <https://github.com/kallikrein>
//                 Valentin Descamps <https://github.com/val1984>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Anatoli Papirovski <https://github.com/apapirovski>
//                 Boris Sergeyev <https://github.com/surgeboris>
//                 Søren Bruus Frank <https://github.com/soerenbf>
//                 Jonathan Ziller <https://github.com/mrwolfz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// Known Issue:
// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @connect() decorator in your code,
// you will see a bunch of errors from TypeScript. The current workaround is to use connect() as a function call on
// a separate line instead of as a decorator. Discussed in this github issue:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796

import {
    Component,
    ComponentClass,
    ComponentType,
    StatelessComponent,
    Context
} from "react";

import { Action, ActionCreator, AnyAction, Dispatch, Store } from "redux";

import hoistNonReactStatics = require("hoist-non-react-statics");

declare module "react-redux" {
    // the conditional type is to support TypeScript 3.0, which does not support mapping over tuples and arrays;
    // once the typings are updated to at least TypeScript 3.1, a simple mapped type can replace this mess
    export type ResolveArrayThunks<
        TDispatchProps extends ReadonlyArray<any>
        > = TDispatchProps extends [
            infer A1,
            infer A2,
            infer A3,
            infer A4,
            infer A5,
            infer A6,
            infer A7,
            infer A8,
            infer A9
        ]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>,
            HandleThunkActionCreator<A7>,
            HandleThunkActionCreator<A8>,
            HandleThunkActionCreator<A9>
        ]
        : TDispatchProps extends [
            infer A1,
            infer A2,
            infer A3,
            infer A4,
            infer A5,
            infer A6,
            infer A7,
            infer A8
        ]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>,
            HandleThunkActionCreator<A7>,
            HandleThunkActionCreator<A8>
        ]
        : TDispatchProps extends [
            infer A1,
            infer A2,
            infer A3,
            infer A4,
            infer A5,
            infer A6,
            infer A7
        ]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>,
            HandleThunkActionCreator<A7>
        ]
        : TDispatchProps extends [
            infer A1,
            infer A2,
            infer A3,
            infer A4,
            infer A5,
            infer A6
        ]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>
        ]
        : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4, infer A5]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>
        ]
        : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>
        ]
        : TDispatchProps extends [infer A1, infer A2, infer A3]
        ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>
        ]
        : TDispatchProps extends [infer A1, infer A2]
        ? [HandleThunkActionCreator<A1>, HandleThunkActionCreator<A2>]
        : TDispatchProps extends [infer A1]
        ? [HandleThunkActionCreator<A1>]
        : TDispatchProps extends Array<infer A>
        ? Array<HandleThunkActionCreator<A>>
        : TDispatchProps extends ReadonlyArray<infer A>
        ? ReadonlyArray<HandleThunkActionCreator<A>>
        : never;

    // tslint:disable:no-unnecessary-generics

    /**
     * A hook to bind action creators to the redux store's `dispatch` function
     * similar to how redux's `bindActionCreators` works.
     *
     * Supports passing a single action creator, an array/tuple of action
     * creators, or an object of action creators.
     *
     * Any arguments passed to the created callbacks are passed through to
     * your functions.
     *
     * This hook takes a dependencies array as an optional second argument,
     * which when passed ensures referential stability of the created callbacks.
     *
     * @param actions the action creators to bind
     * @param deps (optional) dependencies array to control referential stability
     *
     * @returns callback(s) bound to store's `dispatch` function
     *
     * @example
     *
     * import React from 'react'
     * import { useActions } from 'react-redux'
     *
     * const increaseCounter = (amount: number) => ({
     *   type: 'increase-counter',
     *   amount,
     * })
     *
     * export const CounterComponent = ({ value }: { value: number }) => {
     *   // supports passing an object of action creators
     *   const { increaseCounterByOne, increaseCounterByTwo } = useActions({
     *     increaseCounterByOne: () => increaseCounter(1),
     *     increaseCounterByTwo: () => increaseCounter(2),
     *   }, [])
     *
     *   // supports passing an array/tuple of action creators
     *   const [increaseCounterByThree, increaseCounterByFour] = useActions([
     *     () => increaseCounter(3),
     *     () => increaseCounter(4),
     *   ], [])
     *
     *   // supports passing a single action creator
     *   const increaseCounterBy5 = useActions(() => increaseCounter(5), [])
     *
     *   // passes through any arguments to the callback
     *   const increaseCounterByX = useActions(x => increaseCounter(x), [])
     *
     *   return (
     *     <div>
     *       <span>{value}</span>
     *       <button onClick={increaseCounterByOne}>Increase counter by 1</button>
     *     </div>
     *   )
     * }
     */
    export function useActions<
        T extends [
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>
        ]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>
        ]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>
        ]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>
        ]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>
        ]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>,
            ActionCreator<any>
        ]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [ActionCreator<any>, ActionCreator<any>, ActionCreator<any>]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<
        T extends [ActionCreator<any>, ActionCreator<any>]
    >(actions: T, deps?: ReadonlyArray<any>): ResolveArrayThunks<T>;
    export function useActions<T extends [ActionCreator<any>]>(
        actions: T,
        deps?: ReadonlyArray<any>
    ): ResolveArrayThunks<T>;
    export function useActions<T extends ReadonlyArray<ActionCreator<any>>>(
        actions: T,
        deps?: ReadonlyArray<any>
    ): ResolveArrayThunks<T>;
    export function useActions<T extends { [key: string]: ActionCreator<any> }>(
        actions: T,
        deps?: ReadonlyArray<any>
    ): ResolveThunks<T>;
    export function useActions<T extends ActionCreator<any>>(
        actions: T,
        deps?: ReadonlyArray<any>
    ): HandleThunkActionCreator<T>;

    /**
     * A hook to access the redux `dispatch` function. Note that in most cases where you
     * might want to use this hook it is recommended to use `useActions` instead to bind
     * action creators to the `dispatch` function.
     *
     * @returns redux store's `dispatch` function
     *
     * @example
     *
     * import React, { useCallback } from 'react'
     * import { useDispatch } from 'react-redux'
     *
     * export const CounterComponent = ({ value }) => {
     *   const dispatch = useDispatch()
     *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
     *   return (
     *     <div>
     *       <span>{value}</span>
     *       <button onClick={increaseCounter}>Increase counter</button>
     *     </div>
     *   )
     * }
     */
    export function useDispatch<A extends Action = any>(): Dispatch<A>;

    /**
     * A hook to access the redux store's state. This hook takes a selector function
     * as an argument. The selector is called with the store state.
     *
     * This hook takes a dependencies array as an optional second argument, which
     * when passed ensures referential stability of the selector (this is primarily
     * useful if you provide a selector that memoizes values).
     *
     * @param selector the selector function
     * @param deps (optional) dependencies array to control referential stability
     * of the selector
     *
     * @returns the selected state
     *
     * @example
     *
     * import React from 'react'
     * import { useSelector } from 'react-redux'
     * import { RootState } from './store'
     *
     * export const CounterComponent = () => {
     *   const counter = useSelector((state: RootState) => state.counter, [])
     *   return <div>{counter}</div>
     * }
     */
    export function useSelector<TState, TSelected>(
        selector: (state: TState) => TSelected,
        deps?: ReadonlyArray<any>
    ): TSelected;

    /**
     * A hook to access the redux store.
     *
     * @returns the redux store
     *
     * @example
     *
     * import React from 'react'
     * import { useStore } from 'react-redux'
     *
     * export const ExampleComponent = () => {
     *   const store = useStore()
     *   return <div>{store.getState()}</div>
     * }
     */
    export function useStore<S = any, A extends Action = AnyAction>(): Store<
        S,
        A
    >;

    // tslint:enable:no-unnecessary-generics
}

import * as pa from "pareto-lang-api"
import * as asyncAPI from "pareto-async-api"
import { ICache, Tuple2Result, Tuple3Result } from "./interface"

export type CreateCache = <T>(
    get: (key: string) => asyncAPI.IAsync<T>
) => ICache<T>

export type Dictionary = <T>(
    dictionary: pa.IReadonlyDictionary<asyncAPI.IAsync<T>>,
) => asyncAPI.IAsync<pa.IReadonlyDictionary<T>>

export type RawDictionary = <T>(
    $: { [key: string]: asyncAPI.IAsync<T> },
) => asyncAPI.IAsync<pa.IReadonlyDictionary<T>>

export type Array = <T>(
    array: asyncAPI.IAsync<T>[],
) => asyncAPI.IAsync<T[]>

export type Rewrite = <Out, In>(
    source: asyncAPI.IAsync<In>,
    rewrite: (source: In) => Out
) => asyncAPI.IAsync<Out>

export type Value = <T>(
    v: T
) => asyncAPI.IAsync<T>

export type Tuple2 = <T1, T2, Result>(
    cb1: asyncAPI.IAsync<T1>,
    cb2: asyncAPI.IAsync<T2>,
    map: ($: Tuple2Result<T1, T2>) => Result,
) => asyncAPI.IAsync<Result>

export type Tuple3 = <T1, T2, T3, Result> (
    cb1: asyncAPI.IAsync<T1>,
    cb2: asyncAPI.IAsync<T2>,
    cb3: asyncAPI.IAsync<T3>,
    map: ($: Tuple3Result<T1, T2, T3>) => Result,
) => asyncAPI.IAsync<Result>

export type API = {
    createCache: CreateCache
    dictionary: Dictionary,
    rawDictionary: RawDictionary,
    array: Array,
    rewrite: Rewrite,
    value: Value,
    tuple2: Tuple2,
    tuple3: Tuple3,
}
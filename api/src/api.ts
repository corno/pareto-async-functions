import * as pa from "pareto-api-core"
import { ICache, Tuple2Result, Tuple3Result } from "./interface"

export type CreateCache = <T>(
    get: (key: string) => pa.IAsync<T>
) => ICache<T>

export type Dictionary = <T>(
    dictionary: pa.IReadonlyDictionary<pa.IAsync<T>>,
) => pa.IAsync<pa.IReadonlyDictionary<T>>

export type RawDictionary = <T>(
    $: { [key: string]: pa.IAsync<T> },
) => pa.IAsync<pa.IReadonlyDictionary<T>>

export type Array = <T>(
    array: pa.IAsync<T>[],
) => pa.IAsync<T[]>

export type Rewrite = <Out, In>(
    source: pa.IAsync<In>,
    rewrite: (source: In) => Out
) => pa.IAsync<Out>

export type Value = <T>(
    v: T
) => pa.IAsync<T>

export type Tuple2 = <T1, T2, Result>(
    cb1: pa.IAsync<T1>,
    cb2: pa.IAsync<T2>,
    map: ($: Tuple2Result<T1, T2>) => Result,
) => pa.IAsync<Result>

export type Tuple3 = <T1, T2, T3, Result> (
    cb1: pa.IAsync<T1>,
    cb2: pa.IAsync<T2>,
    cb3: pa.IAsync<T3>,
    map: ($: Tuple3Result<T1, T2, T3>) => Result,
) => pa.IAsync<Result>

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
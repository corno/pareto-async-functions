import * as pl from "pareto-lib-core"

import { dictionaryImp } from "./dictionary"

export function rawDictionaryImp<T>(
    $: { [key: string]: pl.IAsync<T> },
): pl.IAsync<pl.IReadonlyDictionary<T>> {
    return dictionaryImp(
        pl.createDictionary($),
    )
}

export function rawDictionary() {
    return rawDictionaryImp
}
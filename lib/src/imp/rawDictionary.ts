import * as pa from "pareto-api-core"
import * as pl from "pareto-lib-core"

import { dictionaryImp } from "./dictionary"

export function rawDictionaryImp<T>(
    $: { [key: string]: pa.IAsync<T> },
): pa.IAsync<pa.IReadonlyDictionary<T>> {
    return dictionaryImp(
        pl.createDictionary($),
    )
}

export function rawDictionary() {
    return rawDictionaryImp
}
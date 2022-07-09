import * as pl from "pareto-lib-core"
import { createCounter } from "./createCounter"

export function dictionaryImp<T>(
    dictionary: pl.IReadonlyDictionary<pl.IAsync<T>>,
): pl.IAsync<pl.IReadonlyDictionary<T>> {
    return {
        execute: (cb) => {
            const temp: { [key: string]: T } = {}
            createCounter(
                (counter) => {
                    dictionary.toArray().forEach(($) => {
                        counter.increment()
                        $.value.execute((v) => {
                            temp[$.key] = v
                            counter.decrement()
                        })
                    })
                },
                () => {
                    cb(pl.createDictionary(temp))
                }
            )
        }
    }
}

export function dictionary() {
    return dictionaryImp

}
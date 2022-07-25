import * as pa from "pareto-api-core"
import * as pl from "pareto-lib-core"
import { createCounter } from "./createCounter"

export function dictionaryImp<T>(
    dictionary: pa.IReadonlyDictionary<pa.IAsync<T>>,
): pa.IAsync<pa.IReadonlyDictionary<T>> {
    return {
        execute: (cb) => {
            const temp: { [key: string]: T } = {}
            createCounter(
                (counter) => {
                    dictionary.forEach(() => true, ($, key) => {
                        counter.increment()
                        $.execute((v) => {
                            temp[key] = v
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
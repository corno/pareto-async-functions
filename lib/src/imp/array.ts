import * as pl from "pareto-lib-core"
import { createCounter } from "./createCounter"

export function array() {
    function array<T>(
        array: pl.IAsync<T>[],
    ): pl.IAsync<T[]> {
        return {
            execute: (cb) => {
                const temp: T[] = []
                createCounter(
                    (counter) => {
                        array.forEach((v) => {
                            counter.increment()
                            v.execute((v) => {
                                temp.push(v)
                                counter.decrement()
                            })
                        })
                    },
                    () => {
                        cb(temp)
                    }
                )
            }
        }
    }
    return array
}

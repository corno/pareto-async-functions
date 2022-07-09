import * as pa from "pareto-api-core"
import { createCounter } from "./createCounter"

export function array() {
    function array<T>(
        array: pa.IAsync<T>[],
    ): pa.IAsync<T[]> {
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

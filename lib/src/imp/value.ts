import * as pa from "pareto-api-core"


export function valueImp<T>(
    v: T
): pa.IAsync<T> {
    return {
        execute: (cb) => {
            cb(v)
        }
    }
}

export function value() {
    return valueImp
}
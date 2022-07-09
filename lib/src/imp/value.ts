import * as pl from "pareto-lib-core"


export function valueImp<T>(
    v: T
): pl.IAsync<T> {
    return {
        execute: (cb) => {
            cb(v)
        }
    }
}

export function value() {
    return valueImp
}
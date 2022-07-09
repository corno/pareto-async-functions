import { IAsync } from "pareto-api-core"

export type ICache<T> = {
    getEntry: (
        key: string,
    ) => IAsync<T>
}
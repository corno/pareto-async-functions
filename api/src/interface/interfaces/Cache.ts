import { IAsync } from "pareto-async-api"

export type ICache<T> = {
    getEntry: (
        key: string,
    ) => IAsync<T>
}
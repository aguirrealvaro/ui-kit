export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type VariantType = "primary" | "success" | "danger" | "warning" | "neutral";

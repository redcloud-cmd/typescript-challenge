type First<T extends any[]> =T extends [infer P, ...infer _]?P:never

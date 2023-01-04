// type TupleToObject<T extends readonly any[]> = any
// 自己尝试 type TupleToObject<T extends readonly any[],K extends keyof T> = {K:T[K]}
// type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P }

type TupleToObject<T extends readonly  any[]> = {[P in T[number] ] :P}
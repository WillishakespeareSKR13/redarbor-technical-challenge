export type Paths<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}`
    }[keyof T]
  : never

export type PathsExclude<T, O = any> = T extends object
  ? {
      [K in keyof T]: K extends O ? never : `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}`
    }[keyof T]
  : never

export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}`
    }[keyof T]
  : never

export type LeavesExclude<T, O = any> = T extends object
  ? {
      [K in keyof T]: K extends O
        ? never
        : `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}`
    }[keyof T]
  : never

export type NestedOmit<T, K extends PropertyKey> = {
  [P in keyof T as P extends K ? never : P]: NestedOmit<T[P], K extends `${Exclude<P, symbol>}.${infer R}` ? R : never>
}

export type NestedPick<T, K extends Paths<T>> = {
  [P in K]: P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? NestedPick<T[Key], Rest extends Paths<T[Key]> ? Rest : never>
      : never
    : P extends keyof T
      ? T[P]
      : never
}

export type PickByPath<TObject, TPath extends Paths<TObject>> = TPath extends `${infer TKey}.${infer TRest}`
  ? TKey extends keyof TObject
    ? PickByPath<TObject[TKey], TRest extends Paths<TObject[TKey]> ? TRest : never>
    : never
  : TPath extends keyof TObject
    ? TObject[TPath]
    : never

export type PickManyByPath<TObject, TPaths extends Paths<TObject>[]> = {
  [K in keyof TPaths]: PickByPath<TObject, TPaths[K]>
}

import { Paths, PickByPath } from "../types/paths"

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/
const charCodeOfDot = ".".charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  "[^.[\\]]+" +
    "|" +
    "\\[(?:" +
    "([^\"'][^[]*)" +
    "|" +
    "([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" +
    ")\\]" +
    "|" +
    "(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))",
  "g"
)
const MAX_MEMOIZE_SIZE = 500
const INFINITY = 1 / 0

export const getTag = (value: any) => {
  if (value == undefined) {
    return value === undefined ? "[object Undefined]" : "[object undefined]"
  }
  return Object.prototype.toString.call(value)
}

export const isSymbol = (value: any) => {
  const type = typeof value
  return type == "symbol" || (type === "object" && value != undefined && getTag(value) == "[object Symbol]")
}

export const toKey = (value: any) => {
  if (typeof value === "string" || isSymbol(value)) {
    return value
  }
  const result = `${value}`
  return result == "0" && 1 / value == -INFINITY ? "-0" : result
}

export const memoize = (func: any, resolver: any) => {
  if (typeof func !== "function" || (resolver != undefined && typeof resolver !== "function")) {
    throw new TypeError("Expected a function")
  }
  const memoized = function (this: any, ...args: any) {
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = memoized.cache

    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(this, args)
    memoized.cache = cache.set(key, result) || cache
    return result
  }
  memoized.cache = new (memoize.Cache || Map)()
  return memoized
}

memoize.Cache = Map

export const memoizeCapped = (func: any) => {
  const result = memoize(func, (key: any) => {
    const { cache } = result
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear()
    }
    return key
  })
  return result
}

export const stringToPath = memoizeCapped((string: any) => {
  const result = []
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push("")
  }
  string.replace(rePropName, (match: any, expression: any, quote: any, subString: any) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, "$1")
    } else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  return result
})

export const isKey = (value: any, object: any) => {
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  if (type === "number" || type === "boolean" || value == undefined || isSymbol(value)) {
    return true
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != undefined && value in Object(object))
}

export const castPath = (value: any, object: any) => {
  if (Array.isArray(value)) {
    return value
  }
  return isKey(value, object) ? [value] : stringToPath(value)
}

export const baseGet = (object: any, path: any) => {
  path = castPath(path, object)
  let index = 0
  const length = path.length
  while (object != undefined && index < length) {
    object = object[toKey(path[index++])]
  }
  return index && index == length ? object : undefined
}

export const get = <T, V>(object: T, path?: Paths<T>, defaultValue?: V) => {
  if (!object) return defaultValue ?? undefined
  const value = baseGet(object, path)
  return (value ?? defaultValue) as PickByPath<T, Paths<T>>
}

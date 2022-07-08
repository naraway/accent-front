type IsFunction<T> = T extends (...args: any[]) => any ? T : never;

const isFunction = <T extends {}>(value: T): value is IsFunction<T> => typeof value === 'function';

export default isFunction;

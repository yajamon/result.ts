export type Ok<T> = {
    value: T;
};

export type Err<E> = {
    error: E;
}

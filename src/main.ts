export type ResultOk<T> = {
  isError: false;
  value: T;
};

export type ResultErr<E> = {
  isError: true;
  error: E;
};

export type Result<T, E> = ResultOk<T> | ResultErr<E>;

export const ok: <T>(value: T) => ResultOk<T> = (v) => ({
  isError: false,
  value: v,
});
export const err: <E>(error: E) => ResultErr<E> = (e) => ({
  isError: true,
  error: e,
});

/** @deprecated Use `ok(result: T)` instead */
export const Ok = ok;
/** @deprecated Use `err(error: E)` instead */
export const Err = err;

export const unwrap: <T, E>(result: Result<T, E>) => T = (result) => {
  if (result.isError) {
    throw result.error;
  }
  return result.value;
};

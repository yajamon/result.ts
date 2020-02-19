# result.ts
Type definitions and simple functions inspired by Rust's Result.

## Install

```console
npm i -D @yajamon/result.ts
```

## Types

```ts
type ResultOk<T> = {
  isError: false;
  value: T;
};

type ResultErr<E> = {
  isError: true;
  error: E;
};

export type Result<T, E> = ResultOk<T> | ResultErr<E>;
```

## Usage

```ts
import { Result, Ok, Err } from "@yajamon/result.ts"

class Foo {
  static create(input:string): Result<Foo, Error> {
    if (validation(input)) {
      const foo = new Foo();
      // ...
      return Ok(foo);
    } else {
      return Err(new Error("error message"));
    }
  }

  // ...
}

function bar(input:string) {
  let foo = Foo.create(input);
  if (foo.isError === true) {
    // foo is ResultErr<Error>
    console.log(foo.error);
    return;
  }
  // foo is ResultOk<Foo>
  console.log(foo.value);
}
```

import { err, Err, Ok, ok, Result, unwrap } from "./main";

describe("Ok", () => {
  it("is return ResultOk", () => {
    const success = Ok("success") as Result<string, never>;
    if (success.isError === false) {
      // isError を確認することで、スコープ内の型を ResultからResultOkに推定できる
      expect(success.value).toEqual("success");
    } else {
      throw "Wrong!";
    }
  });
});

describe("Err", () => {
  it("is return ResultErr", () => {
    const error = Err("error") as Result<never, string>;
    if (error.isError) {
      // isError を確認することで、スコープ内の型を ResultからResultErrに推定できる
      expect(error.error).toEqual("error");
    } else {
      throw "Wrong!";
    }
  });
});

describe("ok", () => {
  it("is return ResultOk", () => {
    const success = ok("success") as Result<string, never>;
    if (success.isError === false) {
      // isError を確認することで、スコープ内の型を ResultからResultOkに推定できる
      expect(success.value).toEqual("success");
    } else {
      throw "Wrong!";
    }
  });
});

describe("err", () => {
  it("is return ResultErr", () => {
    const error = err("error") as Result<never, string>;
    if (error.isError) {
      // isError を確認することで、スコープ内の型を ResultからResultErrに推定できる
      expect(error.error).toEqual("error");
    } else {
      throw "Wrong!";
    }
  });
});

describe("unwrap()", () => {
  it("throw when ResultErr", () => {
    expect(() => {
      unwrap(Err("error"));
    }).toThrow("error");
  });

  it("return value when ResultOk", () => {
    const ok = Ok("success");
    expect(unwrap(ok)).toBe("success");
  });
});

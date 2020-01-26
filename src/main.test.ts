import { Ok, Result } from "./main";

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

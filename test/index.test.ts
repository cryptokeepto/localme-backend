import Captcha from "../src/index"

describe("captcha", () => {
  it("left operand should be 1", () => {
    const captcha: Captcha = new Captcha(1, 1, 1, 1)
    expect(captcha.getLeft()).toBe("1")
  })

  it("left operand should be 5", () => {
    const captcha: Captcha = new Captcha(1, 5, 1, 1)
    expect(captcha.getLeft()).toBe("5")
  })

  it("left operand should be 9", () => {
    const captcha: Captcha = new Captcha(1, 9, 1, 1)
    expect(captcha.getLeft()).toBe("9")
  })

  it("right operand should be one", () => {
    const captcha: Captcha = new Captcha(1, 1, 1, 1)
    expect(captcha.getRight()).toBe("One")
  })

  it("right operand should be five", () => {
    const captcha: Captcha = new Captcha(1, 1, 1, 5)
    expect(captcha.getRight()).toBe("Five")
  })

  it("right operand should be nine", () => {
    const captcha: Captcha = new Captcha(1, 1, 1, 9)
    expect(captcha.getRight()).toBe("Nine")
  })
})

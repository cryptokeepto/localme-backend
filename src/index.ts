class Captcha {
  private leftOperand: number
  private rightOperand: number

  constructor(
    _pattern: number,
    leftOperand: number,
    _operator: number,
    rightOperand: number,
  ) {
    this.leftOperand = leftOperand
    this.rightOperand = rightOperand
  }

  public getLeft(): string {
    return this.leftOperand.toString()
  }

  public getRight(): string {
    const numberOfText: string[] = [
      "One",
      "",
      "",
      "",
      "Five",
      "",
      "",
      "",
      "Nine",
    ]
    return numberOfText[this.rightOperand - 1]
  }
}

export default Captcha

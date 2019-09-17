class Captcha {
  private leftOperand: number
  private rightOperand: number
  private operator: number

  constructor(
    _pattern: number,
    leftOperand: number,
    operator: number,
    rightOperand: number,
  ) {
    this.leftOperand = leftOperand
    this.rightOperand = rightOperand
    this.operator = operator
  }

  public getLeft(): string {
    return this.leftOperand.toString()
  }

  public getRight(): string {
    const numberOfText: string[] = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ]
    return numberOfText[this.rightOperand - 1]
  }

  public getOperator(): string {
    const operatorSign: string[] = ["+", "-", "*", "/"]
    return operatorSign[this.operator - 1]
  }
}

export default Captcha

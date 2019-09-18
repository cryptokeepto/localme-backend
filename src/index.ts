class Captcha {
  private leftOperand: number
  private rightOperand: number
  private operator: number
  private pattern: number
  private numberOfText: string[] = [
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

  constructor(
    pattern: number,
    leftOperand: number,
    operator: number,
    rightOperand: number,
  ) {
    this.leftOperand = leftOperand
    this.rightOperand = rightOperand
    this.operator = operator
    this.pattern = pattern
  }

  public getLeft(): string {
    if (this.pattern === 1) return this.leftOperand.toString()
    return this.numberOfText[this.leftOperand - 1]
  }

  public getRight(): string {
    return this.numberOfText[this.rightOperand - 1]
  }

  public getOperator(): string {
    const operatorSign: string[] = ["+", "-", "*"]
    return operatorSign[this.operator - 1]
  }
}

export default Captcha

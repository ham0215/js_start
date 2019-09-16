function taxed(amount: number): number {
  return amount * 1.1
}

function fee(amount: number): number {
  return amount * 1.4
}

function price(amount: number): string {
  return `${fee(amount)}`
}

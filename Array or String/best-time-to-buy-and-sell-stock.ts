function maxProfit(prices: number[]): number {
  let cheapest = Infinity
  let max_profit = 0
  
  prices.forEach((price) => {
      if (price < cheapest) {
          cheapest = price
      } else {
          max_profit = Math.max(max_profit, price - cheapest)
      }
  })

  return max_profit
};

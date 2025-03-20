function maxProfitTwo(prices: number[]): number {
    let max_profit = 0

    for (let i=0; i<prices.length; i++) {
        if (i === 0) continue
        
        if (prices[i] > prices[i-1]) {
            max_profit += (prices[i] - prices[i-1])
        }
    }

    return max_profit
};

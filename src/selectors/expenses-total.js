export default (expenses) => {
    return expenses // Wooooooooooooow!!
        .map(expense => expense.amount)
        .reduce((sum, value) => sum + value, 0)
}

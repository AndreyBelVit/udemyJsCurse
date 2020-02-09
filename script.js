var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var a1 = prompt("Введите обязательную статью расходов в этом месяце");
var a2 = prompt("Во сколько обойдется?");
var b1 = prompt("Введите обязательную статью расходов в этом месяце");
var b2 = prompt("Во сколько обойдется?");

appData.expenses[a1] = a2;
appData.expenses[b1] = b2;

console.log(appData.moneyData / 30);
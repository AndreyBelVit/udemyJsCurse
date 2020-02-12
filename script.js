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


for (var i = 0; i < 2; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    }


}

console.log(appData.moneyData / 30);
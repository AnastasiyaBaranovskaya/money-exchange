// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let p =1;
    let money = {};
    if (currency <= 0){
        return money = {};
    }
    else if (currency > 10000){
        return money = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
        if (currency % h == 0){
            money.H = Math.floor(currency / h);
            return money;
        }
        else if (currency % q == 0){
            money.H = Math.floor(currency / h);
            money.Q = Math.floor((currency % h) / q);
            for (let key in money){
                if (money[key] == 0){
                        delete money[key];
                    }
                }
            return money;
        }
        else if (currency % d == 0){
            money.H = Math.floor(currency / h);
            money.Q = Math.floor((currency % h) / q);
            money.D = Math.floor(((currency % h) % q) / d);
            for (let key in money){
                if (money[key] == 0){
                        delete money[key];
                    }
                }
            return money;
        }
        else if (currency % n == 0){
            money.H = Math.floor(currency/h);
            money.Q = Math.floor((currency % h) / q);
            money.D = Math.floor(((currency % h) % q) / d);
            money.N = Math.floor((((currency % h) % q) % d) / n);
            for (let key in money){
                if (money[key] == 0){
                        delete money[key];
                    }
                }
            return money;
        }
        else {
            money.H = Math.floor(currency/h);
            money.Q = Math.floor((currency % h) / q);
            money.D = Math.floor(((currency % h) % q)  / d);
            money.N = Math.floor((((currency % h) % q) % d) / n);
            money.P = Math.floor(((((currency % h) % q) % d) % n) / p);
            for (let key in money){
            if (money[key] == 0){
                    delete money[key];
                }
            }
            return money;
        }
    }
}

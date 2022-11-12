const { Console } = require('@woowacourse/mission-utils');
const Input = require('./Input');

class App {
    play() {
        const input = new Input();
        input.start();
    }

    compare(winningNumbers, bonusNumber, randomNumbers) {
        let arr = [];

        randomNumbers.forEach((lotto) => {
            let count = 0;
            let current = lotto;

            for (let number of lotto) {
                winningNumbers.indexOf(number.toString()) > -1
                    ? count++
                    : (count += 0);
            }

            arr.push(count);

            if (count === 5 && current.findIndex((e) => e === bonusNumber)) {
                arr.pop();
                arr.push(6);
            }
            if (count === 6) {
                arr.pop();
                arr.push(7);
            }
        });

        return arr;
    }

    showResult(compareResult) {
        let sum = 0;
        const result = {
            '3': ['3개 일치 (5,000원) -', 0, 5000],
            '4': ['4개 일치 (50,000원) -', 0, 50000],
            '5': ['5개 일치 (1,500,000원) -', 0, 1500000],
            '6': ['5개 일치, 보너스 볼 일치 (30,000,000원) -', 0, 30000000],
            '7': ['6개 일치 (2,000,000,000원) -', 0, 200000000],
        };
        compareResult.forEach((number) => {
            if (+number >= 3) result[number.toString()][1]++;
        });

        for (let key in result) {
            if (result[key][1] > 0) sum += result[key][1] * result[key][2];
            Console.print(`${result[key][0]} ${result[key][1]}개`);
        }
        return sum;
    }

    calProfitRate(sum) {
        let result = parseFloat(((sum / +this.money) * 100).toFixed(2));
        return result;
    }
}

const app = new App();
app.play();

module.exports = App;

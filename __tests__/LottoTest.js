const Lotto = require('../src/Lotto');
const Exception = require('../src/Exception');

describe('로또 클래스 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow('[ERROR]');
    });

    // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow('[ERROR]');
    });

    // 아래에 추가 테스트 작성 가능
});

describe.only('예외 사항 테스트', () => {
    test('입력 금액이 천원 단위인지 확인', () => {
        expect(() => {
            const exception = new Exception();
            exception.isThousand('13200');
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new Exception();
            exception.isThousand('13010');
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new Exception();
            exception.isThousand('130100');
        }).toThrow('[ERROR]');
    });

    // test('로또 번호의 갯수가 6개인지 확인', () => {
    //     expect(() => {});
    // });
});

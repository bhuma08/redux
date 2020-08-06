import Counter from '../containers/counter';

describe('Counter', () => {
    let component

    beforeEach(() => {
        component = shallow(<Counter />);
    })

   
    test("initial count state of 0", () => {
        expect(component.state('count')).toBe(0)
    });
})

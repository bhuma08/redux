import Counter from '../containers/counter';

describe('Counter', () => {
    let component

    beforeEach(() => {
        component = shallow(<Counter />);
    })

   
    test("initial count state of 0", () => {
        expect(component.state('count')).toBe(0)
    });

    test("Increment increases state by 1", () => {
        const increaseBtn= component.find('#increment')
        increaseBtn.simulate('click')
        expect(component.state('count')).toBe(+1)
    });

    test("Increment decreases state by 1", () => {
        const increaseBtn= component.find('#decrement')
        increaseBtn.simulate('click')
        expect(component.state('count')).toBe(-1)
    });
})








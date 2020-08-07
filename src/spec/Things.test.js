import Things from '../containers/things';

describe('Things', () => {
    let component, addVeg, userInput

    beforeEach(() => {
        let list = ['hummus', 'celery', 'cucumber']
        addVeg = jest.fn()
        component = shallow(<Things.WrappedComponent things={list} addVeg={addVeg} />);
    });

    test("it renders a list item for each thing", () => {
        expect(component.find('li')).toHaveLength(3)
    });

    test("it should contain hummus", ()=>{
        expect(component.find('ul').text()).toContain('hummus')
    });

    test("user input", ()=>{
        userInput = component.find("#veg")
        userInput.simulate("change", {target: {value: "hello"}});
        expect(component.state("userInput")).toBe("hello")
    })

    // test('testing handleChange func' () => {

    // })

})






;
import App from '../App.js';

describe('App', () => {
    let component
    // let component2
    beforeEach(() => {
        component = shallow(<App />);
    })

    test("it renders", () => {
        expect(component.find('#app')).toHaveLength(1);
    });

    // test('testing if h1 says welcome', () =>{
    //     expect(component.find('h1').text()).toEqual('Welcome')
    // })
})



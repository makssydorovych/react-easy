import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducer should change value to opposite', () => {
//data
const state: StateType = {
    collapsed: false
}
    //action
    const newState =  reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)

}
)
test('reducer should error', () => {
//data
        const state: StateType = {
            collapsed: true
        }
        //action


        //expectation
        expect(() =>{
            reducer(state, {type: "fake_TYPE"})
        }).toThrowError();

    }
)


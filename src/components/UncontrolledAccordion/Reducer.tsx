export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
type ActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) : StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT :
            const stateCopy = {...state};
            stateCopy.collapsed = !state.collapsed;
            return stateCopy

        default:
            return state;
    }
}
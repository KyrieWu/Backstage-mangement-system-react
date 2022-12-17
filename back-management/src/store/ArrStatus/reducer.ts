import handleArr from "./index";

const defaultState = {
    // 解构的写法
    ...handleArr.state
}

let reducer = (state = defaultState, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))

    for (let key in handleArr.actionNames) {
        if (action.type === handleArr.actionNames[key]) {
            handleArr.actions[handleArr.actionNames[key]](newState, action);
        }
    }
    return newState
}

export default reducer
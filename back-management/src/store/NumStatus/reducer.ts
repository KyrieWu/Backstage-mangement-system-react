import handleNum from "./index";

const defaultState = {
    // 解构的写法
    ...handleNum.state
}

let reducer = (state = defaultState, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))
    // 把case后面的值做成对象,actionsNames
    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions.add1(newState, action);
    //         break;
    //     case handleNum.add2:
    //         handleNum.actions.add2(newState, action);
    //         break;
    //     default:
    //         break;
    // }
    // 拿着 action.type 和actionNames进行每一项对比,如果是相等，就调用
    for (let key in handleNum.actionNames) {
        // 判断是不是相等
        if (action.type === handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState, action);
        }
    }
    // 这样写就达到每一次写一个方法，就不需要手动添加case
    return newState
}

export default reducer
/**
 * 创建一个store
 */
function createStore(reducer, initeState,) {

    let currentReducer = reducer;
    let currentState = initeState;
    // params: action接受一个action
    // 
    function dispatch(action){

        currentReducer = currentReducer(currentState, action);

        return action;

    }

    return {
        dispatch,
        getState,
    }
}


// bindActionCreators其实就是把多个action还是用dispatch调用

function bindActionCreators(actionCreators, dispatch) {

    return {
        actionCreators: dispatch(actionCreators),
    }

}




/**
 * 
 * 
 * @param {any} reducers {
 *      defaultState,                   // key 的名称和 default export 的名称一样
        firstState : firstNamedReducer, // key 的名字是单独取的，而不是变量的名字
        secondState,                    // key 的名称和已经被重命名过的 exp
 * }
 */
function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};

    // 这段代码作用是都转化成{key: value}形式
    for(var i = 0;i<reducerKeys.lengthl; i++) {
        var key = reducerKeys[i];
        if(typeof reducerKeys[key] === 'function') {
            finalReducers[key] = reducers[key]; 
        }
    }

    var finalReducerKeys = Object.keys(finalReducers);

    // 
    return function combination(state = {}, action) {
        var hasChanged = false;
        var nextState = {};
        for(var i =0; i<finalReducerKeys.length; i++) {
            var key =finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        return hasChanged ? nextState : state;
    }
}
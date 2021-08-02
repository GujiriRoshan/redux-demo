const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE ="BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
    return { type:BUY_CAKE}
}
function buyIcecream (){
    return {type:BUY_ICECREAM}
}

//(previous state,action)=>new state

// const initialState ={
//     numOfCakes:10
// }
const  initialCakeState ={numOfCakes :10}
const  initialIcecreamState ={numOfIcecream:20}

// const reducer =(state=initialState,action)=>{
//     switch (action.type) {
//         case BUY_CAKE:
//         return { ...state,numOfCakes :state.numOfCakes-1};
//         default:return state
//     }
// }

const  cakeReducer =(state=initialCakeState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
        return { ...state,numOfCakes :state.numOfCakes-1};
        default:return state
    }
}
const  icecreamReducer =(state=initialIcecreamState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
        return { ...state,numOfIcecream :state.numOfIcecream-1};
        default:return state
    }
}

const store= createStore(reducer)
console.log('Initial state',store.getState());
const unsubscribe=store.subscribe(()=>{console.log('Update state',store.getState())});
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()


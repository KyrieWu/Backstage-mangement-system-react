// import store from "@/store";

// ts中提供了RetuenType 用来获取函数类型的返回值
type RootType = ReturnType<typeof import('@/store').getState>;
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function
}
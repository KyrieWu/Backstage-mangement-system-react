import { useDispatch, useSelector } from "react-redux";
import numStatus from "@/store/NumStatus";

export default function Page1() {
  //获取仓库数据
  const { num, sarr } = useSelector((state: RootType) => ({
    num: state.handleNum.num,
    sarr: state.handleArr.sarr,
  }));

  // 通过useDispath修改仓库
  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({ type: "add3", val: 20 });
  };
  // 异步写法
  const changeNum2 = () => {
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: "add1" });
    //   }, 1000);
    // });
    dispatch(numStatus.asyncActions.asyncadd1);
  };
  const changeSarr = () => {
    dispatch({ type: "sarrpush", val: 40 });
  };
  return (
    <div>
      <p>这是page1页面内容</p>
      <p>{num}</p>
      <p>{sarr}</p>
      <button onClick={changeNum}>同步按钮</button>
      <button onClick={changeNum2}>异步按钮</button>
      <button onClick={changeSarr}>按钮</button>
    </div>
  );
}

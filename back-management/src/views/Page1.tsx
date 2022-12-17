import { useDispatch, useSelector } from "react-redux";

export default function Page1() {
  //获取仓库数据
  const { num } = useSelector((state: RootType) => ({
    num: state.num,
  }));

  // 通过useDispath修改仓库
  const dispatch = useDispatch();
  const changeNum = () => {
    dispatch({ type: "add2", val: 10 });
  };
  return (
    <div>
      <p>这是page1页面内容</p>
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
    </div>
  );
}

/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2022-05-29 13:38:29
 * @LastEditTime: 2022-05-29 13:39:04
 * @LastEditors: wangXiaoMing
 */
const Home = () => {
  return <div>这是home</div>;
};

const Group = () => {
  return <div>这是Group</div>;
};

const About = () => {
  return <div>这是about</div>;
};

//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/group",
    component: Group,
  },
  {
    path: "/about",
    component: About,
  },
];

//将路由表数组导出
export default routes;

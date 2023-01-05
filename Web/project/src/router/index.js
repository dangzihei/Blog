// 1.设置路由的模式:历史模式或者哈希模式：BrowserRouter
// 2.设置页面的配置信息的组件,Router组件等同于vue当中路由页面对象;
// as 生成一个别名 ,别名为Router
//  Routes 组件包括所有Route组件 类似vue数组结构，包含所有的单个组件对象
// NavLink 跳转的组件 类似与vue中router link
// 没有routerVIew ,react中吧路由文件index.js导出来就是路由的出口容器,类似与router-view
import { BrowserRouter as Router,Route,Routes,useLocation ,Navigate} from "react-router-dom";
import Manage from '../pages/Manage/manage.jsx';
import Main from "../pages/Main/main.jsx";
import Login from "../pages/Login/login";
import ArticleManage from '../pages/Article/Article.jsx'
import TagManage from '../pages/Tag/Tag.jsx'
import Show from '../pages/Show/Show.jsx'
import Publish from "../pages/Publish/Publish.jsx";
// 导出路由组件 作为页面的出口组件
export default function Index(){
    // console.log(useLocation(),'111')
    return (
        <div>
            <Routes>
                {/* path：路由地址  element对应的式路由页面*/}
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/publish" element={<Publish/>}></Route>
                <Route path="/show" element={<Show/>}></Route>
                <Route path="/manage" element={<Manage/>}>
                    <Route index element={<ArticleManage/>}></Route>
                    <Route path="tag" element={<TagManage/>}></Route>

                </Route>

                {/* 404界面，所有的路由界面都能匹配的界面 */}
                <Route path="*" element={<Navigate to="/" replace/>}></Route>
            </Routes>
        </div>
    )
};
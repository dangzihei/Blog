import axios from 'axios';

// 登录请求
export const LoginFun = (params)=>{
    console.log(params)
    return axios.get('http://127.0.0.1:5000/login',{
        params
    }).then(res => {
        return res;
    }).catch(err => console.log(err));
}

// 修改密码
export const changeAccOrPwd = (params)=>{
    return axios.post('http://127.0.0.1:5000/login',params).then(res => {
        return res;
    }).catch(err => console.log(err));
}


// 发布新文章 time title content type introduce tag
export const faBu = () => {
    console.log('fabu执行了')
    axios.post('http://127.0.0.1:5000/article', {
        time: '今天',
        title: '第er个文章',
        content:'html',
        type:'vue2',
        introduce:'这个是介绍',
        tag:['1','2']
    }).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
}

// 删除 title
export const del = () => {
    console.log('del执行了')
    axios.delete('http://127.0.0.1:5000/article', {
        params:{
            title: '第一个文章'
        }
    }).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
}

// 获取全部
export const getAllArticle = () => {
    console.log('getAllArticle执行了')
    return axios.get('http://127.0.0.1:5000/article').then(res => {
        return res;
    }).catch(err => console.log(err));
}

// 根据id 进行修改
export const changeArticle = () => {
    console.log('changeArticle执行了')
    axios.post('http://127.0.0.1:5000/newArticle',{
        id:1,
        content:'这是修改之后的内容哦uu',
        title:'更改后标题uu'
    }).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
}

// 搜索  
export const searchArticle = () => {
    console.log('searchArticle执行了')
    axios.get('http://127.0.0.1:5000/search',{
        params:{
            search: 'vue'
        }
    }).then(res => {
        console.log(res)
    }).catch(err => console.log(err));
}
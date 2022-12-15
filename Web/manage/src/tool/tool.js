import axios from 'axios';

export const faBu = () =>{
    console.log('fabu执行了')
    // axios({
    //     method: 'post',
    //     url: 'http://127.0.0.1:5000/newArticle',
    //     params: {
    //         time:'Fred',
    //         lastName: 'jjj'
    //       },
    // }).then(res=>{
    //     console.log(res)
    // }).catch(err=>console.log(err));
    axios.post('http://127.0.0.1:5000/newArticle',{time:'Fred',
    lastName: 'jjj'}).then(res=>{
        console.log(res)
    }).catch(err=>console.log(err));
}

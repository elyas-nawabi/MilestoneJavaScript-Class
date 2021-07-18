// const names = ['jan','khan'];
// let text = "";
// for (let index = 0; index < names.length; index++) {
//     let text = `<div>${names[index]}</div>`;
//   console.log(text);

// }

// const calcArea = function(radius) {
//    return 3.14 * radius **2;  
// };

// const calcArea =radius => 3.14 * radius**2;
const ul = document.querySelector('.mylist');
let people = ['mario','jan','khan','mando'];
let html = ``;
people.forEach( function(index, person) {
    html += `<li>${person}</li>`;
});
 ul.innerHTML = html;

 console.log(Math);

 let blog = {
    name : 'jane',
    blogs : [
        {title:"why mac",likes:30}
        ,
        {title:"why dell",likes:40}
        ],
    login : function(params) {
        console.log('hello'+params);
    },
    logblogs(){
        this.blogs.forEach( blog =>{
             console.log(blog.title+"   "+blog.likes);
        });

    }
 };

 blog.logblogs();

 const paras = document.querySelectorAll('p');
 paras.forEach( para =>
    {
    if(para.textContent.includes('error'))
    {
        para.classList.add('error');
    }
    }
 );
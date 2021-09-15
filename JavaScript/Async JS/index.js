const fakeRequest = (url) => {
     return new Promise((resolve, reject) => {
        const rand =Math.random();
        setTimeout(() => {
            if(rand<0.7){
                resolve('your fake data')
            }
            reject('request error!')
        }, 1000)
    })
}


fakeRequest('aman.com')
    .then((data)=>{
        console.log('Hurray!!!');
        console.log(data);
    })
    .catch((err) => {
        console.log('Ohh no',err) 
    })

    const H1 = document.querySelector('h1');

    setTimeout(() => {
        H1.innerText = 'Async Function';
    },2000)


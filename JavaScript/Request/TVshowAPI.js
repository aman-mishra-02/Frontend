const form = document.querySelector('#searchForm')
form.addEventListener('submit', async e=>{
    e.preventDefault();
    console.log(form.elements.query.value);
    const SearchTerm = form.elements.query.value;
    const config={params:{q: SearchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`,config)
    ResultIMG(res.data)
    form.elements.query.value = ''
})

const ResultIMG = (shows) => {
    for(let show of shows){
        if(show.show.image){
            const link = show.show.image.medium;
            const img = document.createElement('img');
            img.src = link;
            document.body.append(img)
        }
    }
}

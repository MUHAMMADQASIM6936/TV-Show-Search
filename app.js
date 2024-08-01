const form=document.querySelector('#SearchForm');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const inputvalue=form.elements.query.value
    console.log(inputvalue);
   const output= await axios.get(`https://api.tvmaze.com/search/shows?q=${inputvalue}`)
    console.log(output.data[0].show.image.medium);
    data(output.data);
})


function data(shows){
  for(let result of shows){
    if(result.show.image){
    const img=document.createElement('IMG');
    img.src=result.show.image.medium;
    document.body.append(img);
    }
  }
}

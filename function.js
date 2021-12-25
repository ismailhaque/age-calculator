function ageCal(name,year) {
    let date = new Date();
    age = date.getFullYear() - year;
    let month = date.getMonth();
    console.log(month);
    
    return`<p class="alert alert-success">welcome ${ name } you are ${ age } years old</p>`;
};
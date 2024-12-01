function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

function search(){

    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}



async function getResponce() {
    
    console.log("Ненавижу долбаный жабаскрипт")
    
    let responce = await fetch("flowers.json", {
        mode: 'no-cors'
    })


    console.log(responce)
    let content = await responce.json()
    console.log(content)
    //content = JSON.parse(content)
    content = content.splice(0, 11)
    content.sort()
    console.log(content)
    let key

    content_price=content.sort((a, b) => a.price - b.price);

    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
   //let word = 'search'.toLowerCase();
    content_filter= content_price.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")
    //node_for_insert.innerHTML='';
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <div class="flower-card">
                    <li style="width: 260px" class="d-flex flex-column m-1 p-1 border bg-body">
                    <img style="width: 260px" class="align-self-center" src=${content_filter[key].img}>
                    <h3 class="flower-caption">${content_filter[key].title}</h3>
                    <p>Цена ${content_filter[key].price} р.</p>
                    <p>Добавить <input class="w-25" type="text" value="0" name="check"></p>
                    </li>
                </div>        `
            }

}
async function getResponce1() {
    
    console.log("Ненавижу долбаный жабаскрипт 111")
    
    let responce = await fetch("flowers.json", {
        mode: 'no-cors'
    })

    console.log(responce)
    let content = await responce.json()
    console.log(content)
    //content = JSON.parse(content)
    content = content.splice(0, 11)
    content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/

    // sort by name
    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });


    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
   //let word = 'search'.toLowerCase();
    content_filter= content_title.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    //node_for_insert.innerHTML='';
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <div class="flower-card">
                    <li style="width: 260px" class="d-flex flex-column m-1 p-1 border bg-body">
                    <img style="width: 260px" class="align-self-center" src=${content_filter[key].img}>
                    <h3 class="flower-caption">${content_filter[key].title}</h3>
                    <p>Цена ${content_filter[key].price} р.</p>
                    <p>Добавить <input class="w-25" type="text" value="0" name="check"></p>
                    </li>
                </div>        `
            }

}

sort()

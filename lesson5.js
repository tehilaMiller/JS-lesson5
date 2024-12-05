for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100;    
}

function sortByDiskName() {
    let n=document.getElementById("name").value
    let cat=catalog.filter(item=>item.title.includes(n))
    printTable(cat)
}

function sortByname() {
    let countries=catalog.map(item=>item.country)
    countries=countries.filter((item,index)=>!countries.includes(item,index+1))
    countries=countries.sort()
    countries= countries.map(item=> "<option>"+item+"</option>")
    document.getElementById("sel").innerHTML=countries
}
function showByCountry(event) {
    document.querySelector("#show").innerHTML=""
    let catalog1=catalog.filter(item=>item.country=== event.target.value)
   // for (let i = 0; i < catalog1.length; i++) {
 //       document.querySelector("#show").innerHTML+=catalog1[i].title+"</br>"
   // }
   printTable(catalog1)
}
sortByname()
function sortByYear(){
    document.querySelector("#show").innerHTML=""
    let f=document.getElementById("from").value
    let t=document.getElementById("to").value
    let catalog2=catalog.find(item=>item.year>=f&&item.year<=t)
    document.querySelector("#show").innerHTML+=catalog2.title
}
function printTable(arr) {
    document.querySelector("#show").innerHTML=""
    const x=arr.map(item=>`<table> <tr> 
    <td>${item.title}</td> 
    <td>${item.artist}</td> 
    <td>${item.country}</td>
    <td>${item.company}</td>
    <td>${item.price}</td> 
    <td>${item.year}</td>
    <td>${item.id}</td>
    </tr></table>`);
    document.querySelector("#show").innerHTML+=x.join('')   
}
function addNewDisk() {
    let title=document.getElementById("title").value
    let artist=document.getElementById("artist").value
    let country=document.getElementById("country").value
    let company=document.getElementById("company").value
    let price=document.getElementById("price").value
    let year=document.getElementById("year").value
    let id=catalog.length+100
    catalog.push({title,artist,country,company,price,year,id})    
    console.log(catalog)
}
function removeDisk() {
    let x=document.getElementById("remove").value
    let i=catalog.findIndex(item=>item.id===x)
    catalog.splice(i,1)
    console.log(catalog) ;
}
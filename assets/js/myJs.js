

/* const successfulLookup = (position) => {
    const {latitude , longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=3c128c19ac354a338bfae789dc578629`)
    .then(console.log)
}
navigator.geolocation.getCurrentPosition(p => {
    console.log(p)
},console.log) */

/* edit.onclick = () => {
    navigator.clipboard.writeText(ed.value).then(()=>{
        console.log("successful")
    })
} */
function sendData(e) {
    const searchSec = document.getElementById("search-sec")
    let match = e.value.match(/^[a-zA-Z]*/)
    let match2 = e.value.match(/\s*/)
    if (match2[0] === e.value){
        searchSec.innerHTML =""
        return
    }
    if(match[0] === e.value){
        fetch("getproducts",{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({payload:e.value})
    }).then(res => res.json()).then(data => {
        let payload = data.payload
        searchSec.innerHTML = ""
        if(payload.length < 1){
            searchSec.innerHTML = `<p>sorry. Nothing Found</p>`
            return
        }
        payload.forEach((item,index) => {
            if(index > -1){ searchSec.innerHTML += "<ul>"
            let url = (item.urls).substring(1)
            searchSec.innerHTML += `<li><a href="/products/?id=${item._id}&url=https://amazon.com${item.urls}">${item.name}</a></li>`
            
        }});
        return
    })
    }
    
}

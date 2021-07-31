const list_div = document.getElementById("comboBox__icon__list__div");
const btn = document.getElementById("comboBox__icon__btn__select");

let langArray = [];
vodiapicker = document.querySelectorAll("#comboBox__icon__select option");
vodiapicker.forEach(option =>{
    let icon = option.getAttribute("data-icon");
    let text = option.innerHTML;
    let value = option.getAttribute("value");
    let item = `<li><span value="${value}" class="${icon}"></span><span>${text}</span></li>`;
    langArray.push(item);
})

langArray.forEach(option =>{
    document.getElementById("comboBox__icon__list").innerHTML += option;
})

btn.innerHTML += langArray[0];
btn.setAttribute("value","en");

document.querySelectorAll("#comboBox__icon__list li").forEach(li =>{
    li.addEventListener("click",(e)=>{
        let icon = li.firstElementChild.getAttribute("class");
        let value = li.firstElementChild.getAttribute("value");
        let text = li.children[1].innerHTML;
        let item = `<li><span value="${value}" class="${icon}"></span><span>${text}</span></li>`;
        let arrow = btn.children[0];
        document.getElementById("comboBox__icon__select").value = value;
        document.getElementById("comboBox__icon__select").dispatchEvent(new Event("change"));
        btn.innerHTML = item;
        btn.insertBefore(arrow,btn.firstChild)
        btn.setAttribute("value",value);
        if (list_div.style.display === "") {
            list_div.style.display = "none";
        } else {
            list_div.style.display = "";
        }
    })
},false)

btn.addEventListener("click",()=>{
    if (list_div.style.display === "") {
        list_div.style.display = "block";
    } else {
        list_div.style.display = "";
    }
})

// let sessionLang = localStorage.getItem('lang');
// if (sessionLang){
//     let langIndex = langArray.indexOf(sessionLang);
//     $('.btn-select').html(langArray[langIndex]);
//     $('.btn-select').attr('value', sessionLang);
// } else {
//     var langIndex = langArray.indexOf('ch');
//     console.log(langIndex);
//     $('.btn-select').html(langArray[langIndex]);
//     //$('.btn-select').attr('value', 'en');
// }
//


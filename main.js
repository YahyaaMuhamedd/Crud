// ()  $  !
let title = document.getElementById("title");
let price = document.getElementById("price");
let texas = document.getElementById("texas");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let totalPrice = document.getElementById("totalPrice");
let categoery = document.getElementById("categoery");
let count = document.getElementById("count");
let create = document.getElementById("create");
let search = document.getElementById("search");
let mood = 'create';
let updates;
function yahya() {
    if (price.value != '') {
        let result = (+price.value + +texas.value + +ads.value)
            - +discount.value;
        totalPrice.innerHTML = result;
    } else {
        totalPrice.innerHTML = '';
    }
}

yahya()


let DataPro;

if (localStorage.getItem("product") === null) {
    DataPro = [];
} else {
    DataPro = JSON.parse(localStorage.getItem("product"));
}

create.addEventListener("click", function (e) {
    e.preventDefault()
    let NewPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        texas: texas.value,
        ads: ads.value,
        discount: discount.value,
        totalPrice: totalPrice.innerHTML,
        categoery: categoery.value.toLowerCase(),
        count: count.value,
    }
    if (mood === 'create') {

        if (NewPro.count > 1) {
            for (let i = 0; i < NewPro.count; i++) {
                DataPro.push(NewPro);
            }
        } else {

        }
    } else {
        DataPro[updates] = NewPro;
    }


    localStorage.setItem('product', JSON.stringify(DataPro))

    console.log(DataPro)
    ShowData()
    ClearData()

})


function ClearData() {
    title.value = '';
    price.value = '';
    texas.value = '';
    ads.value = '';
    discount.value = '';
    totalPrice.innerHTML = '';
    categoery.value = '';
    count.value = '';

}

function ShowData() {

    yahya()
    let table = '';
    for (let i = 0; i < DataPro.length; i++) {
        {

            table +=
                `
            <tr>
            <td>${[i + 1]}</td>
            <td>${DataPro[i].title}</td>
            <td>${DataPro[i].price}</td>
            <td>${DataPro[i].texas}</td>
            <td>${DataPro[i].ads}</td>
            <td>${DataPro[i].discount}</td>
            <td>${DataPro[i].totalPrice}</td>
            <td>${DataPro[i].categoery}</td>
            <td>${DataPro[i].count}</td>
            <td ><button id="update" onclick="UpdateData(${i})" >update</button></td>
            <td ><button id="delete" onclick="deletedata(${i})">Delete</button></td>
            </tr>
            
            `
        }
    }
    document.getElementById('tbody').innerHTML = table;

    let BtnDelete = document.getElementById("counter");
    BtnDelete.innerText = `(${DataPro.length})`;

}
ShowData()

function deletedata(i) {

    DataPro.splice(i, 1);
    localStorage.product = JSON.stringify(DataPro);
    ShowData()

}


function DeleteallFunc() {

    DataPro = [];
    localStorage.clear();
    ShowData()

}


let searchmood = 'title';
function Searchmood(id) {
    let search = document.getElementById("search")
    if (id == "SearchByTitle") {
        searchmood = 'title'
        search.placeholder = "Search by title..."
    } else {
        searchmood = 'categoery'
        search.placeholder = "Search by Categoery..."
    }
    search.focus()
     search.value = '';
    ShowData();
}



function SearchByTitle(value) {
    let table;
    if (searchmood == 'title') {

        for (let i = 0; i < DataPro.length; i++) {
            if (DataPro[i].title.includes(value.toLowerCase())) {
                table += `
                             <tr>
                     <td>${[i + 1]}</td>
                     <td>${DataPro[i].title}</td>
                     <td>${DataPro[i].price}</td>
                     <td>${DataPro[i].texas}</td>
                     <td>${DataPro[i].ads}</td>
                     <td>${DataPro[i].discount}</td>
                     <td>${DataPro[i].totalPrice}</td>
                     <td>${DataPro[i].categoery}</td>
                     <td>${DataPro[i].count}</td>
                     <td ><button id="update" onclick="UpdateData(${i})" >update</button></td>
                     <td ><button id="delete" onclick="deletedata(${i})">Delete</button></td>
                     </tr>

                     `
                console.log('a7a')
            }




        }

    }
    else {
        for (let i = 0; i < DataPro.length; i++) {
            if (DataPro[i].categoery.includes(value.toLowerCase())) {
                table += `
                             <tr>
                     <td>${[i + 1]}</td>
                     <td>${DataPro[i].title}</td>
                     <td>${DataPro[i].price}</td>
                     <td>${DataPro[i].texas}</td>
                     <td>${DataPro[i].ads}</td>
                     <td>${DataPro[i].discount}</td>
                     <td>${DataPro[i].totalPrice}</td>
                     <td>${DataPro[i].categoery}</td>
                     <td>${DataPro[i].count}</td>
                     <td ><button id="update" onclick="UpdateData(${i})" >update</button></td>
                     <td ><button id="delete" onclick="deletedata(${i})">Delete</button></td>
                     </tr>

                     `
                console.log('a7a')
            }




        }
    }



    document.getElementById('tbody').innerHTML = table;

}
function UpdateData(i) {
    title.value = DataPro[i].title;
    price.value = DataPro[i].price;
    texas.value = DataPro[i].texas;
    ads.value = DataPro[i].ads;
    discount.value = DataPro[i].discount;
    categoery.value = DataPro[i].categoery;
    count.style.display = 'none';
    count.value = DataPro[i] = 1;
    create.innerHTML = "Update";
    yahya()
    updates = i;
    mood = 'update+54655656';
    scroll({
        top: 0,
        behavior: 'smooth',
    })

}
create.onclick = function () {
    if (create.innerHTML === "Update") {
        create.innerHTML = "Create";
        count.style.display = 'block';
        mood = 'create';
    } else {
        mood = 'create';
    }
}

// End Crud
let element = document.querySelectorAll(".change-color li")
let classlist = [];

for (let i = 0; i < element.length; i++) {
    classlist.push(element[i].getAttribute("data-color"))
    element[i].addEventListener("click", function () {
        // add class list for h1 when onclick of any data-color 
        let color = this.getAttribute("data-color");
        console.log(color)
        // then change color of h1 in element 
        document.getElementById("change").style.color = color;
        // save current color on loaclstorage and return it when i reload a window
        localStorage.setItem("currentColor", color);
    })
};


function displayTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
    }

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);


    let time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;

    setTimeout(displayTime, 1000);
}

displayTime();

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-2)); // Output: [3, 4, 5]

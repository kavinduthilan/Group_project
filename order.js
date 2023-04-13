const product = document.getElementById("product");
const range = document.getElementById("range");
const calcBtn = document.getElementById("calcBtn");
const reload = document.getElementById("reload");
const alert = document.getElementById("alert")

const tbody = document.getElementById("tbody");
const display = document.getElementById("totalRange");
let sum = 0;


// DOM Manupulate
reload.addEventListener('click', ()=>{
    reload.reload();
})
calcBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    if(product.value == '' || range.value == ''){
        alert.innerHTML = 'Invalid Creadential!';
        alert.style.color = 'red';
    }else{
        alert.innerHTML = ''
        // Creat Elements
        const  tr = document.createElement('tr');
        const td1  = document.createElement('td')
        const td2  = document.createElement('td')
        const td3  = document.createElement('td')
        tbody.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        let food_item1 = 830.00;
        let food_item2 = 800.00;
        let food_item3 = 650.00;
        let food_item4 = 1200.00;
        let food_item5 = 780.00;
        let food_item6 = 660.00;
        let food_item7 = 450.00;
        let food_item8 = 899.00;
        let food_item9 = 1250.00;
        let food_item10= 860.00;
        let food_item11= 990.00;
        let food_item12= 560.00;
        let ans;
        

        if(document.getElementById("product").value=="Pizza"){
            ans = food_item1*Number(range.value);
        }
        else if(document.getElementById("product").value=="Classic Potato Chips Lay's"){
            ans = food_item2*Number(range.value);
        }
        else if(document.getElementById("product").value=="Ribeye Steak"){
            ans = food_item3*Number(range.value);
        }
        else if(document.getElementById("product").value=="Crispy Chicken Bucket"){
            ans = food_item4*Number(range.value);
        }
        else if(document.getElementById("product").value=="Tandoori chicken"){
            ans = food_item5*Number(range.value);
        }
        else if(document.getElementById("product").value=="Vegan Indian Tofu Tikka Masala"){
            ans = food_item6*Number(range.value);
        }
        else if(document.getElementById("product").value=="Gobi Paratha"){
            ans = food_item7*Number(range.value);
        }
        else if(document.getElementById("product").value=="Prawn malai curry"){
            ans = food_item8*Number(range.value);
        }
        else if(document.getElementById("product").value=="White Cheese & Chicken Lasagna"){
            ans = food_item9*Number(range.value);
        }
        else if(document.getElementById("product").value=="Cheese Pasta"){
            ans = food_item10*Number(range.value);
        }
        else if(document.getElementById("product").value=="Algerienne Fish"){
            ans = food_item11*Number(range.value);
        }
        else if(document.getElementById("product").value=="Prawn Fried Rice"){
            ans = food_item12*Number(range.value);
        }

        // Dispaly Data
        td1.innerHTML = product.value
        td2.innerHTML = Number(range.value)
        td3.innerHTML = ans

        display.innerHTML = sum += ans
    }

})
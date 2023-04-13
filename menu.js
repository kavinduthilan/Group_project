let ans;
let total=0;
let quantity;
let display = document.getElementById("totalRange");
let finish = document.getElementById("purchase");
let reload = document.getElementById("reset");
let item_no = 0;

finish.addEventListener("click",myfunc);
function myfunc(){
    window.open("form.html");
}

reload.addEventListener("click",load);
function load(){
    reload();
}


function mycart(item){

            // Create Elements
            const  tr = document.createElement('tr');
            const td1  = document.createElement('td')
            const td2  = document.createElement('td')
            const td3  = document.createElement('td')
			const td4  = document.createElement('td')
            tbody.appendChild(tr)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
			tr.appendChild(td4)
    
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


    let q1 = document.getElementById("dis1").value;
    let q2 = document.getElementById("dis2").value;
    let q3 = document.getElementById("dis3").value;
    let q4 = document.getElementById("dis4").value;
    let q5 = document.getElementById("dis5").value;
    let q6 = document.getElementById("dis6").value;
    let q7 = document.getElementById("dis7").value;
    let q8 = document.getElementById("dis8").value;
    let q9 = document.getElementById("dis9").value;
    let q10 = document.getElementById("dis10").value;
    let q11 = document.getElementById("dis11").value;
    let q12 = document.getElementById("dis12").value;






    if(item=="pizza"){
        ans = food_item1*q1;
        quantity=q1;
        document.getElementById("food1").disabled = true;

    }
    else if(item=="chips"){
        ans = food_item2*q2;
        quantity=q2;
        document.getElementById("food2").disabled = true;

    }
    else if(item=="steak"){
        ans = food_item3*q3;
        quantity=q3;
        document.getElementById("food3").disabled = true;

    }
    else if(item=="crispy"){
        ans = food_item4*q4;
        quantity=q4;
        document.getElementById("food4").disabled = true;

    }
    else if(item=="tando"){
        ans = food_item5*q5;
        quantity=q5;
        document.getElementById("food5").disabled = true;

    }
    else if(item=="vegan"){
        ans = food_item6*q6;
        quantity=q6;
        document.getElementById("food6").disabled = true;

    }
    else if(item=="gobi"){
        ans = food_item7*q7;
        quantity=q7;
        document.getElementById("food7").disabled = true;

    }
    else if(item=="prawn"){
        ans = food_item8*q8;
        quantity=q8;
        document.getElementById("food8").disabled = true;

    }
    else if(item=="lasagna"){
        ans = food_item9*q9;
        quantity=q9;
        document.getElementById("food9").disabled = true;

    }
    else if(item=="pasta"){
        ans = food_item10*q10;
        quantity=q10;
        document.getElementById("food10").disabled = true;

    }
    else if(item=="fish"){
        ans = food_item11*q11;
        quantity=q11;
        document.getElementById("food11").disabled = true;

    }
    else if(item=="fried rice"){
        ans = food_item12*q12;
        quantity=q12;
        document.getElementById("food12").disabled = true;

    }

	item_no++;

    // Dispaly Data
	td1.innerHTML = item_no
    td2.innerHTML = item
    td3.innerHTML = quantity
    td4.innerHTML = ans


    display.innerHTML=total+=ans

}

function openform(){
    document.getElementById("myform").style.display = "block";
}

function exitform(){
    document.getElementById("myform").style.display = "none";

}

/*increase discrease button*/
let num,num1 = 0,num2=0,num3=0,num4=0,num5=0,num6=0,num7=0,num8=0,num9=0,num10=0,num11=0,num12=0;

function plus(num){
  	if(num==1){
  		num1++;
  		if (num1 < 0) {
   			document.getElementById("dis1").value = 0;
   			num1 = 0;
  		}else{
    		document.getElementById("dis1").value = num1;
  		}
  	}
  	if(num==2){
  		num2++;
  		if (num2 < 0) {
   			document.getElementById("dis2").value = 0;
   			num2 = 0;
  		}else{
    		document.getElementById("dis2").value = num2;
  		}
  	}
  	if(num==3){
  		num3++;
  		if (num3 < 0) {
   			document.getElementById("dis3").value = 0;
   			num3 = 0;
  		}else{
    		document.getElementById("dis3").value = num3;
  		}
  	}
  	if(num==4){
  		num4++;
  		if (num4 < 0) {
   			document.getElementById("dis4").value = 0;
   			num4 = 0;
  		}else{
    		document.getElementById("dis4").value = num4;
  		}
  	}
  	if(num==5){
  		num5++;
  		if (num5 < 0) {
   			document.getElementById("dis5").value = 0;
   			num5= 0;
  		}else{
    		document.getElementById("dis5").value = num5;
  		}
  	}
  	if(num==6){
  		num6++;
  		if (num6 < 0) {
   			document.getElementById("dis6").value = 0;
   			num6= 0;
  		}else{
    		document.getElementById("dis6").value = num6;
  		}
  	}
  	if(num==7){
  		num7++;
  		if (num7 < 0) {
   			document.getElementById("dis7").value = 0;
   			num7= 0;
  		}else{
    		document.getElementById("dis7").value = num7;
  		}
  	}
  	if(num==8){
  		num8++;
  		if (num8 < 0) {
   			document.getElementById("dis8").value = 0;
   			num8 = 0;
  		}else{
    		document.getElementById("dis8").value = num8;
  		}
  	}
  	if(num == 9){
  		num9++;
  		if (num9 < 0) {
   			document.getElementById("dis9").value = 0;
   			num9= 0;
  		}else{
    		document.getElementById("dis9").value = num9;
  		}
  	}
  	if(num==10){
  		num10++;
  		if (num10 < 0) {
   			document.getElementById("dis10").value = 0;
   			num10 = 0;
  		}else{
    		document.getElementById("dis10").value = num10;
  		}
  	}
  	if(num==11){
  		num11++;
  		if (num11< 0) {
   			document.getElementById("dis11").value = 0;
   			num11 = 0;
  		}else{
    		document.getElementById("dis11").value = num11;
  		}
  	}
  	else{
  		num12++;
  		if (num12< 0) {
   			document.getElementById("dis12").value = 0;
   			num12 = 0;
  		}else{
    		document.getElementById("dis12").value = num12;
  		}

  	}




}

function min(num) {
  	if(num==1){
  		num1--;
  		if (num1 < 0) {
    		document.getElementById("dis1").value = 0;
    		num1 = 0;
  		}else{
    		document.getElementById("dis1").value = num1;
  		}
  
  	}
  	if(num==2){
  		num2--;
  		if (num2 < 0) {
   			document.getElementById("dis2").value = 0;
   			num2 = 0;
  		}else{
    		document.getElementById("dis2").value = num2;
  		}
  	}
  	if(num==3){
  		num3--;
  		if (num3 < 0) {
   			document.getElementById("dis3").value = 0;
   			num3 = 0;
  		}else{
    		document.getElementById("dis3").value = num3;
  		}
  	}
  	if(num==4){
  		num4--;
  		if (num4 < 0) {
   			document.getElementById("dis4").value = 0;
   			num4 = 0;
  		}else{
    		document.getElementById("dis4").value = num4;
  		}
  	}
  	if(num==5){
  		num5--;
  		if (num5 < 0) {
   			document.getElementById("dis5").value = 0;
   			num5= 0;
  		}else{
    		document.getElementById("dis5").value = num5;
  		}
  	}
  	if(num==6){
  		num6--;
  		if (num6 < 0) {
   			document.getElementById("dis6").value = 0;
   			num6= 0;
  		}else{
    		document.getElementById("dis6").value = num6;
  		}
  	}
  	if(num==7){
  		num7--;
  		if (num7 < 0) {
   			document.getElementById("dis7").value = 0;
   			num7= 0;
  		}else{
    		document.getElementById("dis7").value = num7;
  		}
  	}
  	if(num==8){
  		num8--;
  		if (num8 < 0) {
   			document.getElementById("dis8").value = 0;
   			num8 = 0;
  		}else{
    		document.getElementById("dis8").value = num8;
  		}
  	}
  	if(num == 9){
  		num9--;
  		if (num9 < 0) {
   			document.getElementById("dis9").value = 0;
   			num9= 0;
  		}else{
    		document.getElementById("dis9").value = num9;
  		}
  	}
  	if(num==10){
  		num10--;
  		if (num10 < 0) {
   			document.getElementById("dis10").value = 0;
   			num10 = 0;
  		}else{
    		document.getElementById("dis10").value = num10;
  		}
  	}
  	if(num==11){
  		num11--;
  		if (num11< 0) {
   			document.getElementById("dis11").value = 0;
   			num11 = 0;
  		}else{
    		document.getElementById("dis11").value = num11;
  		}
  	}
  	else{
  		num12--;
  		if (num12< 0) {
   			document.getElementById("dis12").value = 0;
   			num12 = 0;
  		}else{
    		document.getElementById("dis12").value = num12;
  		}

  	}
}
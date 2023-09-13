

// this function adds the value in display button
const appendinput = (value) => {

    // this statement creates an array of the input
    const split_string = document.getElementById("display").value.split("");

    let checker = split_string[split_string.length-1];

    // this condition checks that whether you are entering two operators consecutively or not and if yes then it will not allow you to enter
    if((checker === "/" || checker==="*" || checker ==="-" || checker ==="+" || checker ==="%")&&(value === "/" || value==="*" || value ==="-" || value ==="+" || value ==="%")){
        document.getElementById("display").value += "";
    }else{
        document.getElementById("display").value += value;
    }
}

// this function deletes the recent added number or any character
const del = () => {
    split_string.pop();
    document.getElementById("display").value = split_string;

}


//this function clears the display
const cleardisplay = () => {
    document.getElementById("display").value = "";
}

//this function calculates the result.
const calculateresult = () => {
    try{
        const answer = eval(document.getElementById("display").value);
        document.getElementById("display").value = answer;
    }
    catch(error){
        document.getElementById("display").value = "ERROR"
    }
}

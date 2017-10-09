var numBuns = 0;

var bunsInCart = 0;

var numOriginalBuns = 6;
var numBlackberryBuns = 2;


function addBuns(){
      numBuns +=1;
      // showBuns()
      return numBuns;
}
function deleteBuns(){
      if(numBuns > 0){
        numBuns -=1;
      }
      return numBuns;
      // showBuns()
}

function updateCart(){
    bunsInCart = numBuns
    console.log(bunsInCart)
    return bunsInCart
}

function addBunsForCart(bunType){
    if(bunType == "Original"){
        numOriginalBuns +=1;
      return numOriginalBuns;  
    }

    if(bunType == "Blackberry"){
        numBlackberryBuns +=1;
      return numBlackberryBuns;  
    }
}
function deleteBunsForCart(bunType){
    if(bunType == "Original"){
        if(numOriginalBuns > 0){
            numOriginalBuns -=1;
        }
      return numOriginalBuns;  
    }
    else if(bunType == "Blackberry"){
        if(numBlackberryBuns > 0){
            numBlackberryBuns -=1;
        }
      return numBlackberryBuns;  
    }

}

function empty(bunType){
    if(bunType === "Original"){
        numOriginalBuns = 0
        return numOriginalBuns;  
    } 
    else if(bunType === "Blackberry"){
        numBlackberryBuns = 0
        return numBlackberryBuns;  
    }   
}

// function showBuns(){
//     return numBuns;
// }

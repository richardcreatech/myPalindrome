const fill = document.querySelector('.fill');
const loader = document.querySelector('.loader');
const check = document.querySelector('.check');
const input = document.querySelector('.input');
// let myBoolean = false;


loader.style.display = 'none';
fill.style.display = 'none';

function checkForPalindrome(param){
    param = param.trim();
    let paramAlt = param.split('').reverse().join('');
    if(!param)
        {
            return("Please input a value");
            return;
        }
    // _eye is a palindrome
    else if(param.includes('_')){
        let myParam = param.split('');
        let newParam = [];
        
        for(let i = 0; i < myParam.length; i++){
            if(myParam[i] !== '_'){
                newParam.push(myParam[i].toLowerCase());
            }
            

        }
        
        
        console.log(newParam);
        
        let copyParam = [...newParam].reverse().join('');
        
        let newCopiedParam = newParam.join('');

        console.log(newCopiedParam);
        console.log(copyParam);
        
        if(copyParam == newCopiedParam){
            return(`${param} is a palindrome`);
        }
        else{
            return(`${param} is not a palindrome`);
        }
    }
    
    else if(paramAlt.toLowerCase() == param.toLowerCase()){
        return(`${param} is a palindrome`);
    }


    else if(param.includes('A') || param.includes('a'))
        {
            let checker; 
        for(let i = 0; i < param.length; i++){
            checker = param[i];
        }
        
        if(checker == 'A' || checker == 'a'){
            return(`${param} is a palindrome`);
        }
        else{
            return(`${param} is not a palindrome`);
        }

    }

    else{
        return(`${param} is not a palindrome`);
    }
    
}

check.onclick = () =>{
    fill.innerText = ''
    let holdIt = checkForPalindrome(input.value.trim())
    
    
    
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
        fill.style.display = 'flex';
        fill.innerText = holdIt;
    }, 1500)
}

export const NumToStr = (num=0) => {
    //Return a shortned string representation of a number
    if(num < 1000){
        return num;
    }
    
    
    if(num >= 1000 && num < 10000){
        const num_to_str = num.toString();
        return [num_to_str.slice(0,1), '.', num_to_str.slice(1,2), 'k'].join("");
    }
    else {
        const num_to_str = num.toString();
        return [num_to_str.slice(0,2), '.', num_to_str.slice(2,3), 'k'].join("");
    }
}

export const toggleState = (state, setter) => {
    state? setter(false): setter(true);
}


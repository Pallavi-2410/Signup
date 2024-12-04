function signUp(userName){
    let arr = ["Suyog", "Pallavi", "Vibha"]
    if(arr.includes(userName)){
        return "User Already Registered, Please Login"
    }else{
        arr.push(userName);
        return "Signup Sucessfull, Please login"
    }
}
console.log(signUp("Chandan"));
console.log(signUp("Suyog"));
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


function login(userName, password){
    let arr = ["Suyog", "Pallavi", "Vibha"];
    let correctpassword = "Emp@123";

    if(arr.includes(userName)){
        if(password === correctpassword){
            return "Login Successful";
        }else{
            return "Wrong Password" ;
        }
    }else{
        return "User Not Found, Please Signup";
    }
}
console.log(login("Suyog", "Emp@123"));
console.log(login("Suyog", "ABC123"));
console.log(login("Chandan", "ABC123"));



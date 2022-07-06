
export class Alert {
    constructor(){
        this.alert = document.querySelector(".alert");
    }
    Initial(){
        this.alert.classList.remove("alert-danger");
        this.alert.classList.remove("alert-success");
        this.alert.innerHTML = ""
    }
    Display(){
       this.Initial();
       this.alert.classList.add("alert-danger");
       this.alert.innerHTML = "Somthing went wrong!"
    }
    Success(){
        this.Initial()
        this.alert.classList.add("alert-success");
        this.alert.innerHTML = "Success!"
        setTimeout(() => {
            this.Initial()
        }, 10000)
    }
}
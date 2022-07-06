import { Parse } from "../utils/valid"
import { Alert } from "./alert"

export class SubmitForm {
    constructor(){
        this.button = document.querySelector(".btn");
        this.alert = new Alert();
    }

    Submit(){
        this.button.addEventListener("click", (event) => {
            event.preventDefault();
            const inputs = document.querySelectorAll(".form-control");
            const onError = Parse(inputs);
            if(!onError){
                this.alert.Display();
            } else {
                this.alert.Success();
            }
        })
    }

}
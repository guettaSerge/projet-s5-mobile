import { IonButton, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import { link } from "../url";

interface ContainerProps{}
const Recharge: React.FC<ContainerProps> = () => {
    const id = localStorage.getItem("id");
    if(!id)
        window.location.href="/"
    function Demande(event : any){
        event.preventDefault();
        let form_recharge = new FormData(event.target);
        if(id)
            form_recharge.append("idClient",id);
        let xhr = new XMLHttpRequest();
        xhr.open("POST",link+"demanderecharge",true);
        xhr.onreadystatechange = function(){
            
            if(this.readyState === 4 && this.status === 200){

              console.log(this.responseText);
                if(this.responseText != "0"){
                    
                    alert("Votre demande a bien été prise en compte !");
                    
                }else
                    alert("Vous avez déjà une demande !");
            }
        };
        xhr.send(form_recharge);
      }
    return(
        <IonPage>
        <form className="recharger" onSubmit={Demande}>

            <IonItem fill={undefined} shape={undefined} counter={undefined} counterFormatter={undefined}>
                <br/><br/>
                <IonLabel position="floating">Demande Acquis</IonLabel>
                <IonInput type={"text"} name={"demande"}/>

            </IonItem>
            <IonButton className="ion-margin-top" type={"submit"}expand="block" >Recharger</IonButton>
        </form>
        </IonPage>
    );
};
export default Recharge;
import { IonLabel, IonList, IonNote, IonPage,IonItem,IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import GetData from "./GetData";

interface liste{}
const ListeEnchere: React.FC<liste> = () => {
    const {data, error} = GetData("/encheres", "get",null);

    return(
       <IonPage>
           <IonList>
           <IonItem>
             <IonCard>
                <IonCardContent >
                    <h2>Listes</h2>
                    {Array.isArray(data) ? data.map((liste)=>{
                  let date= new Date(liste.enchere.debut).toLocaleString(
                    "fr-FR",
                            {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                       
                            }
                    
                  );
                  let lera= new Date(liste.enchere.debut).toLocaleString(
                    "fr-FR",
                            {
                            hour: "numeric",
                            minute: "numeric",
                            }
                    
                  );
                    let sta="Fini"
                    let coul="warning"
                    if(liste.enchere.statut==0){
                        sta="En cours"
                        coul="success"

                    }
               
                    return(
                        <IonLabel>
                                <IonNote>{liste.enchere.nom}</IonNote>
                                <br />
                                <IonNote>{date}</IonNote>
                                <br />
                                <IonNote>{lera}</IonNote>
                                <br />
                                <IonNote>{liste.enchere.descriptions}</IonNote>
                                <br />
                        </IonLabel>
                         )}):"Pas d'enchere"}
                        </IonCardContent>
                        </IonCard>
                    </IonItem>
                   
           </IonList>
           <IonItem routerLink="/RechargeCompte">
            <IonLabel>Recharger Mon Compte</IonLabel>
        </IonItem>
        <IonItem routerLink="/Ajouter">
            <IonLabel>Ajouter produit</IonLabel>
        </IonItem>
       </IonPage>
       
       
    );
};

export default ListeEnchere;



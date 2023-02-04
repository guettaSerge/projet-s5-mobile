import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import React, { useState } from "react";
import { link } from "../url";
import axios from 'axios'

  const inscrir =() =>{
    console.log(link+"/Client");
    return axios.post(link+"/Client",{
    }).then((data) =>
    {
      console.log(data);
      window.location.replace("/login");
    }).catch((err) => {
      console.log("error");
      return err.response.data.message;
    }
    
    )
  }
  const Inscription: React.FC = () => {
    sessionStorage.clear();
    localStorage.clear();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [passe, setPasse] = useState("");
  
    const user = {
      nom: nom,
      email: email,
      passe: passe
    }
  
  
    return (
  
      <div className="container">
      <form className="inscription" onSubmit={inscrir}>
        <h1>Inscription</h1>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput type={"text"} name={"nom"} placeholder={"Username"} onIonChange={(e: any) => setNom(e.target.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type={"text"} name={"email"} placeholder={"email"} onIonChange={(e: any) => setEmail(e.target.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Mot de passe</IonLabel>
          <IonInput type={"password"} name={"passe"} placeholder={"password"} onIonChange={(e: any) => setPasse(e.target.value)}/>
        </IonItem>
        <IonButton className="ion-margin-top" type="submit" expand="block">
        Inscription
      </IonButton>
      <IonItem routerLink="/login">
      <IonLabel>Login</IonLabel>
      </IonItem>
      <IonItem routerLink="../ListeEnchere">
      <IonLabel>Liste</IonLabel>
      </IonItem>
      <IonItem routerLink="../Ajouter">
      <IonLabel>Ajouter</IonLabel>
      </IonItem>
    </form>
    </div>
    );
  };
  
  export default Inscription;
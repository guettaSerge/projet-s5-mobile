import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from "react";
import { personCircle } from "ionicons/icons";
import { link } from "../url";
import axios from 'axios';

const login =( user: any) =>{
  console.log(link+"/client/connection?email="+user.email+ "&&passe="+user.passe);
  return axios.post(link+"/client/connection?email="+user.email+ "&&passe="+user.passe,{
  }).then((data) =>
  {
    console.log(data);
    window.location.replace("/ListeEnchere");
  }).catch((err) => {
    console.log("error");
    return err.response.data.message;
  }
  
  )
}
const Login: React.FC = () => {
  sessionStorage.clear();
  localStorage.clear();
  const [email, setEmail] = useState("");
  const [passe, setPasse] = useState("");

  const user = {
    email: email,
    passe: passe
  }
    return (
      <div className="container">
      <form className="login" onSubmit={login} >
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding ion-text-center" style={{ color:"white"}}>
          <IonGrid>
          <IonRow>
            <IonCol>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonIcon
                  style={{ fontSize: "70px", color: "#0040ff" }}
                  icon={personCircle}
              />
            </IonCol>
          </IonRow>
            <IonRow>
              <IonCol>
              <IonItem>
              <IonLabel position="floating"> Email</IonLabel>
              <IonInput
                  type={"text"} name={"email"} placeholder={"email"} id="email" onIonChange={(e: any) => setEmail(e.target.value)}
                  >
              </IonInput>
              </IonItem>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput
                 type={"password"} name={"passe "} placeholder={"password"} id="passe" onIonChange={(e: any) => setPasse(e.target.value)}
                  >
                </IonInput>
              </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p style={{ fontSize: "small" }}>
                    By clicking LOGIN you agree to our <a href="#">Policy</a>
                </p>
                <IonButton expand="block"  onClick={() => login(user).catch(err => { })}>Login</IonButton>
                <p style={{ fontSize: "medium" }}>
                    Don't have an account? <a href="/Inscription">Sign up!</a>
                </p>
  
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </form>
    </div>
    );
  };
  
  export default Login;

  
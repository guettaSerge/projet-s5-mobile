import { IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonDatetime, IonContent, IonList } from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { link } from "../url";
import GetData from "./GetData";



interface Ajout{}
const Ajouter:React.FC<Ajout>=()=>{
   
    const [nom,setNom]=useState("");
    const [idClient,setIdClient]=useState("");
    const[debut,setDebut]=useState("");
    const[duree,setDuree]=useState("");
    const[prixDepart,setPrixDepart]=useState("");
    const[idCategorie,setIdCategorie]=useState("");
    const[description,setDescription]=useState("");
    const{data,error}=GetData("/category","get",null);
    const [data2, setData2] = useState<Array<any>>([]) ;
    useEffect(() => {
        const api = axios.create({
            baseURL: link,
        })
            api.get("/client")
            .then(res => {             
                setData2(res.data)
             })

        }, [])
    const [idp, setidp] = useState("");

    function valider(){
        console.log(nom)
        console.log(idClient)
        console.log(debut)
        console.log(duree)
        console.log(prixDepart)
        console.log(idCategorie)
        console.log(description)
        const api=axios.create({
            baseURL:link,
            
           
        });
        let json={
            
            "nom":{
                "nom":nom
            },
            "client":{
                "idClient":idClient
            },
            "heure_debut":debut,
            "mise_minimale":prixDepart,
            "duree":duree,
            "status":0,

            "categorie":{
                "idCategorie":idCategorie,
            },
            "description":description



        }
        api.post("/Enchere",json)
        .then(res => {             
            console.log(res.data)
            setidp(res.data)
         })
        .catch(error=>{
           
         })
      
        
           window.location.replace("/ListeEnchere");
           
    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        for (let i = 0; i < event.target.files!.length; i++) {
          const file = event.target.files![i];
          const reader = new FileReader();
          reader.onloadend = () => {
            let str=reader.result as string
    
          };
          reader.readAsDataURL(file);
        }
      };
    }
    return(
        <div className="container">
            <form>
             <IonList>
                <IonItem>
                    <IonLabel position='stacked'>Categorie</IonLabel>
                    <IonSelect interface="popover" onIonChange={(e:any)=>setIdCategorie(e.detail.value)}>
                        { 
                            data.map(l=>{
                                return(
                                <IonSelectOption key={l.idCategorie} value={l.idCategorie}>{l.nom}</IonSelectOption>
                                )
                    })
                       }   
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position='stacked'>Client</IonLabel>
                    <IonSelect interface="popover" onIonChange={(e:any)=>setIdClient(e.detail.value)}>
                        { 
                            data2.map(lc=>{
                                return(
                                <IonSelectOption key={lc.idClient} value={lc.idClient}>{lc.nom}</IonSelectOption>
                                )
                    })
                       }   
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position='stacked'>Nom</IonLabel>
                    <IonInput required name='produit' onIonChange={(e:any)=>setNom(e.target.value)}></IonInput>

                </IonItem>  
                <IonItem>
                    <IonLabel position='stacked'>Description</IonLabel>
                    <IonInput required name='desc' onIonChange={(e:any)=>setDescription(e.target.value)}></IonInput>

                </IonItem>       
                <IonItem>
                    <IonLabel position='stacked'>Prix de depart</IonLabel>
                    <IonInput required name='prix' onIonChange={(e:any)=>setPrixDepart(e.target.value)} type="number"></IonInput>

                </IonItem>
                <IonItem>
                    <IonLabel position='stacked'>Date debut</IonLabel>
                    <IonInput required name='prix' onIonChange={(e:any)=>setDebut(e.target.value)} type="date"></IonInput>
                </IonItem>   
                <IonItem>
                    <IonLabel position='stacked'>Dureet</IonLabel>
                    <IonInput required name='prix' onIonChange={(e:any)=>setDuree(e.target.value)} type="date"></IonInput>
                </IonItem> 
                       
                
                    <IonButton disabled={false} expand="block" onClick={valider}>Valider</IonButton>
                
            </IonList>
            </form>
        </div>
    );
};

export default Ajouter;

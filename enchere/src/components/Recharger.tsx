import { IonHeader } from "@ionic/core/components";
import { IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import Recharger from "./Recharger";

const Rechargement: React.FC = () => {
    return(
        <IonPage>
                <IonToolbar>
                    <IonTitle>
                        Rechargement
                    </IonTitle>
                </IonToolbar>
            <IonContent fullscreen>
                <Recharger />
            </IonContent>
        </IonPage>
    );
};
export default Rechargement;
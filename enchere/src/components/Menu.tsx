import { IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { useLocation } from "react-router";

import { addCircle, cardSharp, hammerSharp, powerSharp } from 'ionicons/icons';
import './Menu.css';
import React from "react";
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Ajout enchere',
    url: '/ajout',
    iosIcon: addCircle,
    mdIcon: addCircle
  },
  {
    title: 'Mes Encheres',
    url: '/mesencheres',
    iosIcon: hammerSharp,
    mdIcon: hammerSharp
  },
  {
    title: 'Rechargement',
    url: '/recharger',
    iosIcon: cardSharp,
    mdIcon: cardSharp
  },
  {
    title: 'Se deconnecter',
    url: '/page/Archived',
    iosIcon: powerSharp,
    mdIcon: powerSharp
  },
  
];

const Menu: React.FC = () => {
    const location = useLocation();
    return (
      <IonMenu contentId="main" type="overlay" swipeGesture >
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader >Utilisateur</IonListHeader>
            <br></br>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
        
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
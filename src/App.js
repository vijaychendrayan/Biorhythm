import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard'
import {useLocalStorage} from './hooks'

function App() {
  // const [birthDate, setBirthDate] = useState('');
  const [birthDate, setBirthDate] = useLocalStorage('birthDate','');
  // const targetDate = new Date().toISOString();
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>Biorhythms App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { birthDate && targetDate &&
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
        }
        <IonItem>
          <IonLabel position="fixed" >Birth Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={birthDate} 
            onIonChange={(event)=>setBirthDate(event.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed" >Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={targetDate} 
            onIonChange={(event)=>setTargetDate(event.detail.value)} />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;

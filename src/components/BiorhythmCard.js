import dayjs from 'dayjs';
import React from 'react';
import{IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard}from '@ionic/react'

import {calculateBiorhythms}  from '../calculations'
import BiorhythmChart from './BiorhythmChart'
import './BiorhythmCard.css'

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY')
}

function BiorhythmCard({birthDate,targetDate}){
    const {physical, emotional, intellectual} = calculateBiorhythms(birthDate,targetDate);
    // console.log(targetDate)
    return(
        <IonCard className= "biorhythm-card ion-text-center">
          <IonCardHeader>
            <IonCardTitle> {formatDate(targetDate)} </IonCardTitle>
            <IonCardContent>
                
                <BiorhythmChart birthDate={birthDate}  targetDate={targetDate} />
              <p className="physical">Physical: {physical.toFixed(4)}</p>
              <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
              <p className="intellectual">Intellactual: {intellectual.toFixed(4)}</p>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
    )
}

export default BiorhythmCard
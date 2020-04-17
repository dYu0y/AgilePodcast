import { IonList, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReactAudioPlayer from 'react-audio-player';
import React, { useState } from 'react';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  let musics: string[] = [
    `埋葬 - 萤火虫の怨.mp3`,
    `磁暴步兵羊永信 - Arcana Idola - 紅葉月梛葉.mp3`,
    `磁暴步兵羊永信 - Cross†Soul - HyuN feat. Syepias.mp3`,
    `磁暴步兵羊永信 - Ice Chandelier - pan.mp3`,
    `磁暴步兵羊永信 - PUPA - モリモリあつし.mp3`,
    `磁暴步兵羊永信 - 万吨匿名信 - 埋葬.mp3`
  ];
  let [song, changeSong] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Poi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {musics.map((value: string, index: number) => <IonCard onClick={() => { changeSong(index) }}>{value}</IonCard>)}
        </IonList>

        
        <IonList>
          <IonCard>Now Playing...</IonCard>
          <IonCard>{musics[song]}</IonCard>
          <ReactAudioPlayer
            src={[`assets\\` + musics[song]].join()}
            controls
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

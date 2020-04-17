import { IonList, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonItem, IonListHeader } from '@ionic/react';
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
  let [song, changeSong] = useState(-1);

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
        <IonCard>
          <IonList>
            <IonListHeader>
              歌單(節目清單)
            </IonListHeader>
            {musics.map((value: string, index: number) => <IonItem key={index} onClick={() => { changeSong(index) }}>{value}</IonItem>)}
          </IonList>
        </IonCard>

        <IonCard>
          {
            song === -1
              ? <IonCardContent>{"目前沒有撥放的歌 QQ"}</IonCardContent>
              : <IonCardContent>
                <IonItem lines="none">Now Playing...</IonItem>
                <IonItem lines="none">{musics[song]}</IonItem>
                <ReactAudioPlayer
                  src={[`assets\\` + musics[song]].join()}
                  autoPlay
                  controls
                  onEnded={
                    () => { changeSong((song + 1) % musics.length) }
                  }
                />
              </IonCardContent>

          }

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

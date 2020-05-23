import { IonList, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonItem, IonListHeader, IonIcon, IonLabel } from '@ionic/react';
import ReactAudioPlayer from 'react-audio-player';
import React, { useState, useEffect } from 'react';
import { musicalNotes } from 'ionicons/icons';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Home.css';

import * as firebase from 'firebase';
import 'firebase/storage'

(() => {
  const config = {
    apiKey: "AIzaSyCEyreG8AkDS8SQCbMw5GynCBDZ9X_jFTo",
    authDomain: "agilepodcast-6844e.firebaseapp.com",
    databaseURL: "https://agilepodcast-6844e.firebaseio.com",
    projectId: "agilepodcast-6844e",
    storageBucket: "agilepodcast-6844e.appspot.com",
    messagingSenderId: "1076962466217",
    appId: "1:1076962466217:web:6c1406a6ab569f66ac4cb8",
    measurementId: "G-Z4RSSEMX8T"
  };

  firebase.initializeApp(config);
  console.log("init success!");
})();

let storage = firebase.storage();

const Home: React.FC = () => {
  interface MusicInterFace {
    type: string;
    value: string;
    displayName: string;
  }
  let musics: MusicInterFace[] = [
    { type: `online`, value: `埋葬 - 萤火虫の怨.mp3`, displayName: `萤火虫の怨 - 埋葬.mp3` },
    { type: `online`, value: `磁暴步兵羊永信 - Arcana Idola - 紅葉月梛葉.mp3`, displayName: `Arcana Idola - 紅葉月梛葉.mp3` },
    { type: `online`, value: `磁暴步兵羊永信 - Cross†Soul - HyuN feat. Syepias.mp3`, displayName: `Cross†Soul - HyuN feat. Syepias.mp3` },
    { type: `online`, value: `磁暴步兵羊永信 - Ice Chandelier - pan.mp3`, displayName: `Ice Chandelier - pan.mp3` },
    { type: `online`, value: `磁暴步兵羊永信 - PUPA - モリモリあつし.mp3`, displayName: `PUPA - モリモリあつし.mp3` },
    { type: `online`, value: `磁暴步兵羊永信 - 万吨匿名信 - 埋葬.mp3`, displayName: `万吨匿名信 - 埋葬.mp3` },
    { type: `online`, value: `DjOkawari-PerfectBlue[FullAlbum].mp3`, displayName: `DjOkawari-PerfectBlue[FullAlbum].mp3` }
  ];

  let [song, changeSong] = useState(-1);
  let [src_, setSrc] = useState('');
  useEffect(() => {
    let getSrc = async ({ value, type }: MusicInterFace) => {
      if (type === `local`)
        setSrc([`assets\\` + value].join());
      else {
        setSrc(await storage.ref('songs/' + value).getDownloadURL());
      }
    };
    song !== -1 && getSrc(musics[song]);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>OuO</IonTitle>
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
            {musics.map(({ value, displayName }, index: number) =>
              <IonItem key={value} onClick={() => changeSong(index)}>
                <IonLabel>{displayName}</IonLabel>
                {song === index
                  ? <IonIcon icon={musicalNotes} slot="end" />
                  : null}
              </IonItem>
            )}
          </IonList>
        </IonCard>

        <IonCard>
          {
            song === -1
              ? <IonCardContent>{"目前沒有撥放的歌 QQ"}</IonCardContent>
              : <IonCardContent>
                <IonItem lines="none">Now Playing...</IonItem>
                <IonItem lines="none">{musics[song].displayName}</IonItem>
                <ReactAudioPlayer
                  src={src_}
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

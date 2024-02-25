// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "@firebase/auth";
// import { bidtile, currentPlayerStringForm, currentplayer, currentplayercommonplants, currentplayerspecialplants, currentplayeruniqueplants, playerbid, playercash, playername, playerpassword } from "./variables/list";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgv_x6qB3b6Ck9iVv-afeYwsHzK2uq3K4",
  authDomain: "turftactic-ea678.firebaseapp.com",
  projectId: "turftactic-ea678",
  storageBucket: "turftactic-ea678.appspot.com",
  messagingSenderId: "736083049798",
  appId: "1:736083049798:web:64c599f1fe40726babb947"
};

// var dataUpload = {
//   IncomePlayer:{
//       bidPlayer: playerbid[currentplayer[0]],
//       cashPlayer: playercash[currentplayer[0]],
//   },
//   PlantsHave:{
//       commonPlants:{
//           1: currentplayercommonplants[0],
//           2: currentplayercommonplants[1],
//           3: currentplayercommonplants[2],
//           4: currentplayercommonplants[3],
//           5: currentplayercommonplants[4],
//           6: currentplayercommonplants[5],
//           7: currentplayercommonplants[6],
//           8: currentplayercommonplants[7],
//           9: currentplayercommonplants[8],
//           10: currentplayercommonplants[9],
//       },
//       specialPlants:{
//           1: currentplayerspecialplants[0],
//           2: currentplayerspecialplants[1],
//           3: currentplayerspecialplants[2],
//           4: currentplayerspecialplants[3],
//           5: currentplayerspecialplants[4],
//           6: currentplayerspecialplants[5],
//           7: currentplayerspecialplants[6],
//           8: currentplayerspecialplants[7],
//           9: currentplayerspecialplants[8],
//           10: currentplayerspecialplants[9],
//       },
//       uniquePlants:{
//           1: currentplayeruniqueplants[0],
//           2: currentplayeruniqueplants[1],
//           3: currentplayeruniqueplants[2],
//           4: currentplayeruniqueplants[3],
//       }
//   },
//   PlayerLoginInfo:{
//       passwordPlayer: playerpassword[currentplayer[0]],
//       usernamePlayer: playername[currentplayer[0]],
//   }
// }
// const myCollection = collection(db, 'TheGameTurfTactics', 'TTPlayer2');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
// const newDocRef = await addDoc(myCollection, dataStuff);
// console.log('New document added with ID:', newDocRef.id);
export const auth = getAuth(app);
// export const ref = db.ref('TheGameTurfTactics');

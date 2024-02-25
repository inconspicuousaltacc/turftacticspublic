import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

//not sure what this is for lmao
async function setPlayerData(playerId: string, data: any) {
  try {
    const docRef = doc(db, "TheGameTurfTactics", playerId);
    await setDoc(docRef, data, { merge: true });
    console.log(`Data set for ${playerId}`);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const playerData = {
  IncomePlayer: {
    bidPlayer: -1,
    cashPlayer: 50,
  },
  PlantsHave: {
    commonPlants: {
      1: 0
    },
    specialPlants: {
      1: 0
    },
    uniquePlants: {
      1: 0
    },
  },
  PlayerLoginInfo: {
    passwordPlayer: "",
    usernamePlayer: "",
  },
};

setPlayerData("TTPlayer1", playerData);
setPlayerData("TTPlayer2", playerData);
setPlayerData("TTPlayer3", playerData);
setPlayerData("TTPlayer4", playerData);

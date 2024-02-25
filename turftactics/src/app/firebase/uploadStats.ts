import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "./firebase";
import { playercash, playername, playerpassword, playerbid, bidtile, turnnumber, currentplayer, currentPlayerStringForm } from "../variables/list";

export interface playervariablelol {
    IncomePlayer: {
        bidPlayer: number,
        cashPlayer: number,
    },
    PlantsHave: {
        commonPlants: {
            a1: number;
            a2: number;
            a3: number;
            a4: number;
            a5: number;
            a6: number;
            a7: number;
            a8: number;
            a9: number;
            a10: number;
        },
        specialPlants: {
            a1: number;
            a2: number;
            a3: number;
            a4: number;
            a5: number;
            a6: number;
            a7: number;
            a8: number;
            a9: number;
            a10: number;
        },
        uniquePlants: {
            a1: number;
            a2: number;
            a3: number;
            a4: number;
            a5: number;
            a6: number;
            a7: number;
            a8: number;
            a9: number;
            a10: number;
        },
    },
    PlayerLoginInfo: {
        passwordPlayer: string;
        usernamePlayer: string;
    }
}

export interface boardvariablelol {
    GameInfo: {
        bidAmount: number;
        gameState: number;
        turnNumber: number;
    },
    OccupiedPlaces: {
        indexPlants: {
            plant11: number;
            plant12: number;
            plant13: number;
            plant14: number;
            plant15: number;
            plant16: number;
            plant21: number;
            plant22: number;
            plant23: number;
            plant24: number;
            plant25: number;
            plant26: number;
            plant31: number;
            plant32: number;
            plant33: number;
            plant34: number;
            plant35: number;
            plant36: number;
            plant41: number;
            plant42: number;
            plant43: number;
            plant44: number;
            plant45: number;
            plant46: number;
            plant51: number;
            plant52: number;
            plant53: number;
            plant54: number;
            plant55: number;
            plant56: number;
            plant61: number;
            plant62: number;
            plant63: number;
            plant64: number;
            plant65: number;
            plant66: number;
        },
        ownerPlants: {
            plant11: string;
            plant12: string;
            plant13: string;
            plant14: string;
            plant15: string;
            plant16: string;
            plant21: string;
            plant22: string;
            plant23: string;
            plant24: string;
            plant25: string;
            plant26: string;
            plant31: string;
            plant32: string;
            plant33: string;
            plant34: string;
            plant35: string;
            plant36: string;
            plant41: string;
            plant42: string;
            plant43: string;
            plant44: string;
            plant45: string;
            plant46: string;
            plant51: string;
            plant52: string;
            plant53: string;
            plant54: string;
            plant55: string;
            plant56: string;
            plant61: string;
            plant62: string;
            plant63: string;
            plant64: string;
            plant65: string;
            plant66: string;
        },
        typePlants: {
            plant11: string;
            plant12: string;
            plant13: string;
            plant14: string;
            plant15: string;
            plant16: string;
            plant21: string;
            plant22: string;
            plant23: string;
            plant24: string;
            plant25: string;
            plant26: string;
            plant31: string;
            plant32: string;
            plant33: string;
            plant34: string;
            plant35: string;
            plant36: string;
            plant41: string;
            plant42: string;
            plant43: string;
            plant44: string;
            plant45: string;
            plant46: string;
            plant51: string;
            plant52: string;
            plant53: string;
            plant54: string;
            plant55: string;
            plant56: string;
            plant61: string;
            plant62: string;
            plant63: string;
            plant64: string;
            plant65: string;
            plant66: string;
        },
    },
    BidTile: {
        x: number;
        y: number;
    }
}

export const getAllPlayerStats = async () => {
    let variablerepresentingthecurrentplayer = "TTPlayer1";
    let playerno = 1;
    let doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));
        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    
    variablerepresentingthecurrentplayer = "TTPlayer2";
    playerno = 2;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));

        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    
    variablerepresentingthecurrentplayer = "TTPlayer3";
    playerno = 3;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));

        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    
    variablerepresentingthecurrentplayer = "TTPlayer4";
    playerno = 4;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));

        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", "TTBoardstate"));
    bidtile[0] = await doclol.data()?.boardObjectForCurrent.BidTile.x;
    bidtile[1] = await doclol.data()?.boardObjectForCurrent.BidTile.y;
    turnnumber[0] = await doclol.data()?.boardObjectForCurrent.GameInfo.turnNumber;
}

export const getAllPlayerStatsExceptCurrent = async () => {
    await submitPlayerData({playerDataUploadPlease});
    let variablerepresentingthecurrentplayer = "TTPlayer1";
    let playerno = 1;
    let doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));
    if (currentplayer[0] != playerno) {
        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    }
    variablerepresentingthecurrentplayer = "TTPlayer2";
    playerno = 2;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));

    if (currentplayer[0] != playerno) {
        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    }
    variablerepresentingthecurrentplayer = "TTPlayer3";
    playerno = 3;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));

    if (currentplayer[0] != playerno) {
        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    }
    variablerepresentingthecurrentplayer = "TTPlayer4";
    playerno = 4;
    doclol = await getDoc(doc(db, "TheGameTurfTactics", variablerepresentingthecurrentplayer));

    if (currentplayer[0] != playerno) {
        playercash[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer;

        playername[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer;

        playerpassword[playerno - 1] = await doclol.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer;

        playerbid[playerno - 1] = await doclol.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer;
    }
    doclol = await getDoc(doc(db, "TheGameTurfTactics", "TTBoardstate"));
    bidtile[0] = await doclol.data()?.boardObjectForCurrent.BidTile.x;
    bidtile[1] = await doclol.data()?.boardObjectForCurrent.BidTile.y;
    turnnumber[0] = await doclol.data()?.boardObjectForCurrent.GameInfo.turnNumber;
}
export const getPlayerStats = async () => {
    const document = await getDoc(doc(db, "TheGameTurfTactics", uploadToWho[0]));
    playerObjectForCurrent = {
        IncomePlayer: {
            bidPlayer: document.data()?.playerObjectForCurrent.IncomePlayer.bidPlayer,
            cashPlayer: document.data()?.playerObjectForCurrent.IncomePlayer.cashPlayer,
        },
        PlantsHave: {
            commonPlants: {
                a1: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a1,
                a2: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a2,
                a3: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a3,
                a4: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a4,
                a5: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a5,
                a6: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a6,
                a7: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a7,
                a8: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a8,
                a9: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a9,
                a10: await document.data()?.playerObjectForCurrent.PlantsHave.commonPlants.a10,
            },
            specialPlants: {
                a1: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a1,
                a2: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a2,
                a3: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a3,
                a4: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a4,
                a5: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a5,
                a6: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a6,
                a7: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a7,
                a8: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a8,
                a9: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a9,
                a10: await document.data()?.playerObjectForCurrent.PlantsHave.specialPlants.a10,
            },
            uniquePlants: {
                a1: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a1,
                a2: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a2,
                a3: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a3,
                a4: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a4,
                a5: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a5,
                a6: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a6,
                a7: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a7,
                a8: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a8,
                a9: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a9,
                a10: await document.data()?.playerObjectForCurrent.PlantsHave.uniquePlants.a10,
            },
        },
        PlayerLoginInfo: {
            passwordPlayer: await document.data()?.playerObjectForCurrent.PlayerLoginInfo.passwordPlayer,
            usernamePlayer: await document.data()?.playerObjectForCurrent.PlayerLoginInfo.usernamePlayer,
        }
    };
}

export let playerDataUploadPlease: playervariablelol = {
    IncomePlayer: {
        bidPlayer: -1,
        cashPlayer: 50,
    },
    PlantsHave: {
        commonPlants: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
            a6: 0,
            a7: 0,
            a8: 0,
            a9: 0,
            a10: 0,
        },
        specialPlants: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
            a6: 0,
            a7: 0,
            a8: 0,
            a9: 0,
            a10: 0,
        },
        uniquePlants: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
            a6: 0,
            a7: 0,
            a8: 0,
            a9: 0,
            a10: 0,
        },
    },
    PlayerLoginInfo: {
        passwordPlayer: "broth alt",
        usernamePlayer: "broth alt",
    }
};
export let playerObjectForCurrent: playervariablelol = {
    IncomePlayer: {
        bidPlayer: -1,
        cashPlayer: 50,
    },
    PlantsHave: {
        commonPlants: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
            a6: 0,
            a7: 0,
            a8: 0,
            a9: 0,
            a10: 0,
        },
        specialPlants: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
            a6: 0,
            a7: 0,
            a8: 0,
            a9: 0,
            a10: 0,
        },
        uniquePlants: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
            a6: 0,
            a7: 0,
            a8: 0,
            a9: 0,
            a10: 0,
        },
    },
    PlayerLoginInfo: {
        passwordPlayer: "broth alt",
        usernamePlayer: "broth alt",
    }
};

export let boardObjectForCurrent: boardvariablelol = {
    GameInfo: {
        bidAmount: -1,
        gameState: -1,
        turnNumber: -1,
    },
    OccupiedPlaces: {
        indexPlants: {
            plant11: -1,
            plant12: -1,
            plant13: -1,
            plant14: -1,
            plant15: -1,
            plant16: -1,
            plant21: -1,
            plant22: -1,
            plant23: -1,
            plant24: -1,
            plant25: -1,
            plant26: -1,
            plant31: -1,
            plant32: -1,
            plant33: -1,
            plant34: -1,
            plant35: -1,
            plant36: -1,
            plant41: -1,
            plant42: -1,
            plant43: -1,
            plant44: -1,
            plant45: -1,
            plant46: -1,
            plant51: -1,
            plant52: -1,
            plant53: -1,
            plant54: -1,
            plant55: -1,
            plant56: -1,
            plant61: -1,
            plant62: -1,
            plant63: -1,
            plant64: -1,
            plant65: -1,
            plant66: -1,
        }, ownerPlants: {
            plant11: "grey",
            plant12: "grey",
            plant13: "grey",
            plant14: "grey",
            plant15: "grey",
            plant16: "grey",
            plant21: "grey",
            plant22: "grey",
            plant23: "grey",
            plant24: "grey",
            plant25: "grey",
            plant26: "grey",
            plant31: "grey",
            plant32: "grey",
            plant33: "grey",
            plant34: "grey",
            plant35: "grey",
            plant36: "grey",
            plant41: "grey",
            plant42: "grey",
            plant43: "grey",
            plant44: "grey",
            plant45: "grey",
            plant46: "grey",
            plant51: "grey",
            plant52: "grey",
            plant53: "grey",
            plant54: "grey",
            plant55: "grey",
            plant56: "grey",
            plant61: "grey",
            plant62: "grey",
            plant63: "grey",
            plant64: "grey",
            plant65: "grey",
            plant66: "grey",
        },
        typePlants: {
            plant11: "",
            plant12: "",
            plant13: "",
            plant14: "",
            plant15: "",
            plant16: "",
            plant21: "",
            plant22: "",
            plant23: "",
            plant24: "",
            plant25: "",
            plant26: "",
            plant31: "",
            plant32: "",
            plant33: "",
            plant34: "",
            plant35: "",
            plant36: "",
            plant41: "",
            plant42: "",
            plant43: "",
            plant44: "",
            plant45: "",
            plant46: "",
            plant51: "",
            plant52: "",
            plant53: "",
            plant54: "",
            plant55: "",
            plant56: "",
            plant61: "",
            plant62: "",
            plant63: "",
            plant64: "",
            plant65: "",
            plant66: "",
        },
    },
    BidTile: {
        x: -1,
        y: -1,
    }
};

export let uploadToWho: string[] = [""];
if (currentplayer[0] == 1) {
    uploadToWho[0] = "TTPlayer1";
}
if (currentplayer[0] == 2) {
    uploadToWho[0] = "TTPlayer2";
}
if (currentplayer[0] == 3) {
    uploadToWho[0] = "TTPlayer3";
}
if (currentplayer[0] == 4) {
    uploadToWho[0] = "TTPlayer4";
}
//also serves as resetting players
export const makeNewPlayer = async ({ playerDataUploadPlease }: { playerDataUploadPlease: playervariablelol }) => {
    await setDoc(doc(db, "TheGameTurfTactics", "TTPlayer4"), {
        playerObjectForCurrent,
    }, {
        merge: false
    });
    await setDoc(doc(db, "TheGameTurfTactics", "TTPlayer1"), {
        playerObjectForCurrent,
    }, {
        merge: false
    });
    await setDoc(doc(db, "TheGameTurfTactics", "TTPlayer2"), {
        playerObjectForCurrent,
    }, {
        merge: false
    });
    await setDoc(doc(db, "TheGameTurfTactics", "TTPlayer3"), {
        playerObjectForCurrent,
    }, {
        merge: false
    });
};

export const resetBoard = async () => {
    await setDoc(doc(db, "TheGameTurfTactics", "TTBoardstate"), {
        boardObjectForCurrent,
    }), {
        merge: false
    }
}

export const submitPlayerData = async ({ playerDataUploadPlease }: { playerDataUploadPlease: playervariablelol }) => {
    await setDoc(doc(db, "TheGameTurfTactics", uploadToWho[0]), {
        playerObjectForCurrent,
    }, {
        merge: true
    });
};
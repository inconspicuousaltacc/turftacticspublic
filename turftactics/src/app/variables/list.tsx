import { playervariablelol } from "../firebase/uploadStats";

export let gameState = -1;
/*
-2 means that people are still queuing
-1 means that people are done
0 means that deck is done dealing

repeat these steps until turn xyz
1 means that the bidding phase has begun
2 means that person is choosing tile
3 means that the bidding phase is over and the person is choosing
4 means that people can buy fert?? or buy cards


5 means the endscreen
*/


//use modulo to figure out who chooses the tile
export let turnnumber = [-1];

export let playercash = [50, 50, 50, 50];

export let playername = ["broth alt", "broth alt", "broth alt", "broth alt"];

export let playerpassword = ["", "", "", ""];

export let playerbid = [-1, -1, -1, -1];

export let bidtile = [0, 0];

export let currentplayercommonplants = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export let currentplayerspecialplants = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export let currentplayeruniqueplants = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


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
        passwordPlayer: "",
        usernamePlayer: "",
    }
};

//tomato = player 1, yellow = player 2, lightgreen = player 3, lightblue = player 4
export let colourArr = [["grey", "grey", "grey", "grey", "grey", "grey"], ["grey", "grey", "grey", "grey", "grey", "grey"], ["grey", "grey", "grey", "grey", "grey", "grey"], ["grey", "grey", "grey", "grey", "grey", "grey"], ["grey", "grey", "grey", "grey", "grey", "grey"], ["grey", "grey", "grey", "grey", "grey", "grey"]];

export let plantIndexArr = [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1]];

export let plantTypeArr = [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]];

export let pointsBoard = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

//the currentplayer number represents the player they are (1 is player 1 2 is player 2 etc.) does the same thing as currentplayer idk man
export let currentplayer = [-1];

export let currentPlayerStringForm = [""];

//fuck i dont know how to store available plants
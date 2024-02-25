"use client"
import {
    Button,
    Modal,
    TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import React from "react";
import { uploadToWho, getPlayerStats, getAllPlayerStats, playerObjectForCurrent, makeNewPlayer, submitPlayerData, resetBoard, boardObjectForCurrent } from "../firebase/uploadStats";
import { playerbid, currentplayer, playercash, playername, currentPlayerStringForm, colourArr, bidtile, playerDataUploadPlease } from "../variables/list";
// const document = getDoc(doc(db, "CustomPower", "Weights"));
// too lazy to make a clean implementation

// async function getStatsAsync() {
//     console.log("fetching stats hi");
//     // await getPlayerStats();
//     console.log("broth gang we'll call from firebase");
// }
// function dataUpload() {
//     playerDataUploadPlease = {
//         IncomePlayer: {
//             bidPlayer: playerbid[currentplayer[0]],
//             cashPlayer: playercash[currentplayer[0]],
//         },
//         PlantsHave: {
//             commonPlants: {
//                 a1: currentplayercommonplants[0],
//                 a2: currentplayercommonplants[1],
//                 a3: currentplayercommonplants[2],
//                 a4: currentplayercommonplants[3],
//                 a5: currentplayercommonplants[4],
//                 a6: currentplayercommonplants[5],
//                 a7: currentplayercommonplants[6],
//                 a8: currentplayercommonplants[7],
//                 a9: currentplayercommonplants[8],
//                 a10: currentplayercommonplants[9],
//             },
//             specialPlants: {
//                 a1: currentplayerspecialplants[0],
//                 a2: currentplayerspecialplants[1],
//                 a3: currentplayerspecialplants[2],
//                 a4: currentplayerspecialplants[3],
//                 a5: currentplayerspecialplants[4],
//                 a6: currentplayerspecialplants[5],
//                 a7: currentplayerspecialplants[6],
//                 a8: currentplayerspecialplants[7],
//                 a9: currentplayerspecialplants[8],
//                 a10: currentplayerspecialplants[9],
//             },
//             uniquePlants: {
//                 a1: currentplayeruniqueplants[0],
//                 a2: currentplayeruniqueplants[1],
//                 a3: currentplayeruniqueplants[2],
//                 a4: currentplayeruniqueplants[3],
//                 a5: currentplayeruniqueplants[4],
//                 a6: currentplayeruniqueplants[5],
//                 a7: currentplayeruniqueplants[6],
//                 a8: currentplayeruniqueplants[7],
//                 a9: currentplayeruniqueplants[8],
//                 a10: currentplayeruniqueplants[9],
//             }
//         },
//         PlayerLoginInfo: {
//             passwordPlayer: playerpassword[currentplayer[0]],
//             usernamePlayer: playername[currentplayer[0]],
//         }
//     }
// }
async function getPlayer() {

    let dcmoron = "";
    // if(document.cookie.match(/^(.*;)?\s*MyCookie\s*=\s*[^;]+(.*)?$/)){
    //     dcmoron = document.cookie;
    // }
    if (localStorage.hasOwnProperty("currentplayer")) {
        dcmoron = localStorage.getItem("currentplayer");
    } else {
        dcmoron = "heyitsbrothgang";
    }
    if (dcmoron == "heyitsbrothgang") {
        console.log('BROTH GANG! WE TRIED TO DESTROY TURF TACTICS [AND FAILED L YOU]');
        console.log('broth check dms on your main [from inconspicuousaltacc]');
    }
    if (dcmoron == "swordslash8") {
        currentplayer[0] = 1;
        currentPlayerStringForm[0] = "player1";
    } else if (dcmoron == "ketchmantra") {
        currentplayer[0] = 2;
        currentPlayerStringForm[0] = "player2";
    } else if (dcmoron == "zhell") {
        currentplayer[0] = 3;
        currentPlayerStringForm[0] = "player3";
    } else if (dcmoron == "dramacren") {
        currentplayer[0] = 4;
        currentPlayerStringForm[0] = "player4";
    }

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
    await getPlayerStats();
}
function TheBoard() {

    useEffect(() => {
        getAllPlayerStats().catch(console.error);
    }, []);
    return (
        <><div
            style={{


            }}
        >
            {/* MAKE CLASSES FOR BOARD COLOURS */}
            <Button
                style={{ height: '100px', width: '100px', border: '2px solid #000' }}
                variant="filled"
                color={colourArr[0][0]}
                id="left"
            >

            </Button>
            <Button
                style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                variant="filled"
                color={colourArr[1][0]}
                id="left"
            >

            </Button>
            <Button
                style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                variant="filled"
                color={colourArr[2][0]}
                id="left"
            >
            </Button>
            <Button
                style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                variant="filled"
                color={colourArr[3][0]}
                id="left"
            >
            </Button>
            <Button
                style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                variant="filled"
                color={colourArr[4][0]}
                id="left"
            >
            </Button>
            <Button
                style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                variant="filled"
                color={colourArr[5][0]}
                id="left"
            >
            </Button>
        </div><div
            style={{


            }}
        >
                {/* MAKE CLASSES FOR BOARD COLOURS */}
                <Button
                    style={{ height: '100px', width: '100px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[0][1]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[1][1]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[2][1]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[3][1]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[4][1]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[5][1]}
                    id="left"
                >
                </Button>
            </div><div
                style={{


                }}
            >
                {/* MAKE CLASSES FOR BOARD COLOURS */}
                <Button
                    style={{ height: '100px', width: '100px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[0][2]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[1][2]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[2][2]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[3][2]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[4][2]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[5][2]}
                    id="left"
                >
                </Button>
            </div><div
                style={{

                }}
            >
                {/* MAKE CLASSES FOR BOARD COLOURS no nvm*/}
                <Button
                    style={{ height: '100px', width: '100px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[0][3]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[1][3]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[2][3]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[3][3]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[4][3]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[5][3]}
                    id="left"
                >
                </Button>
            </div>
            <div
                style={{

                }}
            >
                {/* MAKE CLASSES FOR BOARD COLOURS NONONOANONOHELPHEKP */}
                <Button
                    style={{ height: '100px', width: '100px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[0][4]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[1][4]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[2][4]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[3][4]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[4][4]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[5][4]}
                    id="left"
                >
                </Button>
            </div><div
                style={{


                }}
            >
                {/* MAKE CLASSES FOR BOARD COLOURS */}
                <Button
                    style={{ height: '100px', width: '100px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[0][5]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[1][5]}
                    id="left"
                >

                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[2][5]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[3][5]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[4][5]}
                    id="left"
                >
                </Button>
                <Button
                    style={{ height: '100px', width: '100px', outline: '3px', border: '2px solid #000' }}
                    variant="filled"
                    color={colourArr[5][5]}
                    id="left"
                >
                </Button>
            </div></>
    );
}

function DisplayCashPlayers() {
    useEffect(() => {
        getAllPlayerStats().catch(console.error);
    }, []);
    const [playern1, setplayern1] = useState("");
    const [playern2, setplayern2] = useState("");
    const [playern3, setplayern3] = useState("");
    const [playern4, setplayern4] = useState("");
    const [playerc1, setplayerc1] = useState(0);
    const [playerc2, setplayerc2] = useState(0);
    const [playerc3, setplayerc3] = useState(0);
    const [playerc4, setplayerc4] = useState(0);
    const renderthisnow = () => {
        setplayern1(playername[0]);
        setplayern2(playername[1]);
        setplayern3(playername[2]);
        setplayern4(playername[3]);
        setplayerc1(playercash[0]);
        setplayerc2(playercash[1]);
        setplayerc3(playercash[2]);
        setplayerc4(playercash[3]);
    }
    const yourlifeisnothingyouserveeropurposeyoushouldkillyourselfNOWandgive = setInterval(async () => {
        // console.log("fetching stats");
        // await getAllPlayerStats();
        renderthisnow();
        // console.log("broth gang we called from firebase in game");
        //commented this out because i really dont want to deal with firebase killing itself
    }, 3000)
    return (
        <div
            style={{
                margin: "auto",
                left: "80%",
                top: '0%',
                position: "absolute",
            }}
        >
            {/* REFER TO THIS FOR COLOURS */}
            <h1 style={{ background: "tomato", color: "black" }}>{playern1}'s cash: {playerc1}</h1>
            <h1 style={{ background: "yellow", color: "black" }}>{playern2}'s cash: {playerc2}</h1>
            <h1 style={{ background: "lightgreen", color: "black" }}>{playern3}'s cash: {playerc3}</h1>
            <h1 style={{ background: "lightblue", color: "black" }}>{playern4}'s cash: {playerc4}</h1>
        </div>
    )
}

function PutBidCorrectPersonReal() {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const bidlocation = "Which tile would you like to bid on?";

    const open = () => setOpened(true);
    const close = () => {
        setOpened(false);
        setError("");
    };

    const handleBid = () => {
        if (value.length !== 2 || isNaN(Number(value))) {
            setError("Please enter a 2 digit number representing the x and y coordinates broth gang!");
            return;
        }

        const x = parseInt(value.charAt(0), 10) - 1;
        const y = parseInt(value.charAt(1), 10) - 1;

        if (x < 1 || y < 1 || x > 6 || y > 6) {
            setError("Bid on an actual tile L you");
            return;
        }
        if (colourArr[y][x] !== "grey") {
            setError("You can only bid on unoccupied tiles L you L you L you");
            return;
        }
        playerbid[currentplayer[0]] = parseInt(value);
        close();
    };

    return (
        <>
            <Modal opened={opened} onClose={close} title="Where do you want to bid? (2 digit number representing the x and y coordinates of the tile)">
                <>
                    <TextInput
                        value={value}
                        placeholder={bidlocation}
                        onChange={(event) => setValue(event.currentTarget.value)}
                        error={error}
                        style={{ marginBottom: "10%" }}
                    />
                    <Button
                        variant="filled"
                        color="green"
                        onClick={handleBid}
                        style={{ marginRight: "70%" }}
                    >
                        Yes
                    </Button>
                    <Button variant="filled" color="red" onClick={close}>
                        No
                    </Button>
                </>
            </Modal>

            <div
                style={{
                    left: "43%",
                    top: "10%",
                    position: "fixed",
                }}
            >
                <Button
                    variant="filled"
                    color="green"
                    id="right"
                    size="xl"
                    onClick={open}
                >
                    Place Bid Location
                </Button>
            </div>
        </>
    );
}



function EnterBid() {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const bidvalue = "You are bidding for the tile (" + bidtile[0] + ", " + bidtile[1] + ") with a max of " + playercash[currentplayer[0]] + " cash";
    const open = () => setOpened(true);
    const close = () => {
        setOpened(false);
        setError("");
    };
    const handleBid = () => {
        let thing = parseInt(value);
        if (thing < 0) {
            setError("bro im not paying you to own property");
            return;
        }
        if (thing > playercash[currentplayer[0]]) {
            setError("debt is illegal in these parts");
            return;
        }
        playerbid[currentplayer[0]] = parseInt(value);
        close();
    };
    return (
        <>
            <Modal opened={opened} onClose={close} title="What do you want to bid?">
                {
                    <>
                        <TextInput
                            value={value}
                            placeholder={bidvalue}
                            onChange={(event) => setValue(event.currentTarget.value)}
                            error={error}
                            style={{ marginBottom: "10%" }}
                        />
                        <Button
                            variant="filled"
                            color="green"
                            onClick={() => {
                                playerbid[currentplayer[0]] = parseInt(value);
                                close();
                            }}
                            style={{ marginRight: "70%" }}
                        >
                            Yes
                        </Button>
                        <Button variant="filled" color="red" onClick={() => close()}>
                            No
                        </Button>
                    </>
                }
            </Modal>

            <div
                style={{
                    left: "45%",
                    top: '20%',
                    position: "fixed",
                }}
            >
                <Button
                    variant="filled"
                    // make it unhighlighted or disappear when it is out of bidding phase
                    color="green"
                    id="right"
                    size="xl"
                    onClick={open}
                >
                    Place Bids
                </Button>
            </div>
        </>
    );
}


function PullFromFirebase() {
    return (
        <Button variant="filled" color="red" onClick={async () => {
            uploadToWho[0] = "";
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
            console.log(uploadToWho[0] + " pull");
            await getPlayerStats();
            await console.log(playerObjectForCurrent);
        }}>
            pullfirebase
        </Button>
    );
}
function Clickincrement() {
    return (
        <Button variant="filled" color="red" onClick={async () => {
            playercash[currentplayer[0]]++;
            playerObjectForCurrent.IncomePlayer.cashPlayer++;
            await submitPlayerData({ playerDataUploadPlease });
        }}>
            click to add 1 to your player
        </Button>
    );
}

function Makeanewplayer() {
    return (
        <Button variant="filled" color="red" onClick={async () => {
            makeNewPlayer({ playerDataUploadPlease });
        }}>
            makenewplayer if you find this well fuck you angry emoji dm me if you manage to exploit this
        </Button>
    );
}
function Resettheboard() {
    return (
        <Button variant="filled" color="red" onClick={async () => {
            resetBoard();
        }}>
            resetBoard if you find this well fuck you angry emoji dm me if you manage to exploit this
        </Button>
    );
}

function UploadToFirebase() {
    return (
        <Button variant="filled" color="red" onClick={async () => {
            uploadToWho[0] = "";
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
            console.log(uploadToWho[0] + " push");
            await submitPlayerData({ playerDataUploadPlease });
            await console.log(playerObjectForCurrent);
        }}>
            pushfirebase
        </Button>
    );
}
export default function Home() {
    const [matchState, setMatchState] = useState(0);
    getPlayer();
    return (
        <>
            <TheBoard />
            <DisplayCashPlayers />
            <EnterBid />
            <PutBidCorrectPersonReal />
            <Clickincrement />
            {/* <UploadToFirebase />
            <PullFromFirebase />
            <Makeanewplayer />
            <Resettheboard /> */}
        </>
    )
}
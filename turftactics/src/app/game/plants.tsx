import {
    colourArr,
    plantIndexArr,
    plantTypeArr,
    pointsBoard,
} from "../variables/list";

export async function calculateOwnership(section: number) {
    /*
      1 2 3
      4 5 6
      7 8 9
      section works like this, hardcode
      */
    if (section == 1) {
    }
}
export async function scoreTile(xpos: number, ypos: number) {
    let type = plantTypeArr[xpos][ypos];
    let index = plantIndexArr[xpos][ypos];
    let owner = colourArr[xpos][ypos];
    if (type == "commonPlants") {
        if (index == 1) {
            pointsBoard[xpos][ypos] += 1;
        } else if (index == 2) {
            pointsBoard[xpos][ypos] += 2;
        } else if (index == 3) {
            pointsBoard[xpos][ypos] += 3;
        } else if (index == 4) {
            pointsBoard[xpos][ypos] += 4;
        } else if (index == 5) {
            pointsBoard[xpos][ypos] += 5;
        } else if (index == 6) {
            pointsBoard[xpos][ypos] += 6;
        }
    } else if (type == "uniquePlants") {
        if (index == 1) {
            let addpoints = 0;
            if (ypos - 1 >= 0 && xpos - 1 >= 0 && ypos - 1 <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos - 1] != "grey") {
                    addpoints++;
                }
            }
            if (ypos - 1 >= 0 && xpos >= 0 && ypos - 1 <= 5 && xpos <= 5) {
                if (colourArr[xpos][ypos - 1] != "grey") {
                    addpoints++;
                }
            }
            if (ypos - 1 >= 0 && xpos + 1 >= 0 && ypos - 1 <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos - 1] != "grey") {
                    addpoints++;
                }
            }
            if (ypos >= 0 && xpos - 1 >= 0 && ypos <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos] != "grey") {
                    addpoints++;
                }
            }
            if (ypos >= 0 && xpos + 1 >= 0 && ypos <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos] != "grey") {
                    addpoints++;
                }
            }
            if (ypos + 1 >= 0 && xpos - 1 >= 0 && ypos + 1 <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos + 1] != "grey") {
                    addpoints++;
                }
            }
            if (ypos + 1 >= 0 && xpos >= 0 && ypos + 1 <= 5 && xpos <= 5) {
                if (colourArr[xpos][ypos + 1] != "grey") {
                    addpoints++;
                }
            }
            if (ypos + 1 >= 0 && xpos + 1 >= 0 && ypos + 1 <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos + 1] != "grey") {
                    addpoints++;
                }
            }
            pointsBoard[xpos][ypos] += addpoints;
        } else if (index == 2) {
            pointsBoard[xpos][ypos] += 4;
        } else if (index == 3) {
            pointsBoard[xpos][ypos] += 3;
        } else if (index == 4) {
            pointsBoard[xpos][ypos] += 4;
        } else if (index == 5) {
            let addpoints = 6;
            if (ypos - 1 >= 0 && xpos - 1 >= 0 && ypos - 1 <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos - 1] != "grey") {
                    addpoints--;
                }
            }
            if (ypos - 1 >= 0 && xpos >= 0 && ypos - 1 <= 5 && xpos <= 5) {
                if (colourArr[xpos][ypos - 1] != "grey") {
                    addpoints--;
                }
            }
            if (ypos - 1 >= 0 && xpos + 1 >= 0 && ypos - 1 <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos - 1] != "grey") {
                    addpoints--;
                }
            }
            if (ypos >= 0 && xpos - 1 >= 0 && ypos <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos] != "grey") {
                    addpoints--;
                }
            }
            if (ypos >= 0 && xpos + 1 >= 0 && ypos <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos] != "grey") {
                    addpoints--;
                }
            }
            if (ypos + 1 >= 0 && xpos - 1 >= 0 && ypos + 1 <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos + 1] != "grey") {
                    addpoints--;
                }
            }
            if (ypos + 1 >= 0 && xpos >= 0 && ypos + 1 <= 5 && xpos <= 5) {
                if (colourArr[xpos][ypos + 1] != "grey") {
                    addpoints--;
                }
            }
            if (ypos + 1 >= 0 && xpos + 1 >= 0 && ypos + 1 <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos + 1] != "grey") {
                    addpoints--;
                }
            }
            pointsBoard[xpos][ypos] += addpoints;
        } else if (index == 6) {
            pointsBoard[xpos][ypos] += 2;
        } else if (index == 7) {
            pointsBoard[xpos][ypos] += 3;
        } else if (index == 8) {
            if (ypos - 1 >= 0 && xpos - 1 >= 0 && ypos - 1 <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos - 1] == owner) {
                    pointsBoard[xpos - 1][ypos - 1] += 2;
                }
            }
            if (ypos - 1 >= 0 && xpos >= 0 && ypos - 1 <= 5 && xpos <= 5) {
                if (colourArr[xpos][ypos - 1] == owner) {
                    pointsBoard[xpos][ypos - 1] += 2;
                }
            }
            if (ypos - 1 >= 0 && xpos + 1 >= 0 && ypos - 1 <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos - 1] == owner) {
                    pointsBoard[xpos + 1][ypos - 1] += 2;
                }
            }
            if (ypos >= 0 && xpos - 1 >= 0 && ypos <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos] == owner) {
                    pointsBoard[xpos - 1][ypos] += 2;
                }
            }
            if (ypos >= 0 && xpos + 1 >= 0 && ypos <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos] == owner) {
                    pointsBoard[xpos + 1][ypos] += 2;
                }
            }
            if (ypos + 1 >= 0 && xpos - 1 >= 0 && ypos + 1 <= 5 && xpos - 1 <= 5) {
                if (colourArr[xpos - 1][ypos + 1] == owner) {
                    pointsBoard[xpos - 1][ypos + 1] += 2;
                }
            }
            if (ypos + 1 >= 0 && xpos >= 0 && ypos + 1 <= 5 && xpos <= 5) {
                if (colourArr[xpos][ypos + 1] == owner) {
                    pointsBoard[xpos][ypos + 1] += 2;
                }
            }
            if (ypos + 1 >= 0 && xpos + 1 >= 0 && ypos + 1 <= 5 && xpos + 1 <= 5) {
                if (colourArr[xpos + 1][ypos + 1] == owner) {
                    pointsBoard[xpos + 1][ypos + 1] += 2;
                }
            }
            pointsBoard[xpos][ypos] += 1;
        } else if (index == 9) {
            if (xpos == 0 && ypos == 0) {
                pointsBoard[xpos][ypos] += 6;
            } else if (xpos == 5 && ypos == 0) {
                pointsBoard[xpos][ypos] += 6;
            } else if (xpos == 0 && ypos == 5) {
                pointsBoard[xpos][ypos] += 6;
            } else if (xpos == 5 && ypos == 5) {
                pointsBoard[xpos][ypos] += 6;
            } else {
                pointsBoard[xpos][ypos] += 2;
            }
        }
    } else if (type == "specialPlants") {
        let streak = 0;
        let flagx = 0;
        let flagy = 0;
        let indexbeginx = 0;
        let indexbeginy = 0;
        let savestreakx = 0;
        let savestreaky = 0;
        pointsBoard[xpos][ypos] += 3;
        if (index == 1) {
            for (let i = 0; i <= 5; i++) {
                if (colourArr[i][ypos] != "grey") {
                    streak++;
                    if (streak == 1) {
                        indexbeginx = i;
                    }
                } else {
                    streak = 0;
                }
                if (streak >= 4) {
                    flagx = 1;
                    savestreakx = streak;
                }
            }
            if (flagx == 1) {
                for (let i = indexbeginx; i <= indexbeginx + savestreakx; i++) {
                    pointsBoard[i][ypos] += 3;
                }
            }
            streak = 0;

            for (let i = 0; i <= 5; i++) {
                if (colourArr[xpos][i] != "grey") {
                    streak++;
                    if (streak == 1) {
                        indexbeginy = i;
                    }
                } else {
                    streak = 0;
                }
                if (streak >= 4) {
                    flagy = 1;
                    savestreaky = streak;
                }
            }
            if (flagy == 1) {
                for (let i = indexbeginy; i <= indexbeginy + savestreaky; i++) {
                    pointsBoard[xpos][indexbeginy] += 3;
                }
            }
            if (flagy == 1 && flagx == 1) {
                pointsBoard[xpos][ypos] -= 3;
            }
        }else if(index == 2){
            //logic wrong
        }else if(index == 3){
            pointsBoard[xpos][ypos] += 10;
        }else if(index == 4){
            //fuck the logic is worng
        }
    }
}

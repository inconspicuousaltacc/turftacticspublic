'use client'
import { Modal, TextInput, Button } from "@mantine/core";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { db } from "./firebase/firebase";
import { uploadToWho, getPlayerStats, playerObjectForCurrent, submitPlayerData, getAllPlayerStats, playerDataUploadPlease } from "./firebase/uploadStats";
import { playername, currentplayer, playerpassword, currentPlayerStringForm } from "./variables/list";
import Image from 'next/image';
import plantlist from "./img/ACTUALFILEPLANTLIST.png";
if (db != null) { }
const provider = new GoogleAuthProvider();
//in case someone wants to broth gang ill implement this later

<html>
  <body>
  </body>
</html>
function SignupButton() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const placeholdtext = "Do not name yourself undercoverbroth or broth alt";

  const open = () => setOpened(true);
  const close = () => {
    setOpened(false);
    setError("");
  };

  // recycled too lazy
  const handleBid = async () => {
    if (value == "undercoverbroth" || value == "broth alt") {
      setError("Congratulations, you passed the test. https://discord.gg/asGf8wcC6z");
      return;
    }
    console.log(playername[0], playername[1], playername[2], playername[3]);
    if (playername[0] == "broth alt") {
      currentplayer[0] = 1;
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
      await getPlayerStats();
      playername[0] = value;
      playerpassword[0] = valuePassword;
      playerObjectForCurrent.PlayerLoginInfo.usernamePlayer = playername[0];
      playerObjectForCurrent.PlayerLoginInfo.passwordPlayer = playerpassword[0];
      await submitPlayerData({ playerDataUploadPlease });
      currentplayer[0] = -1;
    } else if (playername[1] == "broth alt") {
      currentplayer[0] = 2;
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
      await getPlayerStats();
      playername[1] = value;
      playerpassword[1] = valuePassword;
      playerObjectForCurrent.PlayerLoginInfo.usernamePlayer = playername[1];
      playerObjectForCurrent.PlayerLoginInfo.passwordPlayer = playerpassword[1];
      await submitPlayerData({ playerDataUploadPlease });
      currentplayer[0] = -1;
    } else if (playername[2] == "broth alt") {
      currentplayer[0] = 3;
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
      await getPlayerStats();
      playername[2] = value;
      playerpassword[2] = valuePassword;
      playerObjectForCurrent.PlayerLoginInfo.usernamePlayer = playername[2];
      playerObjectForCurrent.PlayerLoginInfo.passwordPlayer = playerpassword[2];
      await submitPlayerData({ playerDataUploadPlease });
      currentplayer[0] = -1;
    } else if (playername[3] == "broth alt") {
      currentplayer[0] = 4;
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
      await getPlayerStats();
      playername[3] = value;
      playerpassword[3] = valuePassword;
      playerObjectForCurrent.PlayerLoginInfo.usernamePlayer = playername[3];
      playerObjectForCurrent.PlayerLoginInfo.passwordPlayer = playerpassword[3];
      await submitPlayerData({ playerDataUploadPlease });
      currentplayer[0] = -1;
    }
    if (playername[3] != "broth alt") {
      setError("we are full unlucky! broth gang, we'll destroy this tournament! if someone has taken your spot, dm inconspicuousaltacc");
      return;
    }
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="What is your name?">
        <>
          <TextInput
            value={value}
            placeholder={placeholdtext}
            onChange={(event) => setValue(event.currentTarget.value)}
            error={error}
            style={{ marginBottom: "10%" }}
          />
          <TextInput
            value={valuePassword}
            placeholder={"make a password PLEASE REMEMBER IT OR ELSE"}
            onChange={(event) => setValuePassword(event.currentTarget.value)}
            error={error}
            style={{ marginBottom: "20%" }}
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
          left: "46.5%",
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
          Sign Up
        </Button>
      </div>
    </>
  );
}

async function getStatsAsync() {
  console.log("fetching stats hi");
  await getAllPlayerStats();
  console.log("broth gang we'll call from firebase");
}
function SigninButton() {
  useEffect(() => {
    getStatsAsync().catch(console.error);
  }, []);
  // console.log(playername[0]+" "+playername[1]+" "+playername[2]+" "+playername[3]+" ");
  // console.log(playerpassword[0]+" "+playerpassword[1]+" "+playerpassword[2]+" "+playerpassword[3]+" ");
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const placeholdtext = "enter username";
  const open = () => setOpened(true);
  function openandfirebase() {
    setOpened(true);
    getStatsAsync();
  }
  const close = () => {
    setOpened(false);
    setError("");
  };

  // recycled too lazy
  const handleBid = () => {
    let flag = false;
    if (playername[0] == value) {
      if (playerpassword[0] != "") {
        if (playerpassword[0] == valuePassword) {
          currentplayer[0] = 1;
          console.log(currentplayer[0]);
          currentPlayerStringForm[0] = "player1";
          // document.cookie = "swordslash8";
          localStorage.setItem("currentplayer", "swordslash8");
          window.location.assign("/game");
        } else {
          setError("yeah nice try buddy (broth)");
          return;
        }
      } else {
        setError("yeah nice try buddy (broth)");
        return;
      }
    } else if (playername[1] == value) {
      if (playerpassword[1] != "") {
        if (playerpassword[1] == valuePassword) {
          currentplayer[0] = 2;
          console.log(currentplayer[0]);
          currentPlayerStringForm[0] = "player2";
          // document.cookie = "ketchmantra";
          localStorage.setItem("currentplayer", "ketchmantra");
          window.location.assign("/game");
        } else {
          setError("yeah nice try buddy (broth)");
          return;
        }
      } else {
        setError("yeah nice try buddy (broth)");
        return;
      }
    } else if (playername[2] == value) {
      if (playerpassword[2] != "") {
        if (playerpassword[2] == valuePassword) {
          currentplayer[0] = 3;
          console.log(currentplayer[0]);
          currentPlayerStringForm[0] = "player3";
          // document.cookie = "zhell";
          localStorage.setItem("currentplayer", "zhell");
          window.location.assign("/game");
        } else {
          setError("yeah nice try buddy (broth)");
          return;
        }
      } else {
        setError("yeah nice try buddy (broth)");
        return;
      }
    } else if (playername[3] == value) {
      if (playerpassword[3] != "") {
        if (playerpassword[3] == valuePassword) {
          currentplayer[0] = 4;
          console.log(currentplayer[0]);
          currentPlayerStringForm[0] = "player4";
          // document.cookie = "dramacren";
          localStorage.setItem("currentplayer", "dramacren");
          window.location.assign("/game");
        } else {
          setError("yeah nice try buddy (broth)");
          return;
        }
      } else {
        setError("yeah nice try buddy (broth)");
        return;
      }
    } else {
      setError("yeah nice try buddy (broth)");
      return;
    }
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="enter login details">
        <>
          <TextInput
            value={value}
            placeholder={placeholdtext}
            onChange={(event) => setValue(event.currentTarget.value)}
            error={error}
            style={{ marginBottom: "10%" }}
          />
          <TextInput
            value={valuePassword}
            placeholder={"enter password"}
            onChange={(event) => setValuePassword(event.currentTarget.value)}
            error={error}
            style={{ marginBottom: "20%" }}
          />
          <Button
            variant="filled"
            color="green"
            onClick={handleBid}
            style={{ marginRight: "70%" }}
          >
            Proceed
          </Button>
          <Button variant="filled" color="red" onClick={close}>
            Exit
          </Button>
        </>
      </Modal>

      <div
        style={{
          left: "41%",
          top: "20%",
          position: "fixed",
        }}
      >
        <Button
          variant="filled"
          color="green"
          id="right"
          size="xl"
          onClick={openandfirebase}
        >
          Sign In (proceed to game)
        </Button>
      </div>
    </>
  );
}
export default function Home() {
  return (
    <>
      <SignupButton />
      <SigninButton />
      <div>
        <Image
          style={{
            marginTop: "15%",

            height: '80%',

            width: '80%',
          }}
          src={plantlist}
          alt="List of Plants"
        />
      </div>
    </>
  )
}
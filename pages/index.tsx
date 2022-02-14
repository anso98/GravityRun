import type { NextPage } from 'next';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
/*import styled from 'styled-components';*/
import Unity, { UnityContext } from "react-unity-webgl";

import { useMemo, useState } from 'react';
import * as anchor from '@project-serum/anchor'
import {
  useWallet
} from '@solana/wallet-adapter-react';
import {
    CandyMachineAccount,
    getCandyMachineState,
    mintOneToken,
  } from '../components/candy-machine';
import { Autocomplete, Button } from '@mui/material';
import Message from '../components/Message';
import {MessageProp} from '../components/Message';
import {getParsedNftAccountsByOwner} from "@nfteyez/sol-rayz"
import { height } from '@mui/system';
import { assert } from 'console';
import axios from "axios";


 /* ------------------------------------------ Initialise APIs -------------------------------------------- */
var unityContext = new UnityContext({
  loaderUrl: "unitybuild/GravityRunWebGL.loader.js",
  dataUrl: "unitybuild/GravityRunWebGL.data",
  frameworkUrl: "unitybuild/GravityRunWebGL.framework.js",
  codeUrl: "unitybuild/GravityRunWebGL.wasm",
  });

   // set the host to Devnet
   const rpcHost = 'https://api.devnet.solana.com'
     
   // establish a new connection to the solana devnet
    const connection = new anchor.web3.Connection(rpcHost
     ? rpcHost
     : anchor.web3.clusterApiUrl('devnet')); 


/* This function returns the layout of the hompage, including two buttons to connect and disconnect the wallet*/
const Home: NextPage = () => {   
  
  /* ------------------------------------------ Minting Functions -------------------------------------------- */
  // call to useWallet function to get the info about connected wallet, like the public key
  const wallet = useWallet(); 

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      console.log("Wallet Not Connected")
      return;
    }
    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as typeof anchor.Wallet;
  }, [wallet]);
   
    
    //function declaration -> the setCandyMachine function determines the candyMachine variable
    const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
    const candyRef = useRef<CandyMachineAccount>();
    // takes the wallet variable initialised above and creates an anchorWallet i.e. a Wallet usable by Anchor client
    
  useEffect(() => {
    candyRef.current = candyMachine;
  }, [candyMachine])

  const Mint = async() => { 
    
    // turnes the public key string below into a public key object (required for the next functions)
    const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
      try {
        const candyMachineId = new anchor.web3.PublicKey(
          "FoKWBLLNX3HrCTh6MDr1hUWLecDEEgBx7pjULqa4kadd"
        ); 
        return candyMachineId; // returns the candyMachineID
      } catch (e) {
        console.log('Failed to construct CandyMachineId', e);
        return undefined;
      }
    };
    // calls the above function to construct the public key object
    const candyMachineId = getCandyMachineId()

      // gets the state of the candy machine on the blockchain and stores this with setCandyMachine 
      // in the candyMachine variable declared above
      var cndy: CandyMachineAccount;
      if(anchorWallet && candyMachineId){
        cndy = await getCandyMachineState(
         anchorWallet,
         candyMachineId,
         connection,
        );
        setCandyMachine(cndy);
      } 
    
    // if the wallet is connected and both the candyMachine and wallet PubKey are not NULL, then mint
    // using the candy machine stored in the candyMachine variable and the wallet Public key of the user
    console.log(wallet.connected)
    console.log(wallet.publicKey)
    var machine: CandyMachineAccount | undefined = candyMachine
    if(candyMachine == undefined)
      machine = cndy!;
    if (wallet.connected && machine!.program && wallet.publicKey){
        await mintOneToken(machine!, wallet.publicKey)
        console.log("minted")
        send("minted")
    }
  
  }

  /* -------------------------------- Reading NFT Data from Wallet in variable -------------------------------- */

  // Create relevant NFT data interface used
  interface relevantNFT {
    name: string;
    uri: string;
    mint: string;
  }
 
  // Declare state variables
  const [NFTNameArray, setNFTNameArray] = useState<string[]>([]);
  const nameRef = useRef<string []>();

  const creator_id = 'AVabPm3PB7JxaNND5UKJRXQh4XRY4Mwjkg2nGAEG3TGn';
  const [reader, setReader] = useState<NodeJS.Timeout>()
  const [gameLoaded, setLoaded] = useState<boolean>()
  const [log, setLog] = useState(0);

    // Used to update a reference about the state of the NFTNameArray
      useEffect(() => {
        nameRef.current = NFTNameArray;
      },[NFTNameArray])
      
      // Async functions to get the wallet -> NFT Data
      const walletReader = async () => { 
        if(wallet.connected && wallet.publicKey){
          
          // Get wallet content
          const walletContent = await getParsedNftAccountsByOwner({
            publicAddress: wallet.publicKey,
            connection: connection,
          });

          // Check if Wallet contains any NFTs
          if(walletContent == null){
            return;
          }
          // Transfer NFTnames to temp Array if they are game-relevant NFTs
          let tempNFTNameArray: Array<string> = [];
          for(let i = 0; i < walletContent.length; i++){
            if (walletContent[i].data.creators[1].address == creator_id){
              tempNFTNameArray.push(walletContent[i].data.name)
              console.log("test")
            }
          }
          // Check whether Array has changed 
          // Todo: edge case if length is not the same, then check for changes
          console.log("checked for difference")
          if (tempNFTNameArray.length != nameRef.current!.length){
            setNFTNameArray(tempNFTNameArray);
            console.log(tempNFTNameArray)
            let msgArray = tempNFTNameArray.join("+");
            send(msgArray) // Send information to unity!
            console.log("sent update");
          }   
        }
      }

      // Called when there is log notification sent by solana  - any transaction!
      useEffect(() => {
        walletReader()
      }, [wallet.connected, gameLoaded,log])

      // every 30 seconds check again
      useEffect(() => { 
        if(reader != undefined){
          clearInterval(reader)
        }
        console.log("new interval")
        if(wallet.connected){
          setReader(setInterval(walletReader,30000))
        }
      }, [wallet.connected, gameLoaded,log])

      // Implements the log -> makes sure we get log information
      useEffect(() => {
        if(wallet.connected){
          connection.onLogs(wallet.publicKey!, (changes) => {console.log("logged changes", changes); setLog(state => state+1)})
        }
      }, [wallet.connected, gameLoaded])

      // checking mechanismn is initalised only when game was loaded
      unityContext.on("loaded", () => {
        setLoaded(true)
      });
    
   

   /* ------------------------------------------ Unity Interaction -------------------------------------------- */
 
  // Full screen handler
  function handleOnClickFullscreen() {
    if(unityContext)
      unityContext.setFullscreen(true);
  }

  //send message to unity
  function send(message: string | boolean ){
    console.log("function called")
    console.log("message is:", message)
    message = "Message is: " + message;
    unityContext!.send("Inventory", "GetNFTData", message)
  }

  // Event Listener for Mint Event
  if(unityContext) {
    unityContext.on("Mint", async () => {
      const result = await Mint()
      walletReader()
    });
  }

  /* ------------------------------------------ Page Content -------------------------------------------- */

  return (
    <div>
      <Head>
        <title>NFT Games</title>
      </Head>
            <h1 className={styles.title}>NFT Games</h1>
     <main className={styles.main}> 
       <div className={styles.walletButtons}>  
         <WalletMultiButton />
         <WalletDisconnectButton />
         <button onClick={handleOnClickFullscreen}> fullscreen </button>
       </div>
       
       <Unity
          unityContext={unityContext!}
          style={{
            height: "10%",
            width: 950,
            border: "2px solid black",
            background: "grey",
      }}/>
    </main>
 </div>
  );

};

export default Home;

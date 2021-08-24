// import ReactDOM from "react-dom";
// import axios from 'axios';
import React, { createElement, useEffect, useRef, useState } from "react";
import { Button } from "./modules/styledComponents";
import { content } from "./modules/tempAPI";

// Hooks 
import { useFullscreen } from "./modules/useFullScreen";
import { useInput, useTabs, useTitle, useClick, useHover, useConfirm, usePreventLeave, useFadeIn, useNetwork, useScroll, useFullScreen, useNotification } from "./modules/exports"
// funcs
import { sayHello, mouseHover } from "./modules/exports"
import { elementType } from "prop-types";
import useAxios from "./modules/useAxios";

const App = () => {

    // console.clear()

    // useInput - 입력 10자 이내, @를 포함하지 않음
    const inputCondition = value => value.length <= 10 && !value.includes("@");
    const myName = useInput("surimi", inputCondition);

    // useTabs - API 길이 탭 생성
    const { currentItem, changeItem } = useTabs(0, content);

    // useEffect
    const titleUpdater = useTitle("Loading...");

    // useRef
    const myInput = useRef();
    setTimeout(() => myInput.current?.focus(), 5000);
    // [Optional chaining] myInput.current 가 null 또는 undefined가 아니면 focus() 실행

    // useClick
    const title = useClick(sayHello);

    // useHover
    const hover = useHover(mouseHover);

    // useConfirm
    const deleteConsole = () => console.clear();
    const abort = () => console.log("Console clear aborted.");
    const confirmDel = useConfirm("Are you sure?", deleteConsole, abort);

    // usePreventLeave
    const { enablePrevent, disablePrevent } = usePreventLeave();

    // useBeforeLeave
    /*                             ##  Warning이 뜸
        const begForLife = () => {
            console.log("# useBeforeLeave : Plz, dont leave ;(");
    
        }
        useBeforeLeave(begForLife);
    */

    // useFadeIn
    const fadeInH1 = useFadeIn(5, 1);

    // useNetwork
    const handleNetworkChange = online => {
        console.log(online ? "We just went online" : "We are now offline")
    }
    const onLine = useNetwork(handleNetworkChange);


    // useScroll
    const { y, c } = useScroll();

    // useFullscreen
    const checkFull = (bool) => {
        console.log(bool ? "We are Full" : "We are small");
    }
    const { element: reqFull, triggerFull, exitFull } = useFullScreen(checkFull);

    // useNotification
    const options = {
        icon: 'https://raw.githubusercontent.com/Soksurim/Sandbox/gh-pages/logo192.png',
        body: 'Hi!! :D'
    }

    const triggerNotif = useNotification("Can I steal your Kimchi?", options);

    // useAxios
    const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });

    // console.log(`loading : ${loading}\ndata : ${(JSON.stringify(data))}\nerror : ${error}`);

    return (
        <div className="App">
            <h2 style={{ right: "5vw", position: "fixed", color: c }}>Hello React Hook</h2>
            <h3># useState</h3>
            <p>useInput</p>
            <input {...myName} />

            <p>useTabs</p>
            {content.map((section, index) => (
                <Button index={index} onClick={() => changeItem(index)}>{section.tab}</Button>
            ))}
            <p>{currentItem.content}</p>

            <hr />

            <h3># useEffect</h3>
            <input onChange={(p) => titleUpdater(p.target.value)} placeholder="change title" />

            <hr />

            <h3># useRef</h3>
            <input ref={myInput} placeholder="get focus after 5sec"></input>

            <hr />

            <h3># useClick</h3>
            <h2 onDoubleClick={confirmDel} ref={title}>click me!</h2>

            <hr />

            <h3># useHover</h3>
            <h2 ref={hover}>hover on here!</h2>

            <hr />

            <h3># useConfirm</h3>
            <button onClick={confirmDel}>delConsole</button>

            <hr />

            <h3># usePreventLeave</h3>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>UnProtect</button>
            <br />
            <span>Enable 'Protect' and refresh the window!</span>

            <hr />

            <h3># useFadeIn</h3>
            <div {...fadeInH1}><b>
                <p>Hello!!! :D</p></b>
            </div>

            <hr />

            <h3># useNetwork</h3>
            <h2>{onLine ? "onLine" : "offLine"}</h2>

            <hr />

            <h3># useScroll</h3>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
            <hr />

            <h3># useFullscreen</h3>
            <img alt="click" onClick={exitFull} ref={reqFull} height="100" src="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH_400x400.jpg" />
            <button onClick={triggerFull}>Image Fullscreen</button>
            <hr />

            <h3># useNotification</h3>
            <button onClick={triggerNotif}>Notification</button>

            <hr />

            <h3># useAxios</h3>
            <button onClick={refetch}>Refetch!</button>
            <span>{data && data.status}</span>
            <span>{loading && "Loading"}</span>

            <hr />

        </div >
    );
};

// {...myName} spread operator(스프레드 연산자)
// 'value={myName.val} onChange={myName.onChange}'와 같음

// spread operator(스프레드 연산자)란?
// https://www.techiediaries.com/react-spread-operator-props-setstate/

// > input의 값을 변경하려 하면
/*
Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
이런 에러가 뜬다
*/

export default App;
// ReactDOM.render(<App />, rootElement);

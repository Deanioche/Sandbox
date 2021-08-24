export const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent }
}

// return { enablePrevent, disablePrevent }는
// return { enablePrevent : enablePrevent, disablePrevent : disablePrevent }와 같음
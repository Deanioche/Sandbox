export const useConfirm = (msg, onConfirm, onCancel) => {
    if (typeof onConfirm !== "function") return;

    const confirmAction = () => {
        if (window.confirm(msg)) onConfirm();
        else
            try { onCancel(); } // onCancel이 없는 경우
            catch (err) { console.log("abort function doesn't exiest!"); return };
    }

    return confirmAction;
}
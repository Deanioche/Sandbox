export const useNotification = (title, options) => {

    if (!("Notification" in window)) return;
    // https://developer.mozilla.org/en-US/docs/Web/API/notification

    const fireNotif = () => {

        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }

    }
    return fireNotif;

}
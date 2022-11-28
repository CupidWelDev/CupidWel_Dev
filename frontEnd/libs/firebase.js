import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyBoje6E5KElPVAKFWPqZ518NRmQSY6qU-Y",
        authDomain: "cupidwel-a193a.firebaseapp.com",
        projectId: "cupidwel-a193a",
        storageBucket: "cupidwel-a193a.appspot.com",
        messagingSenderId: "692399249843",
        appId: "1:692399249843:web:a3e70a9ffdcf7ccb6fd3c6",
        measurementId: "G-6WZJVTR6G0",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey:
              "BFytZN57ZteTpnVJpFeDFfj_QWHKz0eHhNHA5cWyxKeJCRv2ruwTTxXnxQOJ9mZt4G-ZagIyVKkhniIl5VLsUio",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };

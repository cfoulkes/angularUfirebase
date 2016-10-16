
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    // apiKey: "AIzaSyA0BcUcu4V8aHT_gM-32BhRcmqji4z-lts",
    // authDomain: "final-project-recording.firebaseapp.com",
    // databaseURL: "https://final-project-recording.firebaseio.com",
    // storageBucket: "final-project-recording.appspot.com",
    // messagingSenderId: "290354329688"
    apiKey: "AIzaSyCRX1Op0VES_wCL-iW3RvOAMmv0fp0x3m8",
    authDomain: "angularucourse.firebaseapp.com",
    databaseURL: "https://angularucourse.firebaseio.com",
    storageBucket: "angularucourse.appspot.com",
    messagingSenderId: "307078555232"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
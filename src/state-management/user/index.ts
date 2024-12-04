import {
  deleteUser,
  IdTokenResult,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { createAtom } from "reactjs-statify";
import { auth } from "../../config/firebase";

export const userAtom = createAtom<
  "user",
  { userData: { accessToken: IdTokenResult | null; email: string | null } }
>("user", { userData: { accessToken: null, email: null } });

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    user.getIdTokenResult().then((token) => {
      userAtom.set("userData", { accessToken: token, email: user.email });
    });
  } else {
    // User is signed out
    // ...
  }
});

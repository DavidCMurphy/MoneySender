import { Alert } from "react-native";
import { ofType } from "redux-observable";
import { TypeKeys } from "../ActionTypes";
import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";
export default (action) => action.pipe(ofType(TypeKeys.SHOW_ERROR), mergeMap((action$) => {
    Alert.alert(action$.title, action$.message, [{ text: "Ok", style: "cancel" }], { cancelable: true });
    return of();
}));
//# sourceMappingURL=index.js.map
import * as actionTypes from "./actionTypes";

export const filterActions = {
    BreakingQuoteFilter,
    BreakingCharacterFilter,
    BetterQuoteFilter,
    BetterCharacterFilter
};

function BreakingQuoteFilter() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.BREAKİNG_BAD_QUOTE,
            payload: "quotes?series=Breaking+Bad"
        });
    };
}

function BreakingCharacterFilter() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.BREAKİNG_BAD_CHARACTER,
            payload: "?category=Breaking+Bad"
        });
    };
}

function BetterQuoteFilter() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.BETTER_CAUL_SAUL_QUOTE,
            payload: "quotes?series=Better+Call+Saul"
        });
    };
}

function BetterCharacterFilter() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.BETTER_CAUL_SAUL_CHARACTER,
            payload: "?category=Better+Call+Saul"
        });
    };
}

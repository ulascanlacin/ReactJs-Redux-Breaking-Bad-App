import * as actionTypes from "../Action/actionTypes";

const initialState = {
    characterFilter: "/",
    quoteFilter: "quotes"
};

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BREAKİNG_BAD_QUOTE:
            return {
                quoteFilter: action.payload
            };

        case actionTypes.BREAKİNG_BAD_CHARACTER:
            return {
                characterFilter: action.payload
            };

        case actionTypes.BETTER_CAUL_SAUL_QUOTE:
            return {
                quoteFilter: action.payload
            };

        case actionTypes.BETTER_CAUL_SAUL_CHARACTER:
            return {
                characterFilter: action.payload
            };
        default:
            return state;
    }
};

export default FilterReducer;

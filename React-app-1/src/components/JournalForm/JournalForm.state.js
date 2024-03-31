export const INITIAL_STATE = {
    isValid: {
        title: true,
        post: true
    },
    values: {
        title: "",
        post: "",
        tag: ""
    },
    isFormReadyToSubmit: false
};

export function formReducer(state, action) {
    switch (action.type) {
        case "RESET_VALIDITY":
            return { ...state, isValid: INITIAL_STATE.isValid };
        case "SUBMIT": {
            const postValidity = state.values.post?.trim().length;
            const titleValidity = state.values.title?.trim().length;
            return {
                ...state,
                isValid: {
                    post: postValidity,
                    title: titleValidity
                },
                isFormReadyToSubmit: titleValidity && postValidity
            }
        }
        case "CHANGE_VALUE":
            return { ...state, values: { ...state.values, ...action.payload } }
        case "CLEAR": {
            return INITIAL_STATE;
        }
    }
}
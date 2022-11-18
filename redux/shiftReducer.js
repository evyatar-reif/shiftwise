const DEFAULT_STATE = { allShifts: [], currentId: 0 };

function addShift(shift) {
    return {
        type: 'ADD_SHIFT',
        payload: shift,
    };
}

export default function shiftReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'ADD_SHIFT': {
            const newShift = {
                ...action.payload,
                id: state.currentId,
            };
            const newAllShifts = [...state.allShifts, newShift];
            const newCurrentId = state.currentId + 1;
            return {
                allShifts: newAllShifts,
                currentId: newCurrentId,
            };
        }
        default: {
            return state;
        }
    }
}

export { addShift };

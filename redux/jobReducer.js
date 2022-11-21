const DEFAULT_STATE = {
    allJobs: [],
    currentId: 0,
};

function addJobToState(job) {
    return {
        type: 'ADD_JOB',
        payload: job,
    };
}

export default function jobReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'ADD_JOB': {
            const newJob = { ...action.payload, id: state.currentId };

            const newAllJobs = [...state.allJobs, newJob];
            const newCurrentId = state.currentId + 1;
            return {
                allJobs: newAllJobs,
                currentId: newCurrentId,
            };
        }
        default: {
            return state;
        }
    }
}

export { addJobToState };

// --- Actions 
// NOTE: Actions are common in Partial Finite State Machines, if you have a full one, you may delete this section

// const dispatch = store ? store?.dispatch : () => { }

// Define 'Actions' which are functions that are dispatching a Reducer or Thunk
// Ex: const defaultAction = () => dispatch(clearSelectedTasks())
// const deleteMultipleAction = (userID, taskIDsToDelete) => dispatch(deleteTasksThunkAPI({ userID, taskInfos: taskIDsToDelete }))

// Include wrapper functions that have setters for when the handler is called as well as calling the Action(s)
// Ex: export const yesAction = (setter, newState, { userID, taskIDsToDelete }) => () => { handleYes(setter, newState); deleteMultipleAction(userID, taskIDsToDelete); defaultAction(); }

// In the case of a partial state machine, you will have to export the action that is to be called elsewhere
// In this example, we are exporting the yesAction which a modal uses to update this state machine

// --- State Machine
export const { DEFAULT, PRESSED } = { DEFAULT: 'default', PRESSED: 'pressed' } // Allowed States
export const { CLICK_EVENT } = { CLICK_EVENT: 'click' } // Allowed Events
export const { VIEW } = { VIEW: 'view', ACTION: 'action' } // Allowed Values // NOTE: Remove ACTION If not needed
export const ExampleFSM = { // Allowed Transitions and Values
    initial: DEFAULT,
    states: { // View is a value that the state machine has at a given point, it can be any value
        [DEFAULT]: {
            [VIEW]: PRESSED,
             // [ACTION]: defaultAction
            transitions: { [CLICK_EVENT]: PRESSED }
        }, // Default{pressed} -> Pressed
        [PRESSED]: {
            [VIEW]: DEFAULT,
            // [ACTION]: pressedAction
            transitions: { [CLICK_EVENT]: DEFAULT }
        }, // Pressed{default} -> Default
    }
}
// --- Getters
export const getFSMTransition = (state, event, fsm = ExampleFSM) => fsm?.states?.[state]?.transitions?.[event] || DEFAULT
export const getFSMValue = (state, value, fsm = ExampleFSM) => fsm?.states?.[state]?.[value] // no default other than undefined, change as you wish
export const getDefaultState = (fsm = ExampleFSM) => fsm?.initial
// --- Handlers
export const handleClick = (setFsmState, fsmState) => setFsmState(getFSMTransition(fsmState, CLICK_EVENT))
// ... Add more if your state machine is larger
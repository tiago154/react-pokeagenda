export enum LoadingActionsEnum {
    'UPDATE_LOADING' = 'UPDATE_LOADING',
}

export type LoadingState = {
    inProgress: boolean
}

export interface LoadingAction {
    type: LoadingActionsEnum
    payload: LoadingState
}

export type LoadingActionTypes = LoadingAction

const initialState: LoadingState = {
  inProgress: true
}

export default (state = initialState, action: LoadingActionTypes): LoadingState => {
  switch (action.type) {
    case LoadingActionsEnum.UPDATE_LOADING:
      return { ...action.payload }
    default:
      return state
  }
}

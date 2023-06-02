export const CLEAR_ERRORS = 'commonActionTypes/c_CLEAR_ERRORS';

export interface ClearErrorsAction {
  type: typeof CLEAR_ERRORS;
  errorId?: string
}

export type CommonAction = ClearErrorsAction;

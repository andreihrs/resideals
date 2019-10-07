import { SHOW_MODAL } from './../actions/actions';

export default function visibilityModal(state = SHOW_MODAL, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return action.filter
    default:
      return state
  }
}
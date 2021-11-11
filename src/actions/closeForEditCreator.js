import { EDIT_CLOSE } from '../constants/constants';

export const closeForEditCreator = (name) => ({
  type: EDIT_CLOSE,
  name,
});

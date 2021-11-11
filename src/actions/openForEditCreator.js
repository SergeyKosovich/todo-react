import { EDIT_OPEN } from '../constants/constants';

export const openForEditCreator = (name) => ({
  type: EDIT_OPEN,
  name,
});

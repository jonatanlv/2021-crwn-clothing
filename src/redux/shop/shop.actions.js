import Actions from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: Actions.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

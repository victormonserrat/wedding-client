export const UPDATE_GUEST_BY_ID_WITH_VALUES = '@@guest/UPDATE_GUEST_BY_ID_WITH_VALUES';

export const updateGuestByIdWithValues = (id, values) => ({
    type: UPDATE_GUEST_BY_ID_WITH_VALUES,
    id,
    values,
});

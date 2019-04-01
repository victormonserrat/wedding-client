export const FETCH_INVITATION_BY_ID = '@@invitation/FETCH_INVITATION_BY_ID';
export const FETCH_INVITATION_BY_ID_SUCCESS = '@@invitation/FETCH_INVITATION_BY_ID_SUCCESS';
export const FETCH_INVITATION_BY_ID_FAILURE = '@@invitation/FETCH_INVITATION_BY_ID_FAILURE';

export const fetchInvitationById = id => ({
    type: FETCH_INVITATION_BY_ID,
    id,
});

export const fetchInvitationByIdSuccess = (comment, guests) => ({
    type: FETCH_INVITATION_BY_ID_SUCCESS,
    comment,
    guests,
});

export const fetchInvitationByIdFailure = error => ({
    type: FETCH_INVITATION_BY_ID_FAILURE,
    error,
});

import axios from 'axios';

export const getInvitationById = id =>
    axios.get(`${process.env.REACT_APP_API_URL}/invitations/${id}`)
;

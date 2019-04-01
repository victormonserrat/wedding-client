import axios from 'axios';

export const putGuestByIdWithValues = (id, values) =>
    axios.put(`${process.env.REACT_APP_API_URL}/guests/${id}`, values)
;

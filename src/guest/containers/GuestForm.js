import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { GuestForm } from '../components/GuestForm';
import { updateGuestByIdWithValues } from '../actions/update-guest-by-id-with-values';

const mapStateToProps = ({
    form: forms,
    invitation,
}, {
    form: name,
}) => {
    const guest = invitation.guests.find(guest => guest.id === name);
    const form = forms[name];

    if (!form || !guest) {
        return ({
            submitable: false,
            saved: false,
        })
    }

    const { menu, allergens, song, answer, room } = form.values;
    const saved =
        menu === guest.menu &&
        allergensEqual(allergens, guest.allergens) &&
        songsEqual(song, guest.song) &&
        answer === guest.answer &&
        room === guest.room
    ;

    return({
        submitable: answer,
        saved: saved,
    });
};

const mapDispatchToProps = (dispatch, { form: id }) => ({
    handleOnSubmit: values => dispatch(updateGuestByIdWithValues(id, values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm()(GuestForm));

const allergensEqual = (allergens1, allergens2) => {
    if (allergens1.length !== allergens2.length) {
        return false;
    }
    for (let i = 0; i < allergens1.length; i++) {
        if (!allergens2.includes(allergens1[i])) {
            return false;
        }
    }
    for (let i = 0; i < allergens2.length; i++) {
        if (!allergens1.includes(allergens2[i])) {
            return false;
        }
    }

    return true;
};

const songsEqual = (song1, song2) => {
    song1 = song1 ? song1.trim() !== '' ? song1 : null : null;
    song2 = song2 ? song2.trim() !== '' ? song2 : null : null;

    return song1 === song2;
};

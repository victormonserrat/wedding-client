import { connect } from 'react-redux';
import { Guests } from '../components/Guests';

const mapStateToProps = ({
    invitation: { guests },
}) => {
    if (guests.length === 1) {
        const guest = guests[0];

        return {
            guestsLines: guest.lastName ? [guest.firstName, guest.lastName] : [guest.firstName],
        };
    }

    if (guests.length === 2) {
        return {
            guestsLines: [guests[0].firstName, '&', guests[1].firstName],
        };
    }

    return {
        guestsLines: guests.map(({ firstName }) => firstName),
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Guests);

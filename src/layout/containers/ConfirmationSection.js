import { connect } from 'react-redux';
import { ConfirmationSection } from '../components/ConfirmationSection';

const mapStateToProps = ({
    invitation: { guests },
}) => ({
    guests,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationSection);

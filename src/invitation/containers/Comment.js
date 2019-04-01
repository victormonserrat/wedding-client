import { connect } from 'react-redux';
import { Comment } from '../components/Comment';

const mapStateToProps = ({
    invitation: { comment },
}) => ({
    comment,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { LayoutView } from '../layout/components/LayoutView';
import { fetchInvitationById } from '../invitation/actions/fetch-invitation-by-id';
import { NotFoundView } from '../layout/components/NotFoundView';
import { NetworkErrorView } from '../layout/components/NetworkErrorView';

export const WithLayout = ({ fetchInvitation, fetching, error, component }) => {
    React.useEffect(() => {
        fetchInvitation();
    }, []);

    if (fetching) {
        return <></>;
    }
    if (error === 404) {
        return <NotFoundView />;
    }
    if (error === 500) {
        return <NetworkErrorView />;
    }

    return(
        <>
            <LayoutView />
            { component }
        </>
    );
};

const mapStateToProps = ({
    invitation: { fetching, error },
}, {
    component,
}) => ({
    fetching,
    error,
    component,
});

const mapDispatchToProps = (dispatch, { invitationId }) => ({
    fetchInvitation: () => dispatch(fetchInvitationById(invitationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithLayout);

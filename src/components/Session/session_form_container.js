import { connect } from 'react-redux';
import { receiveErrors, clearErrors } from '../../actions/error_actions';
import { login, logout, signup ,register } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session, errors }) => {
    return {
        loggedIn: Boolean(session.currentUser),
        errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
        processRegister: user => dispatch(register(user)),
        clearErrors: () => { return dispatch(clearErrors()); },
        logout: ()=>{return dispatch(logout())}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);

import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
// import { withRouter } from 'react-router-dom';
import '../../styles/modal.scss';
// import JobShowContainer from '../jobs/job_show_container';
import JobShow from '../jobs/job_show'
import JobRoutes from "../jobs/job_route";


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'jobShow':
            component = <JobShow jobId={modal.jobId} />;
            break;
        case 'jobRoute':
            component = <JobRoutes />
            break;
        default:
            return null;
    }


    return (
      <div>
        <div onClick={closeModal} className="modal-screen">
          
            <div className="modal-form" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
 
        </div>
      </div>

    );
}


export default Modal;
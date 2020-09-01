import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
// import { withRouter } from 'react-router-dom';
import '../../styles/modal.scss';
import Home from '../../components/main/main_page'


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
        default:
            return null;
    }

    return (
      <div>
        <div onClick={closeModal} className="modal-close">
          
            <div className="modal-form" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
            <div className="modal-screen">
                <Home />
            </div>
        </div>
      </div>
      // <div onClick={closeModal} className='modal-close'>
      //     <div onClick={e => e.stopPropagation()} className='modal-form'>
      //         <div>{component}</div>
      //         {/* <div className='modal-screen'><Home/></div> */}
      //     </div>
      // </div>
    );
}


export default Modal;
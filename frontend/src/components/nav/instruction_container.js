import { connect } from "react-redux";
import Instructions from "./instruction";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Instructions));

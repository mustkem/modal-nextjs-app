import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Home/Page";
import { wrapper } from "../store/store";
import { fetchData } from "../store/posts/action";

const Other = (props) => {
  useEffect(() => {
    props.fetchData();
  }, [props]);

  return <Page title="Other Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(fetchData(true));
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Other);

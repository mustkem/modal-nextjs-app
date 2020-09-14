import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
import { wrapper } from "../store/store";
import { fetchData } from "../store/posts/action";

const Index = (props) => {
  return <Page title="Index Page" linkTo="/other" />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(fetchData(true));
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Index);

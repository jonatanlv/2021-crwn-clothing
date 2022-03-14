import React from "react";
import { Route } from "react-router-dom";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import CollectionPage from "../collection/collection.component";

import {
  firestore,
  converCollectionsSnapshotToMap,
} from "../../config/firebase";

// TODO Convertir a styled components
import "./shop.styles.scss";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const colRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = colRef.onSnapshot(async (collection) => {
      const collectionMap = converCollectionsSnapshotToMap(collection);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

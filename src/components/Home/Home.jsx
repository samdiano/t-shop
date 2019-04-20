import React, { Component, Suspense, lazy } from "react";
import Banner from "../Banner/Banner";
import SideBar from "../SideBar/Sidebar";
import banner from "../../assets/images/banner.png";
import banner2 from "../../assets/images/banner-2.png";
import Loader from "react-loader-spinner";
const ProductsList = lazy(() => import("../ProductsList/ProductsList"));

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner image={banner} />
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <Suspense
              fallback={
                <Loader type="Oval" color="#00BFFF" height="100" width="100" />
              }
            >
              <ProductsList />
            </Suspense>
          </div>
        </div>
        <span className="p-3">
          <Banner image={banner2} />
        </span>
      </div>
    );
  }
}

import React, { Component } from "react";
import Banner from "../Banner/Banner";
import ProductsList from "../ProductsList/ProductsList";
import SideBar from '../SideBar/Sidebar';
import banner from '../../assets/images/banner.png';
import banner2 from '../../assets/images/banner-2.png';
import Pagination from '../Pagination/Pagination';


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
            <ProductsList />
          </div>
        </div>
        <span className="p-3">
          <Banner image={banner2} />
        </span>
      </div>
    );
  }
}

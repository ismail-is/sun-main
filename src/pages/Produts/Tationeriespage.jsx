import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import Cleaning from "../../components/ShopAreas/Cleaning";
import Tationeries from "../../components/ShopAreas/Tationeries";

const Tationeriespage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={"Tationeries"} subtitle={"Shop "} />
      {/* <Cleaning/> */}
      <Tationeries />
    </Layout>
  );
};

export default Tationeriespage;
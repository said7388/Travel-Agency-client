import React from "react";
import { Container, Row } from "react-bootstrap";
import usePackages from "../../Hooks/usePackages";
import Package from "./Package/Package";
import "./Packages.css";

const Packages = ({ quantity }) => {
  //  import packages from usePackages hooks
  const { packages } = usePackages();
  return (
    <Container className='my-md-5 my-3'>
      <h1 className='packages-title'>PACKAGES</h1>
      <p className='package-sub'>BEST TRAVEL PACKAGES</p>
      <Row className='g-2 g-sm-4'>
        {packages.slice(0, quantity).map((pack) => (
          <Package key={pack._id} pack={pack}></Package>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supportNetwork } from "../hooks/network";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HashLoader from "react-spinners/HashLoader";
import { usePoolListStats } from "./launchpadApply/SaleList/helper/useStats";
import ProjectCard from "../component/ProjectCard";
import { useTopPoolState } from "./launchpadApply/SaleList/helper/useStats";

export default function Home() {
  const [updater] = useState({ page: 0, pageSize: 12, loading: true });
  const stats = usePoolListStats(updater);
  const poolstats = useTopPoolState(1);

  console.log("kato stats", stats);

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;

  let index = 1;

  return (
    <React.Fragment>
      <div className="main">
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-12 col-md-6">
                <div className="hero-content">
                  <div className="intro mb-4">
                    <h2>YOUR TRUSTED</h2>
                    <h2 className="color-secondary mb-2">LAUNCHPAD</h2>
                    <p>INVEST NOW WITH 0xLanchpad TO GET </p>
                    <p>EARLY-ACCESS TO PROMISING PROJECTS.</p>
                  </div>
                  <div className="button-group">
                    <Link className="btn btn-yellow" to="/presale">
                      <i className="icon-note mr-2"></i>Apply Project
                    </Link>
                    <Link
                      className="btn btn-bordered-yellow active smooth-anchor"
                      to="/sale-list"
                    >
                      <i className="icon-rocket mr-2"></i>My Contributions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img src={require("../images/hero_cards.png").default} />
              </div>
            </div>
          </div>
          <OwlCarousel
            className="owl-theme my-5"
            loop
            dots={false}
            items={10}
            margin={10}
            autoplay={true}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 2,
              },
              400: {
                items: 3,
              },
              700: {
                items: 5,
              },
              1000: {
                items: 8,
              },
              1400: {
                items: 10,
              },
            }}
          >
            {poolstats["topPools"].map((pool) => {
              return (
                pool["poolAddress"] !==
                  "0x0000000000000000000000000000000000000000" && (
                  <div className="item trend-item">
                    <img src={pool["poolInfo"][6].split("$#$")[0]} />
                    <div>
                      <p>
                        {index++} : {pool["poolInfo"][5]}
                      </p>
                      <p className="color-secondary">
                        $ {pool["poolInfo"][3][2] / 1000000000000000000}{" "}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </OwlCarousel>
        </section>
        <section id="explore" className="project-area pt-0">
          <div className="container">
            <div className="d-flex mx-3">
              <h3 className="color-secondary mr-2">UPCOMING</h3>
              <h3 className="">PROJECT LIST</h3>
            </div>
            <div className="row items">
              <React.Fragment>
                {stats.loading ? (
                  <div className="col-md-12">
                    <HashLoader
                      size="100"
                      color="#fff"
                      cssOverride={{
                        left: "50%",
                        textAlign: "center",
                        top: "50%",
                      }}
                    />
                  </div>
                ) : stats.poolList.length > 0 ? (
                  <>
                    {stats.poolList
                      .slice(0)
                      .reverse()
                      .map((rowdata, index) => {
                        if (
                          parseInt(rowdata.startTime) >
                            Math.floor(new Date().getTime() / 1000.0) &&
                          i1 < 3
                        ) {
                          i1++;
                          return ProjectCard(stats.chainId, rowdata, index);
                        }
                      })}
                    {i1 >= 3 && (
                      <div className="d-flex align-items-center justify-content-center w-100">
                        <Link
                          className="btn btn-bordered-white active smooth-anchor"
                          to="/sale-list"
                        >
                          LOAD MORE
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="col-12 item explore-item mt-5">
                    <p className="text-center">No Record Found</p>
                  </div>
                )}
              </React.Fragment>
            </div>
          </div>
        </section>
        <section id="explore" className="project-area pt-0">
          <div className="container">
            <div className="d-flex mx-3">
              <h3 className="color-valid mr-2">ACTIVE</h3>
              <h3 className="">PROJECT LIST</h3>
            </div>
            <div className="row items">
              <React.Fragment>
                {stats.loading ? (
                  <div className="col-md-12">
                    <HashLoader
                      size="100"
                      color="#fff"
                      cssOverride={{
                        left: "50%",
                        textAlign: "center",
                        top: "50%",
                      }}
                    />
                  </div>
                ) : stats.poolList.length > 0 ? (
                  <>
                    {stats.poolList
                      .slice(0)
                      .reverse()
                      .map((rowdata, index) => {
                        if (
                          !(
                            rowdata.poolState === "1" ||
                            rowdata.poolState === "2"
                          ) &&
                          parseInt(rowdata.startTime) <
                            Math.floor(new Date().getTime() / 1000.0) &&
                          parseInt(rowdata.endTime) >
                            Math.floor(new Date().getTime() / 1000.0) &&
                          i2 < 3
                        ) {
                          i2++;
                          return ProjectCard(stats.chainId, rowdata, index);
                        }
                      })}
                    {i2 >= 3 && (
                      <div className="d-flex align-items-center justify-content-center w-100">
                        <Link
                          className="btn btn-bordered-white active smooth-anchor"
                          to="/sale-list"
                        >
                          LOAD MORE
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="col-12 item explore-item mt-5">
                    <p className="text-center">No Record Found</p>
                  </div>
                )}
              </React.Fragment>
            </div>
          </div>
        </section>
        <section id="explore" className="project-area pt-0">
          <div className="container">
            <div className="d-flex mx-3">
              <h3 className="color-third mr-2">PREVIOUS</h3>
              <h3 className="">PROJECT LIST</h3>
            </div>
            <div className="row items">
              <React.Fragment>
                {stats.loading ? (
                  <div className="col-md-12">
                    <HashLoader
                      size="100"
                      color="#fff"
                      cssOverride={{
                        left: "50%",
                        textAlign: "center",
                        top: "50%",
                      }}
                    />
                  </div>
                ) : stats.poolList.length > 0 ? (
                  <>
                    {stats.poolList
                      .slice(0)
                      .reverse()
                      .map((rowdata, index) => {
                        if (
                          (rowdata.poolState === "1" ||
                            rowdata.poolState === "2" ||
                            parseInt(rowdata.endTime) <
                              Math.floor(new Date().getTime() / 1000.0)) &&
                          i3 < 6
                        ) {
                          i3++;
                          return ProjectCard(stats.chainId, rowdata, index);
                        }
                      })}
                    {i3 >= 6 && (
                      <div className="d-flex align-items-center justify-content-center w-100">
                        <Link
                          className="btn btn-bordered-white active smooth-anchor"
                          to="/sale-list"
                        >
                          LOAD MORE
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="col-12 item explore-item mt-5">
                    <p className="text-center">No Record Found</p>
                  </div>
                )}
              </React.Fragment>
            </div>
          </div>
        </section>

        <section className="cta-area p-0">
          <div className="container">
            <div className="row">
              <div className="col-12 card">
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-md-5 text-center">
                    <img
                      src={require("../images/cta_thumb.png").default}
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <h2 className="m-0">Apply for Launchpad</h2>
                    <p>
                      Get access to huge set of tools to seamlessly handle your
                      game's integration with blockchain.
                    </p>
                    <Link
                      className="btn active d-inline-block my-5"
                      to="/presale"
                    >
                      <i className="icon-rocket mr-2"></i>Create
                    </Link>
                  </div>
                </div>
                {/* <a className="cta-link" href="apply.html"></a> */}
              </div>
            </div>
          </div>
        </section>

        <div id="search" className="modal fade p-0">
          <div className="modal-dialog dialog-animated">
            <div className="modal-content h-100">
              <div className="modal-header" data-dismiss="modal">
                Search <i className="far fa-times-circle icon-close"></i>
              </div>
              <div className="modal-body">
                <form className="row">
                  <div className="col-12 align-self-center">
                    <div className="row">
                      <div className="col-12 pb-3">
                        <h2 className="search-title mt-0 mb-3">
                          What are you looking for?
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 input-group mt-md-4">
                        <input type="text" placeholder="Enter your keywords" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 input-group align-self-center">
                        <button className="btn btn-bordered-white mt-3">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { usePoolListUser } from "../helper/useStats";
import ProjectCard from "../../../../component/ProjectCard";

export default function MyContributions() {
  const [updater, setUpdater] = useState({
    page: 0,
    pageSize: 6,
    loading: true,
  });
  const stats = usePoolListUser(updater);
  return (
    <div className="container">
      <React.Fragment>
        <section className="project-area explore-area">
          <div className="row justify-content-left">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="intro text-left">
                <div className="intro-content">
                  <span className="intro-text">My Launchpad List</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-left text-left">
            <div className="col-12">
              <div
                className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-md-4"
                data-toggle="buttons"
              >
                <label className="btn d-table text-uppercase p-2">
                  <Link to="/sale-list" className="explore-btn text-white">
                    <span>All</span>
                  </Link>
                </label>
                <label className="btn active d-table text-uppercase p-2">
                  <Link to="/my-contribution" className="explore-btn">
                    <span>My Contribution</span>
                  </Link>
                </label>
              </div>
            </div>
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
                stats.poolList
                  .slice(0)
                  .reverse()
                  .map((rowdata, index) => {
                    return ProjectCard(stats.chainId, rowdata, index);
                  })
              ) : (
                <div className="col-12 item explore-item mt-5">
                  <p className="text-center">No Record Found</p>
                </div>
              )}
            </React.Fragment>
          </div>
          <div className="row mt-4 mt-md-5">
            <div className="col-12">
              <nav>
                <ul className="page-numbers">
                  {stats.page > 0 && (
                    <li>
                      <a
                        className="next page-numbers"
                        href="#sec"
                        onClick={(e) =>
                          setUpdater({
                            page: stats.page - 1,
                            pageSize: stats.pageSize,
                            loading: true,
                          })
                        }
                      >
                        <i className="icon-arrow-left"></i>Previous
                      </a>
                    </li>
                  )}
                  {Math.floor(stats.getTotalNumberOfPools / stats.pageSize) >
                    stats.page && (
                    <li>
                      <a
                        className="next page-numbers"
                        href="#sec"
                        onClick={(e) =>
                          setUpdater({
                            page: stats.page + 1,
                            pageSize: stats.pageSize,
                            loading: true,
                          })
                        }
                      >
                        Next
                        <i className="icon-arrow-right"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  );
}

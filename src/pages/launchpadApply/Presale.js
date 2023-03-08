import React, { useState, useContext, useEffect } from "react";
import "./index.css";
import Step4 from "./presale/Step4";
import Step1 from "./presale/Step1";
import Step2 from "./presale/Step2";
import Step3 from "./presale/Step3";
import Context from "./presale/context/Context";
import { useWeb3React } from "@web3-react/core";
import { defaultValue } from "./presale/context/defaults";
import Step5 from "./presale/Step5";

export default function PreSale() {
  const appContext = useContext(Context);
  const [context, setContext] = useState(appContext);
  const { chainId, account } = useWeb3React();

  const setValue = (value) => {
    setContext({ ...context, value });
  };

  useEffect(() => {
    setContext({ ...context, value: { ...defaultValue } });
    // eslint-disable-next-line
  }, [chainId, account]);

  const btnNextStep = (e) => {
    if (context.value.step < context.value.maxStep) {
      setValue({ ...context.value, step: parseInt(context.value.step + 1) });
    }
  };

  const btnPrevStep = (e) => {
    if (context.value.step > 1) {
      setValue({ ...context.value, step: parseInt(context.value.step - 1) });
    }
  };

  const state = {
    ...context,
    setValue: setValue,
    btnNextStep: btnNextStep,
    btnPrevStep: btnPrevStep,
  };

  return (
    <Context.Provider value={state}>
      <React.Fragment>
        <section className="explore-area prev-project-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro d-flex justify-content-center m-0">
                  <div className="intro-content">
                    <span className="intro-text">Presale</span>
                    <h3 className="mt-3 mb-0">Create Presale</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="signup-step-container">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-10">
                  <div className="wizard">
                    <div className="wizard-inner">
                      <div className="connecting-line"></div>
                      <ul className="nav nav-tabs" role="tablist">
                        <li
                          role="presentation"
                          className={`${
                            context.value.step === 1 ? "active" : "disabled"
                          }`}
                        >
                          <a href="#step1">
                            <span className="round-tab">1 </span>{" "}
                            <i>Verify Token</i>
                          </a>
                        </li>
                        <li
                          role="presentation"
                          className={`${
                            context.value.step === 2 ? "active" : "disabled"
                          }`}
                        >
                          <a href="#step2">
                            <span className="round-tab">2</span>{" "}
                            <i>DeFi Launchpad Info</i>
                          </a>
                        </li>
                        <li
                          role="presentation"
                          className={`${
                            context.value.step === 3 ? "active" : "disabled"
                          }`}
                        >
                          <a href="#step3">
                            <span className="round-tab">3</span>{" "}
                            <i>Add Additional Info</i>
                          </a>
                        </li>
                        <li
                          role="presentation"
                          className={`${
                            context.value.step === 4 ? "active" : "disabled"
                          }`}
                        >
                          <a href="#step4">
                            <span className="round-tab">4</span>{" "}
                            <i>Marketing Info</i>
                          </a>
                        </li>
                        <li
                          role="presentation"
                          className={`${
                            context.value.step === 5 ? "active" : "disabled"
                          }`}
                        >
                          <a href="#step4">
                            <span className="round-tab">5</span> <i>Finish</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card stepcard">
                      <div className="card-body">
                        <form className="login-box">
                          <div className="tab-content" id="main_form">
                            <Step1 />
                            <Step2 />
                            <Step3 />
                            <Step4 />
                            <Step5 />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="mt-4 text-white">
                      Disclaimer: The information provided shall not in any way
                      constitute a recommendation as to whether you should
                      invest in any product discussed. We accept no liability
                      for any loss occasioned to any person acting or refraining
                      from action as a result of any material provided or
                      published.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </React.Fragment>
    </Context.Provider>
  );
}
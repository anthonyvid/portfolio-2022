import "./worktermreports.css";

import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

import { workterms } from "../../../data/data";

const WorkTermReports = () => {
  return (
    <section className="main-section mt-5">
      <div className="section-header">
        <div className="d-flex flex-row align-items-center">
          <small>SENG CO-OP</small>
          <hr
            style={{
              width: "225px",
              marginLeft: "10px",
              opacity: "1",
              color: "#5f7080",
            }}
          />
        </div>
        <h1>Work Term Reports</h1>
      </div>
      <div className="work-term-content bg-white">
        {workterms &&
          workterms.map((term) => <Term key={term.id} term={term} />)}
      </div>
    </section>
  );
};

const Term = ({ term }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="term d-flex flex-column w-100">
        <div className="d-flex justify-content-between align-items-center work-term-header">
          <h4>
            <a href={term?.website} target="_blank" rel="noreferrer">
              {term?.company}
            </a>
          </h4>
          <div>
            <p className="date">{`${term?.fromDate} - ${term?.toDate}`}</p>
            <p
              className="location"
              style={{
                float: "right",
                marginTop: "-17px",
              }}
            >
              {term?.location}
            </p>
          </div>
        </div>
        <div className="work-term-timeline-mobile d-none">
          <p className="date">{`${term?.fromDate} - ${term?.toDate}`}</p>
          <p
            className="location"
            style={{
              float: "right",
              marginTop: "-17px",
            }}
          >
            {term?.location}
          </p>
        </div>
        <p className="position">{term?.position}</p>
        <p className="type">{term?.type}</p>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="term-info-aria"
          aria-expanded={open}
          style={{ width: "fit-content" }}
          className="d-flex align-items-center justify-content-center"
        >
          Read Full Report
          {!open ? <BiChevronRight size={30} /> : <BiChevronDown size={30} />}
        </Button>
        <Collapse in={open}>
          <div id="term-info-aria" className="term-info mt-5">
            <div>
              <p className="term-heading">Introduction</p>
              <p>{term?.intro}</p>
            </div>
            <div>
              <p className="term-heading">Employer Information</p>
              <p>{term?.employerInfo}</p>
            </div>
            <div>
              <p className="term-heading">Goals of the term</p>
              <div>
                {term?.goals &&
                  term?.goals.map((goal) => {
                    return (
                      <div key={goal.id} className="mb-4">
                        <p
                          className="text-uppercase"
                          style={{
                            marginBottom: "3px",
                          }}
                        >
                          {goal?.name}
                        </p>
                        <li>{goal?.description}</li>
                        {goal?.descriptionPoints &&
                          goal.descriptionPoints.map((dp, i) => {
                            return (
                              <li style={{ paddingLeft: "15px" }} key={i}>
                                {dp}
                              </li>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <p className="term-heading">Job Descripition</p>
              <p>{term?.jobDescription}</p>
              <div className="mb-4">
                <p className="text-uppercase" style={{ marginBottom: "3px" }}>
                  {term?.technologies?.header}
                </p>
                {term?.technologies?.items &&
                  term?.technologies?.items.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
              </div>
              <div className="mb-4">
                <p className="text-uppercase" style={{ marginBottom: "3px" }}>
                  {term?.responsibilities?.header}
                </p>
                {term?.responsibilities?.items &&
                  term?.responsibilities?.items.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
              </div>
            </div>
            <div>
              <p className="term-heading">Work Term Focus</p>
              <p>{term?.focus}</p>
            </div>
            <div>
              <p className="term-heading">Conclusion</p>
              <p>{term?.conclusion}</p>
            </div>
            <div>
              <p className="term-heading">Acknowledgments</p>
              <p>{term?.acknowledgments}</p>
            </div>
          </div>
        </Collapse>
      </div>
      {!term.last && (
        <div
          className="d-flex align-items-center my-4 w-100"
          style={{ borderTop: "1px solid lightgray" }}
        ></div>
      )}
    </>
  );
};

export default WorkTermReports;

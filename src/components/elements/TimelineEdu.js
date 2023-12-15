import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.education
        .map(item => {
          return new Date(item.startDate).getFullYear();
        }).filter((value, index, self) => self.indexOf(value) === index)
        .map((year, i) => {
          let content = [];
          content.push(
            <TimelineHeader key={i} year={year}/>
          );
          content.push(
            Resume.education
              .filter(education => new Date(education.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.institution}
                    position={item.area}
                    website={item.website}
                    summary={item.courses}

                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;

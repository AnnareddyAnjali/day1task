import React, { useState } from 'react';

const PreferenceComponent = () => {
  const fullCourseList = [
    "React", "Node.Js", "Django", "Swift", "TensorFlow", "PyTorch",
    "TypeScript", "Angular", "Next.Js"
  ];
  const shortCourseList = fullCourseList.slice(0, 6);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCourseList = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedCourses = isExpanded ? fullCourseList : shortCourseList;

  return (
    <div>
      <div id='container'>
        <h2 id='heading'>Preferences</h2>
        <div id='sub-container'>
          <h3>Tell Us More About Your Interests!</h3>

          <h4>Preferred Job Type :</h4>
          <ol id='job-type'>
            <li><input type="checkbox" /> Remote</li>
            <li><input type="checkbox" /> Hybrid</li>
            <li><input type="checkbox" /> In-Office</li>
          </ol>

          <h4>Work Experience Level :</h4>
          <ol id='job-type'>
            <li><input type="checkbox" /> Entry-Level</li>
            <li><input type="checkbox" /> Mid-Level</li>
            <li><input type="checkbox" /> Senior-Level</li>
          </ol>

          <h4>Specific Frameworks/ Tools :</h4>
          <ol id="job-type">
            {
              displayedCourses.map((courseName, index) => (
                <li key={index}><input type="checkbox" /> {courseName}</li>
              ))
            }
          </ol>

          <button1 id='btn-showMore' onClick={toggleCourseList}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button1>

          <div id='btnContainer'>
            <button>CONTINUE</button>
            <button>Skip For Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceComponent;

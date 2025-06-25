import React, { useState } from 'react';
import './Suggestion.css';

const SuggestionsComponent = () => {
  const [activeTab, setActiveTab] = useState('people');
  const [following, setFollowing] = useState({});

  const suggestedPeople = [
    { id: 1, name: 'John Smith', designation: 'Designer' },
    { id: 2, name: 'John Smith', designation: 'Designer' },
    { id: 3, name: 'John Smith', designation: 'Designer' },
    { id: 4, name: 'John Smith', designation: 'Designer' },
    { id: 5, name: 'John Smith', designation: 'Designer' },
    { id: 6, name: 'John Smith', designation: 'Designer' },
  ];

  const suggestedTopics = [
    { id: 7, name: 'Web Development' },
    { id: 8, name: 'UI/UX Design' },
    { id: 9, name: 'AI & Machine Learning' },
    { id: 10, name: 'Product Management' },
  ];

  const toggleFollow = (id) => {
    setFollowing((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="suggestions-wrapper">
      <div className="header-curve">
        <h3>Suggestions</h3>
      </div>

      <div className="content-section">
        <div className="tabs">
          <button1
            className={activeTab === 'people' ? 'active' : ''}
            onClick={() => setActiveTab('people')}
          >
            People
          </button1>
          <button1
            className={activeTab === 'topics' ? 'active' : ''}
            onClick={() => setActiveTab('topics')}
          >
            Topics
          </button1>
        </div>

        <div className="suggestion-list">
          {activeTab === 'people' &&
            suggestedPeople.map((person) => (
              <div key={person.id} className="suggestion-card">
                <div className="user-info">
                  <div className="avatar-placeholder"></div>
                  <div>
                    <p className="user-name">{person.name}</p>
                    <p className="user-role">{person.designation}</p>
                  </div>
                </div>
                <button
                  className={`follow-button ${
                    following[person.id] ? 'unfollow' : 'follow'
                  }`}
                  onClick={() => toggleFollow(person.id)}
                >
                  {following[person.id] ? 'Unfollow' : 'Follow'}
                </button>
              </div>
            ))}

          {activeTab === 'topics' &&
            suggestedTopics.map((topic) => (
              <div key={topic.id} className="suggestion-card">
                <div className="user-info">
                  <div className="avatar-placeholder"></div>
                  <div>
                    <p className="user-name">{topic.name}</p>
                  </div>
                </div>
                <button
                  className={`follow-button ${
                    following[topic.id] ? 'unfollow' : 'follow'
                  }`}
                  onClick={() => toggleFollow(topic.id)}
                >
                  {following[topic.id] ? 'Unfollow' : 'Follow'}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsComponent;

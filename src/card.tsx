import React, { useState } from "react";

const FeedbackSystem = () => {
  const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];
  const [upVotes, setUpvotes] = useState(0);
  const [downVotes, setDownvotes] = useState(0);

  return (
    <div>
      {aspects.map((aspect, index) => (
        <Card title={aspect} id={index} />
      ))}
    </div>
  );
};

export default FeedbackSystem;

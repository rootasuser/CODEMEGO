import React, { useState, useEffect } from 'react';

function About() {
  const [freelancerSince, setFreelancerSince] = useState(2022);
  const [successfulClients, setSuccessfulClients] = useState(20);
  const [averageCompletionTime, setAverageCompletionTime] = useState(200);
  const [priceStartAt, setPriceStartAt] = useState(150);

  // Simulate fetching data (for example purposes)
  useEffect(() => {
    setFreelancerSince(2022);
    setSuccessfulClients(20);
    setAverageCompletionTime(200);
    setPriceStartAt(150);
  }, []);

  return (
    <div className="about-content">
      <div className="circle-container">
        <div className="circle">
          <p>Freelancer Since {freelancerSince}</p>
        </div>
        <div className="circle">
          <p>Successful Clients {successfulClients}+ </p>
        </div>
        <div className="circle">
          <p>Average Completion Time {averageCompletionTime}hrs</p>
        </div>
        <div className="circle">
          <p>Price Starts At {priceStartAt} Pesos</p>
        </div>
      </div>
    </div>
  );
}

export default About;

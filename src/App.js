import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import flightData from './flights.json';

function App() {
  const { flightOffer } = flightData;
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = (source, destination) => {
    setSource(source);
    setDestination(destination);
  };

  const filteredFlights = flightOffer.filter(offer => {
    return (
      source === '' ||
      destination === '' ||
      (offer.itineraries[0].segments[0].departure.iataCode === source &&
        offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival
          .iataCode === destination)
    );
  });

  return (
    <div>
      <Navbar />
      <h1>Master Price</h1>
      <hr style={{ backgroundColor: '#0c1b4d' }} />
      <Search onSearch={handleSearch} />
      <p>Data Parse Successfully</p>
      <table>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2'}}>
            <th>Flight</th>
            <th>Aircraft</th>
            <th>Class</th>
            <th>Fare</th>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flightOffer.map((offer, index) => (
            <tr key={index}>
              <td>{offer.itineraries[0].segments.map((segment, i) => (
                <div key={i}>
                  {segment.marketingCarrier} {segment.flightNumber}
                </div>
              ))}</td>
              <td>{offer.itineraries[0].segments.map((segment, i) => (
                <div key={i}>
                  {segment.aircraft}
                </div>
              ))}</td>
              <td>{offer.class[0][0]}</td>
              <td>{offer.fareBasis[0][0]}</td>
              <td>{offer.itineraries[0].segments.map((segment, i) => (
                <div key={i}>
                  {segment.departure.iataCode} - {segment.arrival.iataCode}
                </div>
              ))}</td>
              <td>{offer.itineraries[0].segments.map((segment, i) => (
                <div key={i}>
                  {segment.departure.at}
                </div>
              ))}</td>
              <td>{offer.itineraries[0].segments.map((segment, i) => (
                <div key={i}>
                  {segment.arrival.at}
                </div>
              ))}</td>
              <td>{offer.itineraries[0].duration}</td>
              <td>{offer.price}<button className='button'>Select</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

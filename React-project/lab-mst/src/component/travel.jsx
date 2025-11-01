import React, { useState } from "react";

function DestinationList() {
  const [destinations, setDestinations] = useState([
    { id: 1, place: "Paris", country: "France" },
    { id: 2, place: "Tokyo", country: "Japan" },
    { id: 3, place: "New York", country: "USA" },
  ]);

  const [search, setSearch] = useState("");

  const handleRemove = (id) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  const filtered = destinations.filter(
    (d) =>
      d.place.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Where you want to go!!!</h1>

      <input
        type="text"
        placeholder="Search by place or country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Place</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.place}</td>
                <td>{d.country}</td>
                <td>
                  <button className="remove-btn" onClick={() => handleRemove(d.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No destinations found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DestinationList;
import countryFacts from "../api/countryData.json"

export const About = () =>{
    return (
        <section className="section-about container">
          <h2 className="container-title">
            Here are the Interesting Facts
            <br />
            we’re proud of
          </h2>
    
          <div className="gradient-cards">
            {countryFacts.map((country) => {
              const { id, name, capital, population, places_to_visit } =
                country;
              return (
                <div className="card" key={id}>
                  <div className="container-card bg-blue-box">
                    <p className="card-title">{name}</p>
                    <p>
                      <span className="card-description">Capital:</span>
                      {capital}
                    </p>
                    <p>
                      <span className="card-description">Population:</span>
                      {population}
                    </p>
                    <p>
                      <span className="card-description">places_to_visit:</span>
                      {places_to_visit}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      );
    };

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Title />
      </div>
      <ul>
        <li>
          <About />
        </li>
        <li>
          <Reason />
        </li>
        <li>
          <Solution />
        </li>
      </ul>
    </>
  );
}

function Title() {
  return <h1>UNEMPLOYMENT</h1>;
}

const About = () => {
  return (
    <div>
      <h2>ABOUT</h2>
      <p>
        Unemployment, according to the OECD
        <span>(Organisation for Economic Co-operation and Development)</span>,
        is people above a specified age <span>(usually 15)</span> not being in
        paid employment or self-employment but currently available for work
        during the reference period. Unemployment is measured by the
        unemployment rate, which is the number of people who are unemployed as a
        percentage of the labour force{" "}
        <span>
          (the total number of people employed added to those unemployed).
        </span>
      </p>
      <p>
        Unemployment and the status of the economy can be influenced by a
        country through, for example, fiscal policy. Furthermore, the monetary
        authority of a country, such as the central bank, can influence the
        availability and cost for money through its monetary policy. In addition
        to theories of unemployment, a few categorisations of unemployment are
        used for more precisely modelling the effects of unemployment within the
        economic system. Some of the main types of unemployment include
        structural{" "}
        <span>
          unemployment, frictional unemployment, cyclical unemployment,
          involuntary unemployment and classical unemployment.
        </span>
        Structural unemployment focuses on foundational problems in the economy
        and inefficiencies inherent in labor markets, including a mismatch
        between the supply and demand of laborers with necessary skill sets.
        Structural arguments emphasize causes and solutions related to
        disruptive technologies and globalization. Discussions of frictional
        unemployment focus on voluntary decisions to work based on individuals'
        valuation of their own work and how that compares to current wage rates
        added to the time and effort required to find a job. Causes and
        solutions for frictional unemployment often address job entry threshold
        and wage rates.
      </p>
    </div>
  );
};

const Reason = () => {
  return (
    <>
      <h2>REASON</h2>
      <div>
        <ol type="1">
          <li>
            <h4>The Caste System</h4>
            <ul>
              <li>
                The caste system, a structure of social stratification that can
                potentially pervade virtually every aspect of life in India is a
                major factor in generating unemployment
              </li>
              <li>
                In some locations, certain kinds of work are prohibited for
                members of particular castes. This also leads to the result that
                work is often given to members of a certain community, rather
                than to those who truly deserve the job those who have the right
                skills
              </li>
              <li>The result is higher levels of unemployment</li>
            </ul>
          </li>
          <li>
            <h4>Inadequate Economic Growth</h4>
            <ul>
              <li>
                Indian economy is underdeveloped and role of economic growth is
                inadequate
              </li>
              <li>
                This slow growth fails to provide enough unemployment
                opportunities to the increasing population
              </li>
              <li>
                This means that as the population increases, the economy cannot
                keep up with demands for employment and an increasing share of
                people are unable to find work. The result is insufficient
                levels of employment nationwide.
              </li>
            </ul>
          </li>
          <li>
            <h4>Increase in Population</h4>
            <ul>
              <li>
                India’s population is predicted to exceed China’s by the year
                2024; it will, furthermore, probably be the most populous
                country for the entirety of the 21st century.
              </li>
              <li>
                As the country’s economic growth cannot keep up with population
                growth, this leads to a larger share of the society being
                unemployed
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};

const Solution = () => {
  return (
    <>
      <h2>SOLUTION</h2>
      <h3>Following are the suggestions to solve unemployment problem:-</h3>
      <div>
        <ol type="i">
          <li>
            <h4>Change in industrial technique:</h4>
            <p>
              Production technique should suit the needs and means of the
              country. It is essential that labour intensive technology should
              be encouraged in place of capital intensive technology.
            </p>
          </li>
          <li>
            <h4>Change in education system:</h4>
            <p>
              Educational pattern should be completely changed. Students who
              have liking for higher studies should be admitted in colleges and
              universities. Emphasis should be given on vocational education.
              Qualified engineers should start their own small units.
            </p>
          </li>
          <li>
            <h4>Expansion of Employment exchanges:</h4>
            <p>
              More employment exchanges should be opened. Information regarding
              employment opportunities should be given to people.
            </p>
          </li>
          <li>
            <h4> More assistance to self employed people:</h4>
            <p>
              Most people in India are self employed. They are engaged in
              agriculture, trade, cottage and small scale industries etc. These
              persons should be helped financially, providing raw materials and
              technical training.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default App;

import "./App.scss";

function App() {
  return (
    <main>
      <section aria-labelledby="community-heading" className="tile-1">
        <h1 id="community-heading">Join our community</h1>
        <p>30-day, hassle-free money-back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>

      <div className="tiles">
        <section aria-labelledby="subscription-heading" className="tile-2">
          <h2 id="subscription-heading">Monthly Subscription</h2>
          <div>
            <span aria-hidden="true">$29</span>
            <span>per month</span>
            <span className="sr-only">29 dollars per month</span>
          </div>
          <p>Full access for less than $1 a day</p>
          <div>
            <button aria-label="Sign up for the monthly subscription plan">
              Sign Up
            </button>
          </div>
        </section>

        <section aria-labelledby="why-us-heading" className="tile-3">
          <h2 id="why-us-heading">Why Us</h2>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;

import "./join.css";

const Join = () => {
  return (
    <div className="join_section">
      <div className="join_text">
        <h3>Join our travel revolution</h3>
        <p>
          Sign up to stay in the know - hot new travel spots, how we strive to
          make the world a better place, and all sorts of surprises.
        </p>
        <div className="input_section">
          <form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;

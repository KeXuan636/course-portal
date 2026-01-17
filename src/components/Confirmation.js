import { useLocation, Link } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  if (!state) return <h2>No registration data</h2>;

  return (
    <div className="container">
      <h1>Thank You!</h1>

      <p>
        <strong>{state.name}</strong>, you have successfully registered for:
      </p>

      <h3>{state.course}</h3>

      <p>
        A confirmation email has been sent to <strong>{state.email}</strong>.
      </p>

      <Link to="/diplomas">Browse more courses</Link>
    </div>
  );
}

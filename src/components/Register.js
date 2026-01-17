import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.course) {
      alert("Please fill in all fields");
      return;
    }

    navigate("/confirmed", { state: form });
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Course
          <input name="course" value={form.course} onChange={handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

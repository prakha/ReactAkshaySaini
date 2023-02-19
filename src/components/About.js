import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <h1>This is react js about us page</h1>
      <Outlet/>
    </div>
  );
};

export default About;

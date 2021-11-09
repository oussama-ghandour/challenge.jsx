import image5 from "../images/John-Doe.jpg"
function Aboutme () {
    return (
      <div>
        <section id="about-me">
          <h1>
            Hello, my name is
            <span class="rotate text-important">John doe</span>,<br />
            and i make horrible websites.
          </h1>
          <img class="avatar" src={image5} alt="jhon-doe" />
        </section>
      </div>
    );
}
export default Aboutme
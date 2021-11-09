import image1 from "../images/proj1.jpg";
import image2 from "../images/proj2.jpg";
import image3 from "../images/proj3.jpg";
import image4 from "../images/proj4.jpg";

function Project () {

    return (
      <div>
        <section id="projects">
          <h2 class="text-important">Projects</h2>
          <div class="projects-container">
            <div class="project-card">
              <img src={image1}/>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat
                laudantium aliquam.
              </p>
              <p>
                <a href="#">Github Link</a>
              </p>
            </div>

            <div class="project-card">
              <img src={image2}/>
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat
                laudantium aliquam.
              </p>
              <p>
                <a href="#">Github Link</a>
              </p>
            </div>

            <div class="project-card">
              <img src={image3}/>
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat
                laudantium aliquam.
              </p>
              <p>
                <a href="#">Github Link</a>
              </p>
            </div>

            <div class="project-card">
              <img src={image4} />
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat
                laudantium aliquam.
              </p>
              <p>
                <a href="#">Github Link</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
    
}
export default Project
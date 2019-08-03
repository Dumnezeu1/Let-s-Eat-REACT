import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div className="about-products-bg">
        <div className="about-products-bg_bg">
          <div className="textp">
            <h1>Despre Let's Eat</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              ratione voluptate, quos assumenda deserunt inventore veniam, ipsam
              earum voluptates, similique possimus laboriosam? Obcaecati non
              esse laudantium aut veniam voluptatem laboriosam velit
              voluptatibus? Enim saepe eos esse beatae,ullam recusandae officia
              vitae rem aliquam fugiat in doloremque quibusdam nulla porro fuga.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapperr">
        <div className="gallery">
          <div className="gallery_about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/9.png"
              alt="Founder"
            />
            <h3>Lora</h3>
            <h4>Founder</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              repellendus quaerat libero dolorem nostrum. Ea?
            </p>
          </div>
          <div className="gallery_about">
            {" "}
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/2.png"
              alt="Co-Founder"
            />
            <h3>Mark</h3>
            <h4>Co-Founder</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              repellendus quaerat libero dolorem nostrum. Ea?
            </p>
          </div>
          <div className="gallery_about">
            {" "}
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/3.png"
              alt="Designer"
            />
            <h3>Ana</h3>
            <h4>Tot aici</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              repellendus quaerat libero dolorem nostrum. Ea?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

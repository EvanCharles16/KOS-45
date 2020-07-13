import React, { Component } from "react";

const text = "ini adalah text";
class Article extends Component {
  render() {
    return (
      <div className="bg-light pt-5 pb-5" style={{ marginTop: "5rem" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb d-flex justify-content-center">
            <li class="breadcrumb-item">
              <a href="/" className="text-danger">
                Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Article
            </li>
          </ol>
        </nav>
        <div style={{ margin: "0rem 10rem" }}>
          <h4 className="mb-4">
            Articles tentang <span className="text-danger">Bullying</span>
          </h4>

          <div class="card mb-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://www.childrens.com/wps/wcm/connect/childrenspublic/f64ee2bc-f887-4366-b8e9-c67b486a1041/shutterstock_573798472_800x480.jpg?MOD=AJPERES&CVID="
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body my-auto">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://images.squarespace-cdn.com/content/5475f6eae4b0821160f6ac3e/1569939969068-1MVN6OM2Y8U41T08EYE4/bigstock-Victim-Women-Depressed-Girl-I-260965918.jpg?content-type=image%2Fjpeg"
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body my-auto">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
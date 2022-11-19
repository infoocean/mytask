import React from "react";

function Footer() {
  return (
    <>
      <div class=" my-5">
        <footer
          class="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          <section
            class="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: " #21D192", paddingTop:'40px' }}
          >
            <div class="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </section>

          <section class="">
            <div class=" text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width:'60px', backgroundColor:'#7c4dff', height:'2px'}}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width:'60px', backgroundColor:'#7c4dff', height:'2px'}}
                  />
                  <p>
                    <a href="#!" class="text-dark">
                      MDBootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      MDWordPress
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      BrandFlow
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Bootstrap Angular
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width:'60px', backgroundColor:'#7c4dff', height:'2px'}}
                  />
                  <p>
                    <a href="#!" class="text-dark">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">
                      Help
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold">Contact</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width:'60px', backgroundColor:'#7c4dff', height:'2px'}}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class=" p-4 pb-0">
            <section class="">
              <form action="">
                <div class="row d-flex justify-content-center">
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div class="col-md-5 col-12">
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        class="form-control"
                        style={{color:'whitesmoke', backgroundColor:'white', border:'1px solid gray'}}
                      />
                      <label class="form-label" for="form5Example2">
                        Email address
                      </label>
                    </div>
                  </div>

                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>

          <div
            class="text-center p-3"
           style={{backgroundColor:' rgba(0, 0, 0, 0.2)'}}
          >
            © 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

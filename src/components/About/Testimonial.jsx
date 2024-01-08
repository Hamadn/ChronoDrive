import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Testimonial() {
  return (
    <div>
      <div className="flex items-center justify-between w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={2}
        >
          <h1 className="text-5xl font-bold xl:block hidden leading-tight text-black-800">
            What our customers are
            <br />
            saying
          </h1>
          <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
            What our customers are saying
          </h1>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="flex">
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-red-100 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                        alt="commas"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                        "Exceptional Service!"
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        I had a fantastic experience at CHRONODRIVE. The staff
                        was friendly, knowledgeable, and went above and beyond
                        to help me find the perfect car. The entire process was
                        smooth, and I felt well-informed at every step. I highly
                        recommend CHRONODRIVE for their exceptional service!
                      </p>
                    </div>
                    <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">
                        Sarah T
                      </p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                        Happy Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div
                className="flex relative"
                style={{ transform: "translateX(0%)" }}
              >
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      loading="lazy"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-red-100 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                        alt="commas"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                        "Hassle-Free Purchase"
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        Purchasing my new car from CHRONODRIVE was a breeze. The
                        team was transparent about pricing, and there were no
                        hidden fees. They worked within my budget to find a
                        vehicle that met my needs. The customer service was
                        outstanding, making it a hassle-free and enjoyable
                        buying experience.
                      </p>
                    </div>
                    <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">
                        Alex M
                      </p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Testimonial;

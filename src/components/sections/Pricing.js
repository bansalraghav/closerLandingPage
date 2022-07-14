import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Pricing = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Pricing Plans',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>


            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>

                <div class="w-full md:w-1/2 lg:w-1/3">
                  <div
                    class="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                    data-wow-delay=".15s">
                    <span class="mb-2 block text-base font-medium uppercase text-dark" >
                      STARTING FROM
                    </span>
                    <h2 class="mb-9 text-[28px] font-semibold text-primary">
                       FREE
                    </h2>
                    <div class="mb-10">
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        Basic Popup Customisation
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        100 redirects / month
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color" >
                        Basic analytics overview
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color" >
                        Free updates
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        Closer branding on popup
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                    <div class="w-full">
                      <a
                        href="javascript:void(0)"
                        class="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                        Purchase Now
                      </a>
                    </div>
                    <span class="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"></span>
                  </div>
                </div>

                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                </div>
              </div>
            </div>



            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div>

                <div class="w-full md:w-1/2 lg:w-1/3">
                  <div
                    class="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                    data-wow-delay=".15s">
                    <span class="mb-2 block text-base font-medium uppercase text-dark" >
                      STARTING FROM
                    </span>
                    <h2 class="mb-9 text-[28px] font-semibold text-primary">
                      $ 9.99/mo
                    </h2>
                    <div class="mb-10">
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        Complete popup customisation
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        1000 redirects / month
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color" >
                        Closer branding removed
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color" >
                        Advanced analytics overview
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        Priority customer support
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                    <div class="w-full">
                      <a
                        href="javascript:void(0)"
                        class="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                        Purchase Now
                      </a>
                    </div>
                    <span class="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"></span>
                  </div>
                </div>

                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"></div>
              </div>
            </div>



            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>


                <div class="w-full md:w-1/2 lg:w-1/3">
                  <div
                    class="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                    data-wow-delay=".15s">
                    <span class="mb-2 block text-base font-medium uppercase text-dark" >
                      STARTING FROM
                    </span>
                    <h2 class="mb-9 text-[28px] font-semibold text-primary">
                      $ 29.99/mo
                    </h2>
                    <div class="mb-10">
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        First 500 confirmed Instagram followers FREE every month. After that, $0.05 for every confirmed follower
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        All Premium Plan features
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color" >
                        Unlimited redirects
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color" >
                        Follower details for all confirmed followers
                      </p>
                      <p class="mb-1 text-base font-medium leading-loose text-body-color">
                        Complete analytics & insight
                      </p>
                    </div>
                    <div class="w-full">
                      <a
                        href="javascript:void(0)"
                        class="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                        Purchase Now
                      </a>
                    </div>
                    <span class="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"></span>
                  </div>
                </div>


                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;

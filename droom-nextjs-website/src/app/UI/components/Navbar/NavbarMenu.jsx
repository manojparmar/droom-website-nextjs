"use client"
import React from 'react';
import Image from 'next/image';

const NavbarMenu = () => {
  const hostUrl = process.env.REACT_APP_HOST_URL || 'https://droom.in/';

  const menuItems = [
    {
      title: 'All Category',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      ),
      subItems: [
        { label: 'Homepage', link: '#' },
        { label: 'Portfolio', link: '#' },
        { label: 'About', link: '#' },
      ],
    },
    // Add more items as needed
  ];

  return (
    <div>
      <div className="md:container md:mx-auto navbar bg-white rounded-md pt-2 shadow-xl">
        <div className="navbar-start">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                {menuItem.icon && (
                  <span className="inline-block mr-2">{menuItem.icon}</span>
                )}
                <span>{menuItem.title}</span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItem.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.link}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="navbar-center gap-6">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <Image src={
                'https://cdn1.acedms.com/photos/images/web/search/header/buy.png'}
                alt="Youtube"
                width="21"
                height="21"
              />
              Buy</div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-t-none">
              <ul className="menu xl:menu-horizontal lg:min-w-max rounded-box">
                <li>
                  <a className="block py-2 text-center">
                    Used Vehicle
                  </a>
                  <ul className="flex">
                    <li>
                      <a href={`${hostUrl}/buy`}>
                        <div className='text-center'>
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/car.png"
                            alt="Car"
                            width="41"
                            height="41"
                            property
                          />
                          <span >Car</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/buy`}>
                        <div className='text-center'>
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/bike.png"
                            alt="Car"
                            width="24"
                            height="24"
                            property
                          />
                          <span >Bike</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/buy`}>
                        <div className='flex flex-col items-center'>
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/scooter.png"
                            alt="Car"
                            width="19"
                            height="19"
                            property
                          />
                          <span >Scooter</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="block py-2 text-center">
                    New vehicle
                  </a>
                  <ul className="flex">
                    <li>
                      <a href={`${hostUrl}/buy`}>
                        <div className='text-center'>
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/car.png"
                            alt="Car"
                            width="41"
                            height="41"
                            property
                          />
                          <span >Car</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/buy`}>
                        <div className='text-center'>
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/bike.png"
                            alt="Car"
                            width="24"
                            height="24"
                            property
                          />
                          <span >Bike</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/buy`}>
                        <div className='flex flex-col items-center'>
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/scooter.png"
                            alt="Car"
                            width="19"
                            height="19"
                            property
                          />
                          <span >Scooter</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a className='text-center'>How use it?</a>
            </div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <Image src={
                'https://cdn1.acedms.com/photos/images/web/search/header/sell.png'
              }
                alt="Youtube"
                width="21"
                height="21"
                property
              />
              Sell</div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-t-none">
              <ul className="menu  lg:min-w-max rounded-box">
                <li>
                  <a href={`${hostUrl}/quicksell`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/individual.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >Individual</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/dealer`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/dealer.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >Dealer</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/vehicle-exchange-flow`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/exchange.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >Exchange</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <Image
                src={
                  'https://cdn1.acedms.com/photos/images/web/search/header/loan.png'
                }
                alt="Youtube"
                width="21"
                height="21"
                property
              />
              Get Loan</div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-t-none">
              <ul className="menu  lg:min-w-max rounded-box">
                <li>
                  <a href={`${hostUrl}/loan`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/car-loan.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >Car Loan</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/loan`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/bike-loan.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >Bike Loan</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/loan`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/scooter-loan.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >Scooter Loan</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <Image
                src={
                  'https://cdn1.acedms.com/photos/images/web/search/header/insurance.png'
                }
                alt="Youtube"
                width="21"
                height="21"
                property
              />
              Get Insurance</div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-t-none">
              <ul className="menu lg:min-w-max rounded-box">
                <li>
                  <a href={`${hostUrl}/insurance`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/auto-insurance.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >
                        Get Auto Insurance
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/insurance`}>
                    <div className='flex items-center gap-2'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/renew-auto-insurance.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <span >
                        Renew Auto Insurance
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <Image
                src={
                  'https://cdn1.acedms.com/photos/images/web/search/header/service.png'
                }
                alt="Youtube"
                width="21"
                height="21"
                property
              />
              Get service</div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-t-none">
              <ul className="menu xl:menu-horizontal lg:min-w-max rounded-box">
                <li>
                  <a className="block py-2 text-center">
                    Assurance Services
                  </a>
                  <ul className="flex">
                    <li>
                      <a href={`${hostUrl}/rsa`}>
                        <div >
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/car.png"
                            alt="Car"
                            width="21"
                            height="21"
                            property
                          />
                          <span >
                            Roadside <br />
                            Assistance
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/warranty`}>
                        <div >
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/bike.png"
                            alt="Car"
                            width="21"
                            height="21"
                            property
                          />
                          <span >
                            Extended <br />
                            Warranty
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="block py-2 text-center">
                    Repair & Maintenance Services
                  </a>
                  <ul className="flex">
                    <li>
                      <a href={`${hostUrl}/servicing`}>
                        <div >
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/car.png"
                            alt="Car"
                            width="21"
                            height="21"
                            property
                          />
                          <span >
                            Vehicle <br />
                            Servicing
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/car-care-and-detailing`}>
                        <div >
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/bike.png"
                            alt="Car"
                            width="21"
                            height="21"
                            property
                          />
                          <span >
                            Denting & <br />
                            Painting
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/denting-and-painting`}>
                        <div >
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/scooter.png"
                            alt="Car"
                            width="21"
                            height="21"
                            property
                          />
                          <span >
                            Denting & <br />
                            Painting
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`${hostUrl}/wheel-maintenance`}>
                        <div >
                          <Image
                            src="https://cdn1.acedms.com/photos/images/web/search/header/scooter.png"
                            alt="Car"
                            width="21"
                            height="21"
                            property
                          />
                          <span >
                            Wheel <br />
                            Maintenance
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <Image
                src={
                  'https://cdn1.acedms.com/photos/images/web/search/header/reports.png'
                }
                alt="Youtube"
                width="21"
                height="21"
                property
              />
              Get Reports</div>
            <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box rounded-t-none">
              <ul className="menu lg:min-w-max rounded-box">
                <li>
                  <a href={`${hostUrl}/obv/valuation`}>
                    <div className='flex gap-2 items-center'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/valuation.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <div >
                        Valuation Report
                        <span className='block'>
                          Check Fair Market Price under 10 Secs
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/inspection`}>
                    <div className='flex gap-2 items-center'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/inspection.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <div >
                        Inspection Report
                        <span className='block'>
                          Check Vehicle Condition with 1100+ Checkpoints
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`${hostUrl}/history`}>
                    <div className='flex gap-2 items-center'>
                      <Image
                        src="https://cdn1.acedms.com/photos/images/web/search/header/history.png"
                        alt="Car"
                        width="21"
                        height="21"
                        property
                      />
                      <div >
                        History Report
                        <span className='block'>
                          Check Any Vehicle History in 10 Secs
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="menu-horizontal px-1 gap-4">
            <li className='flex items-center'>
              <Image
                priority
                src={'https://cdn1.acedms.com/imgusr/web/beta/images/new/foot/social/youtube.png'}
                alt="Youtube"
                width="42"
                height="42"
              />
              <span className='text-xs font-medium'>TVC</span>
            </li>
            <li className='flex items-center'>
              <Image
                priority
                src={'https://cdn1.acedms.com/imgusr/web/beta/images/new/head/apple-black-logo.png'}
                alt="Download App"
                width="16"
                height="14"
              />
            </li>
            <li className='flex items-center'>
              <Image
                priority
                src={'https://cdn1.acedms.com/imgusr/web/beta/images/new/head/playstore.png'}
                alt="Download App"
                width="16"
                height="14"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;

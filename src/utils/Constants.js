const Constants = {
  FOOTER: {
    ABOUT: [
      {
        name: 'Contact Us',
        endpoint: '/contact'
      },
      {
        name: 'About Us',
        endpoint: '/about'
      },
      {
        name: 'Careers',
        endpoint: '/careers'
      },
      {
        name: 'Stories',
        endpoint: '/stories'
      },
      {
        name: 'Press',
        endpoint: '/press'
      }
    ],
    HELP: [
      {
        name: 'Payments',
        endpoint: '/payments'
      },
      {
        name: 'Shipping',
        endpoint: '/shipping'
      },
      {
        name: 'Cancellation & Returns',
        endpoint: '/cancellationandreturns'
      },
      {
        name: 'FAQ',
        endpoint: '/faq'
      },
      {
        name: 'Report Infringement',
        endpoint: '/report'
      }
    ],
    POLICY: [
      {
        name: 'Return Policy',
        endpoint: '/returnpolicy'
      },
      {
        name: 'Terms Of Use',
        endpoint: '/termsofuse'
      },
      {
        name: 'Security',
        endpoint: '/security'
      },
      {
        name: 'Privacy',
        endpoint: '/privacy'
      },
      {
        name: 'Sitemap',
        endpoint: '/sitemap'
      },
      {
        name: 'EPR Compliance',
        endpoint: '/eprcompliance'
      }
    ],
    SOCIAL: [
      {
        name: 'Facebook',
        endpoint: 'https://www.facebook.com'
      },
      {
        name: 'Twitter',
        endpoint: 'https://www.twitter.com'
      },
      {
        name: 'Youtube',
        endpoint: 'https://www.youtube.com'
      }
    ],
    FOOTERCONTACT: [
      {
        name: 'Mail Us',
        address: {
          company_name: 'Tesla Corp',
          line_1: 'Tesla Corp',
          line_2: '5th Avenue, Second Lane',
          city: 'CA',
          country: 'USA',
          phone: ''
        }
      },
      {
        name: 'Registered Office Address',
        address: {
          company_name: 'Tesla Corp',
          line_1: 'Tesla Corp',
          line_2: '5th Avenue, Second Lane',
          city: 'CA',
          country: 'USA',
          phone: ''
        }
      }
    ],
    FOOTERBOTTOMLIST: [
      {
        name: 'Sell On Tesla',
        icon: 'fa-solid fa-question-circle',
        endpoint: '/seller/login'
      },
      {
        name: 'Advertise',
        icon: 'fa-solid fa-rectangle-ad',
        endpoint: '/advertise'
      },
      {
        name: 'Gift Cards',
        icon: 'fa-solid fa-gifts',
        endpoint: '/gift'
      },
      {
        name: 'Help Center',
        icon: 'fa-solid fa-circle-info',
        endpoint: '/help'
      },
      {
        name: '© 2020-2022 Tesla.com',
        icon: undefined,
        endpoint: '/'
      }
    ]
  },
  BREADCRUMBS: [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Computers',
      route: '/search'
    },
    {
      name: 'Laptops',
      route: '/search'
    },
    {
      name: 'Acer Laptops',
      route: '/search'
    },
    {
      name: 'Acer Aspire 3',
      route: '/search'
    }
  ],
  SORTOPTIONS: [
    {
      name: 'Sort By',
    },
    {
      name: 'Popularity',
    },
    {
      name: 'Newest First',
    },
    {
      name: 'Price -- Low to High',
    },
    {
      name: 'Price -- High to Low',
    },
  ],
  OFFERLIST: [
    {
      name: 'Stylish & Portable Thin and Light Laptop',
      hyperlink: {
        name: 'T & C',
        link: '#',
      }
    },
    {
      name: '13.3 inch Quad HD LED Backlit IPS Display',
    },
    {
      name: 'Light Laptop without Optical Disk Drive',
    },
    {
      name: 'Stylish & Portable Thin and Light Laptop',
    },
  ],
  SOCIALLOGINS: [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      path: '/auth/facebook',
      is_active: true
    },
    {
      name: 'Google',
      icon: 'fab fa-google-plus-g',
      path: '/auth/facebook',
      is_active: true
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      path: '/auth/facebook',
      is_active: false
    },
  ],
  BACKEND_DOMAIN: 'http://localhost:3000',
  FormValidation: {
    LoginUser: 'loginUser'
  },
  MORELIST: [
    {
      name: 'Sell on Tesla',
      path: '/sell',
      icon: 'fa fa-line-chart'
    },
    {
      name: '24/7 Customer Care',
      path: '/contact',
      icon: 'fa fa-question'
    },
    {
      name: 'Advertise',
      path: '/advertise',
      icon: 'fa fa-television'
    },
    {
      name: 'Download App',
      path: '/download',
      icon: 'fa fa-download'
    },
  ],
  ACCOUNTDROPDOWNLIST: [
    {name: 'My Profile', path: '/account', icon: 'fa-solid fa-user'},
    {name: 'Orders', path: '/orders' , icon: 'fa-brands fa-first-order-alt'},
    {name: 'Wishlist', path: '/wishlist', icon: 'fa-solid fa-heart'},
    {name: 'Notifications', path: '/notifications', icon: 'fa-solid fa-bell'},
    {name: 'Logout', path: '/logout', icon: 'fa-solid fa-arrow-right-from-bracket'},
  ],
  STORAGEKEYS: {
    USER: 'user',
    TOKEN: 'token',
    TEMPGRIDITEM: 'temp_grid_item',
  }
};

export default Constants;

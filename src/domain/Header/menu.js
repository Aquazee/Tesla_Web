import React from 'react';

const menu = {
  items: [
    {
      electronics: {
        title: 'Electronics',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: 'Mobiles',
                  url: '/mobile-phones-store',
                  type: 'heading'
                },
                {
                  title: 'Mi',
                  url: '/mobiles/mi~brand/pr?sid=tyy,4io'
                },
                {
                  title: 'Realme',
                  url: '/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DRealme'
                },
                {
                  title: 'Samsung',
                  url: '/samsung-mobile-store'
                },
                {
                  title: 'Infinix',
                  url: '/mobiles/pr?sid=tyy%2C4io&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DInfinix'
                },
                {
                  title: 'OPPO',
                  url: '/oppo-mobile-phones-store'
                },
                {
                  title: 'Apple',
                  url: '/apple-products-store'
                },
                {
                  title: 'Vivo',
                  url: '/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.serviceability%5B%5D%3Dfalse&p%5B%5D=facets.brand%255B%255D%3DVivo'
                },
                {
                  title: 'Honor',
                  url: '/search?p[]=facets.brand%255B%255D%3DHonor&sid=tyy%2F4io&otracker=CLP_filters'
                },
                {
                  title: 'Asus',
                  url: '/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DAsus'
                },
                {
                  title: 'PocoX2',
                  url: '/mobiles/~cs-1c8v939u5p/pr?sid=tyy%2C4io&collection-tab-name=POCO%20X2'
                },
                {
                  title: 'realmeNarzo10',
                  url: '/tyy/4io/~cs-bbqm8szk02/pr?sid=tyy,4io&collection-tab-name=Realme+Narzo+10'
                },
                {
                  title: 'InfinixHot9',
                  url: '/tyy/4io/~cs-y0g7ho0c3m/pr?sid=tyy,4io&collection-tab-name=Infinix+Hot+9'
                },
                {
                  title: 'IQOO3',
                  url: '/tyy/4io/~cs-kypqvabi8g/pr?sid=tyy,4io&collection-tab-name=IQOO'
                },
                {
                  title: 'iPhoneSE',
                  url: '/mobiles/~cs-fdeu9sdw9c/pr?sid=tyy%2C4io&collection-tab-name=Iphone%20SE%202020'
                },
                {
                  title: 'Motorolarazr',
                  url: '/mobiles/~cs-35ecwn2f18/pr?sid=tyy%2C4io'
                },
                {
                  title: 'realmeNarzo10A',
                  url: '/tyy/4io/~cs-crohk4na9x/pr?sid=tyy,4io&collection-tab-name=Realme+Narzo+10A'
                },
                {
                  title: 'Motorolag8powerlite',
                  url: '/tyy/4io/~cs-w3eqqvrrdq/pr?sid=tyy,4io&collection-tab-name=Motorola+G8+Power+Lite'
                }
              ],
              [
                {
                  title: 'MobileAccessories',
                  url: '/mobile-phone-cases-covers-screenguards-store',
                  type: 'heading'
                },
                {
                  title: 'MobileCases',
                  url: '/mobile-accessories/cases-and-covers/pr?sid=tyy,4mr,q2u'
                },
                {
                  title: 'Headphones&amp;Headsets',
                  url: '/headphones-store'
                },
                {
                  title: 'PowerBanks',
                  url: '/mobile-accessories/power-banks/pr?sid=tyy,4mr,fu6&otracker=categorytree'
                },
                {
                  title: 'Screenguards',
                  url: '/mobile-accessories/screen-guards/pr?sid=tyy,4mr,lrv'
                },
                {
                  title: 'MemoryCards',
                  url: '/mobile-accessories/memory-cards-readers/memory-cards/pr?sid=tyy,4mr,zzf,7y7'
                },
                {
                  title: 'SmartHeadphones',
                  url: '/wearable-smart-devices/smart-headphones/pr?sid=ajy,vam'
                },
                {
                  title: 'MobileCables',
                  url: '/mobile-accessories/cables/pr?sid=tyy,4mr,3nu'
                },
                {
                  title: 'MobileChargers',
                  url: '/mobile-accessories/chargers/pr?sid=tyy,4mr,tp2'
                },
                {
                  title: 'MobileHolders',
                  url: '/mobile-accessories/mobile-holders/pr?sid=tyy,4mr,vnf&marketplace=FLIPKART'
                },
                {
                  title: 'SmartWearableTech',
                  url: '/smart-wearables-store',
                  type: 'heading'
                },
                {
                  title: 'SmartWatches',
                  url: '/smartwatches-store'
                },
                {
                  title: 'SmartGlasses(VR)',
                  url: '/wearable-smart-devices/smart-glasses/pr?sid=ajy%2Ctcy'
                },
                {
                  title: 'SmartBands',
                  url: '/wearable-smart-devices/smart-bands/pr?sid=ajy%2Cq7p'
                },
                {
                  title: 'HealthCareAppliances',
                  url: '/health-and-appliances-store',
                  type: 'heading'
                },
                {
                  title: 'BpMonitors',
                  url: '/health-personal-care-appliances/health-care/health-care-devices/blood-pressure-monitors/pr?sid=zlw,nyl,bvv,kbk'
                },
                {
                  title: 'WeighingScale',
                  url: '/beauty-and-personal-care/health-care/health-care-devices/weighing-scales/pr?sid=t06,nyl,bvv,o4o'
                }
              ],
              [
                {
                  title: 'Laptops',
                  url: '/laptops-store',
                  type: 'heading'
                },
                {
                  title: 'GamingLaptops',
                  url: '/gaming-laptops-store?otracker=nmenu_sub_Electronics_0_Gaming%20Laptops'
                },
                {
                  title: 'DesktopPCs',
                  url: '/desktop-pc-store',
                  type: 'heading'
                },
                {
                  title: 'Gaming&amp;Accessories',
                  url: '/gaming-store',
                  type: 'heading'
                },
                {
                  title: 'ComputerAccessories',
                  url: '/computer-accessories-store',
                  type: 'heading'
                },
                {
                  title: 'ExternalHardDisks',
                  url: '/external-hard-disk-store'
                },
                {
                  title: 'Pendrives',
                  url: '/computers/storage/pen-drives/pr?sid=6bo,jdy,uar'
                },
                {
                  title: 'LaptopSkins&Decals',
                  url: '/laptop-accessories/laptop-skins-decals/pr?sid=6bo,ai3,zvm'
                },
                {
                  title: 'LaptopBags',
                  url: '/laptop-accessories/laptop-bags/pr?sid=6bo%2Cai3%2Cqq9'
                },
                {
                  title: 'Mouse',
                  url: '/laptop-accessories/mouse/pr?sid=6bo,ai3,2ay'
                },
                {
                  title: 'ComputerPeripherals',
                  url: '/peripherals-store',
                  type: 'heading'
                },
                {
                  title: 'Printers&amp;InkCartridges',
                  url: '/printer-inks-store'
                },
                {
                  title: 'Monitors',
                  url: '/monitors-store'
                },
                {
                  title: 'Tablets',
                  url: '/tablets-store',
                  type: 'heading'
                },
                {
                  title: 'AppleiPads',
                  url: '/tablets/~apple-ipads/pr?sid=tyy,hry'
                }
              ],
              [
                {
                  title: 'Televisions',
                  url: '/television-store'
                },
                {
                  title: 'Speakers',
                  url: '/audio-speaker-store',
                  type: 'heading'
                },
                {
                  title: 'HomeAudioSpeakers',
                  url: '/audio-video/speakers/pr?count=40&otracker=categorytree&p%5B%5D=facets.type%255B%255D%3DHome%2BAudio%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DLaptop%252FDesktop%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DSoundbar&sid=0pm%2F0o7'
                },
                {
                  title: 'HomeTheatres',
                  url: '/audio-video/speakers/pr?sid=0pm%2C0o7&otracker=categorytree&p%5B%5D=facets.type%255B%255D%3DHome%2BTheatre&p%5B%5D=facets.type%255B%255D%3DTower%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DSoundbar&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock'
                },
                {
                  title: 'Soundbars',
                  url: '/audio-video/speakers/pr?sid=0pm%2C0o7&p%5B%5D=facets.type%255B%255D%3DSoundbar&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured'
                },
                {
                  title: 'BluetoothSpeakers',
                  url: '/audio-video/speakers/pr?sid=0pm%2C0o7&otracker=categorytree&p%5B%5D=facets.features%255B%255D%3DBluetooth'
                },
                {
                  title: 'DTHSetTopBox',
                  url: '/home-entertainment/dth/pr?count=40&otracker=categorytree&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&sid=ckf%2F9wn'
                },
                {
                  title: 'SmartHomeAutomation',
                  url: '/smart-home-automation-store',
                  type: 'heading'
                },
                {
                  title: 'GoogleNest',
                  url: '/google-nest-mini-store'
                },
                {
                  title: 'Camera',
                  url: '/camera-clp-store',
                  type: 'heading'
                },
                {
                  title: 'DSLR&Mirrorless',
                  url: '/cameras/dslr~type/pr?sid=jek%2Cp31'
                },
                {
                  title: 'Compact&BridgeCameras',
                  url: '/cameras/point-shoot~type/pr?sid=jek%2Cp31'
                },
                {
                  title: 'Sports&Action',
                  url: '/cameras/sports-action/pr?count=40&sid=jek%2Fp31%2Fs3q'
                },
                {
                  title: 'CameraAccessories',
                  url: '/cameras-accessories-store',
                  type: 'heading'
                },
                {
                  title: 'Lens',
                  url: '/camera-accessories/camera-lenses/pr?uniqueBstoreparam1=val1&sid=jek%2C6l2%2Ce9y'
                },
                {
                  title: 'Tripods',
                  url: '/camera-accessories/tripods/pr?count=40&otracker=categorytree&p%5B%5D=sort%3Dpopularity&sid=jek%2F6l2%2Fce6'
                },
                {
                  title: 'NetworkComponents',
                  url: '/computers/network-components/pr?sid=6bo,70k&otracker=categorytree',
                  type: 'heading'
                },
                {
                  title: 'Routers',
                  url: '/computers/network-components/routers/pr?sid=6bo%2F70k%2F2a2'
                }
              ],
              [
                {
                  title: 'Featured',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'GoogleAssistantStore',
                  url: '/google-assistant-122019-store'
                },
                {
                  title: 'LaptopsonBuybackGuarantee',
                  url: '/laptops/~buyback-guarantee-on-laptops-/pr?sid=6bo%2Cb5g'
                },
                {
                  title: 'FlipkartSmartBuy',
                  url: '/flipkart-smartbuy-store'
                },
                {
                  title: 'Li-PolymerPowerBanks',
                  url: '/lithium-polymer-power-banks-store'
                },
                {
                  title: 'SonyPS4Pro&amp;Slim',
                  url: '/games/~sony-play-station/pr?facets.availability=Exclude%20Out%20of%20Stock&amp;sid=4rr%2Ctg9&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability[]=Exclude+Out+of+Stock'
                },
                {
                  title: 'AppleProducts',
                  url: '/apple-products-store'
                },
                {
                  title: 'MicrosoftStore',
                  url: '/microsoft-store'
                },
                {
                  title: 'LenovoPhabSeries',
                  url: '/mobiles-accessories/~lenovo-phab-series1/pr?sid=tyy'
                },
                {
                  title: 'JBLSpeakers',
                  url: '/all/audio-video/jbl~brand/pr?otracker=categorytree&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DJBL&amp;sid=all%2F0pm'
                },
                {
                  title: 'SmartphonesOnBuybackGuarantee',
                  url: '/buyback-guarantee-store'
                },
                {
                  title: 'Philips',
                  url: '/health-personal-care-appliances/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DPhilips&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&sid=zlw'
                },
                {
                  title: 'Dr.Morepen',
                  url: '/search?as=off&as-show=on&count=40&otracker=start&p%5B%5D=facets.brand%255B%255D%3DDr.%2BMorepen&q=bp+monitor&sid=zlw'
                },
                {
                  title: 'CompleteMobileProtection',
                  url: '/mobile-complete-protection-bbd-store'
                },
                {
                  title: 'MobilesNoCostEMI',
                  url: '/no-cost-emi-mobiles-store'
                },
                {
                  title: 'HuaweiWatchGt2eSmartWatch',
                  url: '/huawei-watch-gt-2e-smartwatch-store'
                }
              ]
            ]
          }
        ]
      },
      appliances: {
        title: 'TVs&Appliances',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: 'Television',
                  url: '/television-store?otracker=nmenu_sub_TVs%20and%20Appliances_0_Televisions',
                  type: 'heading'
                },
                {
                  title: 'NewLaunches',
                  url: '/televisions/~cs-bcpy973sq7/pr?sid=ckf%2Cczl&collection-tab-name=Just%20Launched%20TVs',
                  type: 'heading'
                },
                {
                  title: 'Smart&UltraHD',
                  url: '/search?count=40&otracker=CLP_filters&p%5B%5D=facets.smart_tv%255B%255D%3DYes&p%5B%5D=facets.resolution%255B%255D%3DUltra%2BHD%2B%25284K%2529&sid=ckf%2Fczl&otracker=nmenu_sub_TVs%20and%20Appliances_0_Smart%20and%20Ultra%20HD',
                  type: 'heading'
                },
                {
                  title: 'TopBrands',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Mi',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.brand%255B%255D%3DMi&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock'
                },
                {
                  title: 'Vu',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DVu'
                },
                {
                  title: 'Thomson',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DThomson'
                },
                {
                  title: 'Samsung',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DSamsung'
                },
                {
                  title: 'iFFALCONbyTCL',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DiFFALCON%2Bby%2BTCL'
                },
                {
                  title: 'Nokia',
                  url: '/nokia-139cm-55-inch-ultra-hd-4k-led-smart-android-tv-sound-jbl/p/itmffvfvyztsmfmq?pid=TVSFFVFVJEGZ3R5H'
                },
                {
                  title: 'LG',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DLG'
                },
                {
                  title: 'realme',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.brand%255B%255D%3DRealme'
                },
                {
                  title: 'Motorola',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p[]=facets.brand%255B%255D%3DMotorola&otracker=categorytree'
                },
                {
                  title: 'ShopbyScreenSize',
                  url: '',
                  type: 'heading'
                },
                {
                  title: '24&below',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.screen_size%255B%255D%3D24%2Binch%2B%2526%2BBelow&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytreehttps://www.flipkart.com/televisions/pr?sid=ckf,czl&p[]=facets.screen_size%255B%255D%3D24%2Binch%2B%2526%2BBelow&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree'
                },
                {
                  title: '28-32',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.screen_size%255B%255D%3D28%2B-%2B32%2Binch&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree'
                },
                {
                  title: '39-43',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.screen_size%255B%255D%3D39%2B-%2B43%2Binch&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree'
                },
                {
                  title: '48-55',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.screen_size%255B%255D%3D48%2B-%2B55%2Binch&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree'
                },
                {
                  title: '60&above',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.screen_size%255B%255D%3D60%2Binch%2B%2526%2BAbove&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&otracker=categorytree'
                }
              ],
              [
                {
                  title: 'WashingMachine',
                  url: '/washing-machine-store',
                  type: 'heading'
                },
                {
                  title: 'FullyAutomaticFrontLoad',
                  url: '/home-kitchen/home-appliances/washing-machines/fully-automatic-front-load~function/pr?sid=j9e%2Cabm%2C8qx'
                },
                {
                  title: 'SemiAutomaticTopLoad',
                  url: '/home-kitchen/home-appliances/washing-machines/semi-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx'
                },
                {
                  title: 'FullyAutomaticTopLoad',
                  url: '/home-kitchen/home-appliances/washing-machines/fully-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx'
                },
                {
                  title: 'AirConditioners',
                  url: '/acnewclp-store',
                  type: 'heading'
                },
                {
                  title: 'InverterAC',
                  url: '/air-conditioners/pr?sid=j9e,abm,c54&p[]=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p[]=facets.technology%255B%255D%3DInverter&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'SplitACs',
                  url: '/home-kitchen/home-appliances/air-conditioners/split~type/pr?sid=j9e,abm,c54'
                },
                {
                  title: 'WindowACs',
                  url: '/home-kitchen/home-appliances/air-conditioners/window~type/pr?sid=j9e%2Cabm%2Cc54'
                },
                {
                  title: 'ShopByBrand',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'LG',
                  url: '/air-conditioners/pr?sid=j9e,abm,c54&p[]=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p[]=facets.brand%255B%255D%3DLG&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Hitachi',
                  url: '/air-conditioners/pr?sid=j9e,abm,c54&p[]=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p[]=facets.brand%255B%255D%3DHitachi&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Carrier',
                  url: '/air-conditioners/pr?sid=j9e,abm,c54&p[]=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p[]=facets.brand%255B%255D%3DCarrier&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Refrigerators',
                  url: '/refrigerator-store',
                  type: 'heading'
                },
                {
                  title: 'SingleDoor',
                  url: '/home-kitchen/home-appliances/refrigerators/single-door~type/pr?sid=j9e%2Cabm%2Chzg'
                },
                {
                  title: 'DoubleDoor',
                  url: '/home-kitchen/home-appliances/refrigerators/double-door~type/pr?sid=j9e%2Cabm%2Chzg'
                },
                {
                  title: 'Tripledoor',
                  url: '/home-kitchen/home-appliances/refrigerators/triple-door~type/pr?sid=j9e,abm,hzg'
                },
                {
                  title: 'SidebySide',
                  url: '/home-kitchen/home-appliances/refrigerators/pr?otracker=categorytree&amp;p%5B%5D=facets.type%255B%255D%3DSide%2Bby%2BSide&amp;sid=j9e%2Fabm%2Fhzg'
                },
                {
                  title: 'Convertible',
                  url: '/search?p%5B%5D%5B%5D=facets.features%255B%255D%3DConvertible&sid=j9e%2Fabm%2Fhzg&otracker=CLP_filters&p%5B%5D=facets.features%255B%255D%3DConvertible'
                }
              ],
              [
                {
                  title: 'KitchenAppliances',
                  url: '/kitchen-appliances-store?otracker=nmenu_sub_Appliances_0_Kitchen%20Appliances',
                  type: 'heading'
                },
                {
                  title: 'MicrowaveOvens',
                  url: '/home-kitchen/kitchen-appliances/microwave-ovens?otracker=nmenu_sub_Appliances_0_Microwave%20Ovens'
                },
                {
                  title: 'OvenToasterGrills(OTG)',
                  url: '/oven-toaster-grills/pr?sid=j9e%2Cm38%2Cvr5&otracker=product_breadCrumbs_Oven%20Toaster%20Grills&otracker=nmenu_sub_Appliances_0_Oven%20Toaster%20Grills'
                },
                {
                  title: 'Juicer/Mixer/Grinder',
                  url: '/mixerjuicergrinders/pr?sid=j9e%2Cm38%2C7ek&otracker=nmenu_sub_Appliances_0_Mixer%2FJuicer%2FGrinder'
                },
                {
                  title: 'ElectricKettle',
                  url: '/electric-jugheatertravel-kettles/pr?sid=j9e%2Cm38%2Cxrv&otracker=nmenu_sub_Appliances_0_Electric%20Kettle'
                },
                {
                  title: 'InductionCooktops',
                  url: '/induction-cooktops/pr?sid=j9e%2Cm38%2C575&otracker=nmenu_sub_Appliances_0_Induction%20Cooktops'
                },
                {
                  title: 'Chimneys',
                  url: '/chimneys-store?otracker=nmenu_sub_TVs%20and%20Appliances_0_Chimneys'
                },
                {
                  title: 'HandBlenders',
                  url: '/hand-blenders/pr?sid=j9e%2Cm38%2Cu7m&otracker=nmenu_sub_Appliances_0_Hand%20Blender'
                },
                {
                  title: 'SandwichMakers',
                  url: '/sandwich-makers/pr?sid=j9e%2Cm38%2C1vj&otracker=nmenu_sub_Appliances_0_Sandwich%20Makers'
                },
                {
                  title: 'PopUpToasters',
                  url: '/home-kitchen/kitchen-appliances/popup-toasters/pr?sid=j9e,m38,txh&otracker=categorytree'
                },
                {
                  title: 'ElectricCookers',
                  url: '/home-kitchen/kitchen-appliances/electric-cookers/pr?sid=j9e,m38,9m9&otracker=nmenu_sub_Appliances_0_Electric%20Cookers'
                },
                {
                  title: 'WetGrinders',
                  url: '/home-kitchen/kitchen-appliances/wet-grinders/pr?sid=j9e,m38,htd&otracker=categorytree'
                },
                {
                  title: 'FoodProcessors',
                  url: '/food-processors/pr?sid=j9e%2Cm38%2Crj3&otracker=nmenu_sub_Appliances_0_Food%20Processors'
                },
                {
                  title: 'CoffeeMakers',
                  url: '/home-kitchen/kitchen-appliances/coffee-makers/pr?sid=j9e,m38,wqo&otracker=nmenu_sub_Appliances_0_Coffee%20Makers'
                },
                {
                  title: 'Dishwashers',
                  url: '/dishwasher-store?otracker=nmenu_sub_Appliances_0_Dishwashers'
                },
                {
                  title: 'HealthyLivingAppliances',
                  url: '/home-kitchen/~appliances-for-a-healthy-living/pr?sid=j9e',
                  type: 'heading'
                }
              ],
              [
                {
                  title: 'SmallHomeAppliances',
                  url: '/home-appliance-store?otracker=nmenu_sub_Appliances_0_Small%20Home%20Appliances',
                  type: 'heading'
                },
                {
                  title: 'Irons',
                  url: '/iron/pr?sid=j9e%2Cabm%2Ca0u&otracker=nmenu_sub_Appliances_0_Irons&otracker=nmenu_sub_Appliances_0_Irons'
                },
                {
                  title: 'WaterPurifiers',
                  url: '/water-purifiers/pr?sid=j9e%2Cabm%2Ci45&otracker=nmenu_sub_Appliances_0_Water%20Purifiers'
                },
                {
                  title: 'Fans',
                  url: '/home-kitchen/home-appliances/fans/pr?sid=j9e,abm,lbz&otracker=categorytree'
                },
                {
                  title: 'AirCoolers',
                  url: '/home-kitchen/home-appliances/air-coolers/pr?sid=j9e,abm,52j&otracker=categorytree'
                },
                {
                  title: 'Inverters',
                  url: '/home-kitchen/home-appliances/inverters/pr?sid=j9e,abm,7no&otracker=categorytree'
                },
                {
                  title: 'VacuumCleaners',
                  url: '/vacuum-cleaners/pr?sid=j9e%2Cabm%2Cul2&otracker=nmenu_sub_Appliances_0_Vacuum%20Cleaners&otracker=nmenu_sub_Appliances_0_Vacuum%20Cleaners'
                },
                {
                  title: 'SewingMachines',
                  url: '/home-kitchen/home-appliances/sewing-machines/pr?sid=j9e,abm,0zg&otracker=categorytree'
                },
                {
                  title: 'VoltageStabilizers',
                  url: '/home-kitchen/home-appliances/voltage-stabilizers/pr?sid=j9e,abm,xf4&otracker=categorytree'
                },
                {
                  title: 'WaterGeysers',
                  url: '/water-geysers/pr?sid=j9e%2Cabm%2Cbfm&otracker=categorytree&otracker=nmenu_sub_Appliances_0_Water%20Geysers'
                },
                {
                  title: 'ImmersionRods',
                  url: '/home-kitchen/home-appliances/immersion-rods/pr?sid=j9e,abm,rqo&otracker=categorytree'
                },
                {
                  title: 'TopBrands',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Livpure',
                  url: 'https://www.flipkart.com/home-kitchen/pr?sid=j9e&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DLivpure&p%5B%5D=facets.brand%255B%255D%3Dlivpure&p%5B%5D=facets.brand%255B%255D%3DLIVPURE'
                },
                {
                  title: 'Philips',
                  url: 'https://www.flipkart.com/search?p[]=facets.brand%255B%255D%3DPhilips&sid=j9e%2Cabm&otracker=CLP_filters'
                },
                {
                  title: 'Bajaj',
                  url: 'https://www.flipkart.com/home-kitchen/home-appliances/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DBajaj&sid=j9e%2Fabm'
                },
                {
                  title: 'IFB',
                  url: 'https://www.flipkart.com/search?sid=j9e%2Fm38&otracker=CLP_Filters&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DIFB'
                },
                {
                  title: 'EurekaForbes',
                  url: 'https://www.flipkart.com/home-kitchen/pr?sid=j9e&p%5B%5D=facets.brand%255B%255D%3DEureka%2BForbes&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DEureka%2BForbes%2BAeroguard&p%5B%5D=facets.brand%255B%255D%3DEureka%2BForbes%2BAquasure%2Bfrom%2BAquaguard&p%5B%5D=facets.brand%255B%255D%3DEureka%2BForbes%2BAquasure&p%5B%5D=facets.brand%255B%255D%3DEuroclean%2BEureka%2BForbes&p%5B%5D=facets.serviceability%5B%5D%3Dtrue'
                },
                {
                  title: 'Kaff',
                  url: 'https://www.flipkart.com/home-kitchen/pr?sid=j9e&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DKaff&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured'
                }
              ],
              [
                {
                  title: 'BuyingGuides',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Televisions',
                  url: '/buying-guide/tvs?sid=ckf,czl'
                },
                {
                  title: 'WashingMachines',
                  url: '/buying-guide/washing-machines-dryers?sid=j9e,abm,8qx'
                },
                {
                  title: 'Refrigerators',
                  url: '/buying-guide/refrigerators?sid=j9e,abm,hzg'
                },
                {
                  title: 'AirConditioners',
                  url: '/buying-guide/air-conditioners?sid=j9e,abm,c54'
                },
                {
                  title: 'WaterPurifiers',
                  url: '/buying-guide/water-purifiers?sid=j9e,abm,i45'
                },
                {
                  title: 'AirPurifiers',
                  url: '/buying-guide/air-purifiers?sid=j9e,abm,3o4'
                },
                {
                  title: 'Chimneys',
                  url: '/buying-guide/chimneys?sid=j9e,m38,tgz&otracker=bg_from_browse_lhs'
                },
                {
                  title: 'WaterGeysers',
                  url: '/buying-guide/water-geysers?sid=j9e,abm,bfm&otracker=bg_from_browse_lhs'
                },
                {
                  title: 'NewLaunches',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'CoocaaSmartTVs',
                  url: '/televisions/pr?sid=ckf,czl&p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p[]=facets.brand%255B%255D%3DCoocaa&otracker=categorytree'
                },
                {
                  title: 'Nokia(55)4KAndroidTV',
                  url: '/nokia-139cm-55-inch-ultra-hd-4k-led-smart-android-tv-sound-jbl/p/itmffvfvyztsmfmq?pid=TVSFFVFVJEGZ3R5H'
                },
                {
                  title: 'Mi(32)4AProAndroidTV',
                  url: '/mi-led-smart-tv-4a-pro-80-cm-32-android/p/itmfdwh5jyqhmvzg?pid=TVSFDWH5K9N2FDTK'
                },
                {
                  title: 'MarQ(43)FHDSmartTV',
                  url: '/marq-flipkart-ultra-thin-bezel-108cm-43-inch-full-hd-led-smart-tv-android/p/itmfaqvze443xze3?pid=TVSFAQVZ8SRBHZ2Z'
                },
                {
                  title: 'LGRefrigerators',
                  url: '/home-kitchen/~just-launched-kitchen-appliances/pr?sid=j9e&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DLG'
                },
                {
                  title: 'Thomson(40)4KSmartTV',
                  url: '/thomson-ud9-102cm-40-inch-ultra-hd-4k-led-smart-tv/p/itmfdvfrxxphynpf?pid=TVSFDVFRHPQQWYPV'
                },
                {
                  title: 'WhirlpoolRefrigerators',
                  url: '/home-kitchen/~just-launched-kitchen-appliances/pr?sid=j9e&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DWhirlpool'
                },
                {
                  title: 'Kodak(22)|(32)LEDTVs',
                  url: '/televisions/pr?sid=ckf%2Cczl&p%5B%5D=facets.price_range.from%3DMin&otracker=categorytree&p%5B%5D=facets.price_range.to%3D10000&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&p%5B%5D=facets.brand%255B%255D%3DKodak&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.number_of_hdmi_ports%255B%255D%3DOne'
                }
              ]
            ]
          }
        ]
      },
      men: {
        title: 'Men',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: 'Footwear',
                  url: '/mens-footwear/pr?sid=osp,cil',
                  type: 'heading'
                },
                {
                  title: 'SportsShoes',
                  url: '/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu'
                },
                {
                  title: 'CasualShoes',
                  url: '/mens-footwear/casual-shoes/pr?sid=osp,cil,e1f'
                },
                {
                  title: 'FormalShoes',
                  url: '/mens-footwear/formal-shoes/pr?sid=osp,cil,ssb'
                },
                {
                  title: 'Sandals&amp;Floaters',
                  url: '/mens-footwear/sandals-floaters/pr?sid=osp,cil,e83'
                },
                {
                  title: 'Flip-Flops',
                  url: '/mens-footwear/slippers-flip-flops/pr?sid=osp,cil,e1r'
                },
                {
                  title: 'Loafers',
                  url: '/mens-footwear/casual-shoes/loafers~type/pr?sid=osp%2Ccil%2Ce1f'
                },
                {
                  title: 'Boots',
                  url: '/mens-footwear/casual-shoes/boots~type/pr?sid=osp%2Ccil%2Ce1f'
                },
                {
                  title: 'RunningShoes',
                  url: '/mens-footwear/sports-shoes/running-shoes~type/pr?sid=osp,cil,1cu'
                },
                {
                  title: 'Sneakers',
                  url: '/mens-footwear/casual-shoes/sneakers~type/pr?sid=osp%2Ccil%2Ce1f'
                },
                {
                  title: "Men'sGrooming",
                  url: '/mens-grooming-store',
                  type: 'heading'
                },
                {
                  title: 'Deodorants',
                  url: '/beauty-and-grooming/fragrances/deodorants/pr?sid=g9b%2C0yh%2Cvp1&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.serviceability%5B%5D%3Dtrue'
                },
                {
                  title: 'Perfumes',
                  url: '/beauty-and-grooming/fragrances/perfume/pr?sid=g9b,0yh,jhz&p[]=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BeardCare&amp;Grooming',
                  url: '/beauty-and-grooming/pr?sid=g9b&p%5B%5D=facets.brand%255B%255D%3DBeardo&p%5B%5D=facets.brand%255B%255D%3DUstraa&p%5B%5D=facets.brand%255B%255D%3DThe%2BMan%2BCompany&p%5B%5D=facets.brand%255B%255D%3DSpruce%2BShave%2BClub&p%5B%5D=facets.brand%255B%255D%3DMan%2BArden&p%5B%5D=facets.brand%255B%255D%3DMeralite&p%5B%5D=facets.brand%255B%255D%3DBrylcreem&p%5B%5D=facets.brand%255B%255D%3DUrbanMooch&p%5B%5D=facets.brand%255B%255D%3DVihado&p%5B%5D=facets.serviceability%5B%5D%3Dtrue'
                },
                {
                  title: 'Shaving&amp;Aftershave',
                  url: '/beauty-and-grooming/~shaving-aftershave/pr?sid=g9b'
                },
                {
                  title: 'SexualWellness',
                  url: '/beauty-and-grooming/sexual-wellness/pr?sid=g9b,alu&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                }
              ],
              [
                {
                  title: 'Clothing',
                  url: '/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen',
                  type: 'heading'
                },
                {
                  title: 'Topwear',
                  url: '/clothing-and-accessories/topwear/pr?sid=clo%2Cash&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen',
                  type: 'heading'
                },
                {
                  title: 'T-Shirts',
                  url: '/clothing-and-accessories/topwear/tshirt/men-tshirt/pr?sid=clo,ash,ank,edy&otracker=categorytree'
                },
                {
                  title: 'FormalShirts',
                  url: '/clothing-and-accessories/topwear/shirt/men-shirt/formal-shirt/pr?sid=clo,ash,axc,mmk,bk1&otracker=categorytree'
                },
                {
                  title: 'CasualShirts',
                  url: '/clothing-and-accessories/topwear/shirt/men-shirt/casual-shirt/pr?sid=clo,ash,axc,mmk,kp7&otracker=categorytree'
                },
                {
                  title: 'Bottomwear',
                  url: '/clothing-and-accessories/bottomwear/pr?sid=clo%2Cvua&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen',
                  type: 'heading'
                },
                {
                  title: 'Jeans',
                  url: '/clothing-and-accessories/bottomwear/jeans/men-jeans/pr?sid=clo,vua,k58,i51&otracker=categorytree'
                },
                {
                  title: 'CasualTrousers',
                  url: '/clothing-and-accessories/bottomwear/trouser/men-trouser/pr?sid=clo%2Cvua%2Cmle%2Clhk&otracker=categorytree&p%5B%5D=facets.occasion%255B%255D%3DCasual&p%5B%5D=facets.occasion%255B%255D%3DParty&p%5B%5D=facets.occasion%255B%255D%3DLounge%2BWear'
                },
                {
                  title: 'FormalTrousers',
                  url: '/clothing-and-accessories/bottomwear/trouser/men-trouser/pr?sid=clo%2Cvua%2Cmle%2Clhk&otracker=categorytree&p%5B%5D=facets.occasion%255B%255D%3DFormal'
                },
                {
                  title: 'Trackpants',
                  url: '/clothing-and-accessories/bottomwear/track-pants/men-track-pants/pr?sid=clo,vua,jlk,6ql&otracker=categorytree'
                },
                {
                  title: 'Shorts',
                  url: '/clothing-and-accessories/bottomwear/shorts/men-shorts/pr?sid=clo,vua,e8g,kc7&otracker=categorytree'
                },
                {
                  title: 'Cargos',
                  url: '/clothing-and-accessories/bottomwear/cargo/men-cargo/pr?sid=clo,vua,rqy,nli&otracker=categorytree'
                },
                {
                  title: 'ThreeFourths',
                  url: '/clothing-and-accessories/bottomwear/threefourths/men-threefourths/pr?sid=clo,vua,eum,4qq&otracker=categorytree'
                },
                {
                  title: 'Suits,Blazers&Waistcoats',
                  url: '/clothing-and-accessories/blazers-suits-waistcoat-coat/pr?sid=clo%2Cupk&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen',
                  type: 'heading'
                },
                {
                  title: 'Ties,Socks,Caps&More',
                  url: '/clothing-and-accessories/clothing-accessories/pr?sid=clo,qd8&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree',
                  type: 'heading'
                },
                {
                  title: 'Fabrics',
                  url: '/clothing-and-accessories/fabric/pr?sid=clo,qfi&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree',
                  type: 'heading'
                }
              ],
              [
                {
                  title: 'WinterWear',
                  url: '/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen',
                  type: 'heading'
                },
                {
                  title: 'Sweatshirts',
                  url: '/clothing-and-accessories/winter-wear/sweatshirt/men-sweatshirt/pr?sid=clo,qvw,64a,vui&otracker=categorytree'
                },
                {
                  title: 'Jackets',
                  url: '/clothing-and-accessories/winter-wear/jackets/men-jackets/pr?sid=clo,qvw,z0g,jbm&otracker=categorytree'
                },
                {
                  title: 'Sweater',
                  url: '/clothing-and-accessories/winter-wear/sweater/men-sweater/pr?sid=clo,qvw,vkb,ieq&otracker=categorytree'
                },
                {
                  title: 'Tracksuits',
                  url: '/clothing-and-accessories/tracksuit/men-tracksuit/pr?sid=clo,nyk,zp4&otracker=categorytree'
                },
                {
                  title: 'Ethnicwear',
                  url: '/clothing-and-accessories/ethnic-wear/pr?sid=clo%2Ccfv&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen',
                  type: 'heading'
                },
                {
                  title: 'Kurta',
                  url: '/clothing-and-accessories/ethnic-wear/kurtas/men-kurtas/pr?sid=clo,cfv,cib,jks&otracker=categorytree'
                },
                {
                  title: 'EthnicSets',
                  url: '/clothing-and-accessories/ethnic-wear/ethnic-sets/men-ethnic-sets/pr?sid=clo,cfv,itg,pme&otracker=categorytree'
                },
                {
                  title: 'Sherwanis',
                  url: '/clothing-and-accessories/ethnic-wear/sherwani/men-sherwani/pr?sid=clo,cfv,dra,brt&otracker=categorytree'
                },
                {
                  title: 'EthnicPyjama',
                  url: '/clothing-and-accessories/ethnic-wear/ethnic-pyjama/men-ethnic-pyjama/pr?sid=clo,cfv,e1p,5l2&otracker=categorytree'
                },
                {
                  title: 'Dhoti',
                  url: '/clothing-and-accessories/ethnic-wear/dhoti/pr?sid=clo%2Ccfv%2Cnnk&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen'
                },
                {
                  title: 'Lungi',
                  url: '/clothing-and-accessories/bottomwear/lungi/men-lungi/pr?sid=clo,vua,5jo,cqs&otracker=categorytree'
                },
                {
                  title: 'Innerwear&Loungewear',
                  url: '/clothing-and-accessories/~cs-axj382hyd1/pr?sid=clo&collection-tab-name=Innerwear%20And%20Loungewear',
                  type: 'heading'
                },
                {
                  title: 'Briefs&Trunks',
                  url: '/clothing-and-accessories/innerwear/brief-and-trunk/men-brief-and-trunk/pr?sid=clo,qfl,szr,3xl&otracker=categorytree'
                },
                {
                  title: 'Vests',
                  url: '/clothing-and-accessories/innerwear/vests/men-vests/pr?sid=clo,qfl,wp7,zpk&otracker=categorytree'
                },
                {
                  title: 'Boxers',
                  url: '/clothing-and-accessories/innerwear/boxers/men-boxers/pr?sid=clo,qfl,1pt,jlb&otracker=categorytree'
                },
                {
                  title: 'PyjamasandLoungePants',
                  url: '/clothing-and-accessories/sleepwear/pyjamas-and-lounge-pants/men-pyjamas-and-lounge-pants/pr?sid=clo,1hc,a7m,b4p&otracker=categorytree'
                },
                {
                  title: 'Thermals',
                  url: '/clothing-and-accessories/winter-wear/thermals/men-thermals/pr?sid=clo,qvw,ugg,oak&otracker=categorytree'
                },
                {
                  title: 'NightSuits',
                  url: '/clothing-and-accessories/sleepwear/night-suits/men-night-suits/pr?sid=clo,1hc,5d2,dos&otracker=categorytree'
                },
                {
                  title: 'Raincoats&Windcheaters',
                  url: '/clothing-and-accessories/~cs-4ayq68p3ip/pr?sid=clo&collection-tab-name=Raincoats%20And%20Windcheaters',
                  type: 'heading'
                }
              ],
              [
                {
                  title: 'Watches',
                  url: '/mens-watches-store',
                  type: 'heading'
                },
                {
                  title: 'Fastrack',
                  url: '/watches/fastrack~brand/pr?sid=r18'
                },
                {
                  title: 'Casio',
                  url: '/watches/casio~brand/pr?sid=r18'
                },
                {
                  title: 'Titan',
                  url: '/watches/titan~brand/pr?sid=r18'
                },
                {
                  title: 'Fossil',
                  url: '/watches/fossil~brand/pr?sid=r18'
                },
                {
                  title: 'Sonata',
                  url: '/watches/sonata~brand/pr?sid=r18'
                },
                {
                  title: 'Accessories',
                  url: '/mens-bags-wallet-store',
                  type: 'heading'
                },
                {
                  title: 'Backpacks',
                  url: '/bags-wallets-belts/bags-backpacks/backpacks/pr?sid=reh,4d7,ak9'
                },
                {
                  title: 'Wallets',
                  url: '/bags-wallets-belts/wallets-clutches/wallets/pr?sid=reh%2Ccca%2Ch76&marketplace=FLIPKART&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.serviceability%5B%5D%3Dtrue'
                },
                {
                  title: 'Belts',
                  url: '/bags-wallets-belts/belts/~men/pr?sid=reh,wq9'
                },
                {
                  title: 'Sunglasses',
                  url: '/sunglasses/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&sid=26x&otracker=nmenu_sub_Men_0_Sunglasses&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen'
                },
                {
                  title: 'Luggage&amp;Travel',
                  url: '/bags-wallets-belts/luggage-travel/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2527s&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&sid=reh%2Fplk'
                },
                {
                  title: 'Frames',
                  url: '/eyewear/frames/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DUnisex&sid=u73%2Fh4k'
                },
                {
                  title: 'Jewellery',
                  url: '/jewellery/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys&amp;sid=mcr'
                },
                {
                  title: 'Sports&amp;FitnessStore',
                  url: '/sport-store',
                  type: 'heading'
                }
              ],
              [
                {
                  title: 'SmartWatches',
                  url: '/wearable-smart-devices/smart-watches/pr?sid=ajy,buh&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability%5b%5d=Exclude+Out+of+Stock&amp;otracker=CLP_lhs',
                  type: 'heading'
                },
                {
                  title: 'SmartBands',
                  url: '/wearable-smart-devices/smart-bands/pr?sid=ajy,q7p',
                  type: 'heading'
                },
                {
                  title: 'PersonalCareAppliances',
                  url: '/personal-care-appliances-men-store',
                  type: 'heading'
                },
                {
                  title: 'Trimmers',
                  url: '/health-personal-care-appliances/personal-care-appliances/trimmers/pr?count=40&otracker=nmenu_sub_Men_0_Trimmers&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&sid=zlw%2F79s%2Fby3'
                },
                {
                  title: 'Shavers',
                  url: '/health-personal-care-appliances/personal-care-appliances/shavers/pr?sid=zlw,79s,u3j'
                },
                {
                  title: 'GroomingKits',
                  url: '/health-personal-care-appliances/personal-care-appliances/grooming-kit/pr?sid=zlw,79s,bi7'
                },
                {
                  title: 'Featured',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'WatchesStore',
                  url: '/mens-watches-store'
                },
                {
                  title: 'FootwearClub',
                  url: '/men-exclusive-store'
                },
                {
                  title: 'Bags&amp;Wallet',
                  url: '/mens-bags-wallet-store'
                },
                {
                  title: 'T-ShirtStore',
                  url: '/mens-tshirts-store'
                },
                {
                  title: 'Adidas',
                  url: '/mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.brand%255B%255D%3DADIDAS&p%5B%5D=facets.brand%255B%255D%3DADIDAS%2BNEO&p%5B%5D=facets.brand%255B%255D%3DADIDAS%2BORIGINALS'
                },
                {
                  title: 'Beardo',
                  url: '/beauty-and-personal-care/mens-grooming/hair-care/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DBeardo&sid=t06%2Fhb1%2Fb7e'
                },
                {
                  title: 'Reebok',
                  url: '/mens-footwear/reebok~brand/pr?sid=osp,cil'
                },
                {
                  title: 'Skechers',
                  url: '/mens-footwear/skechers~brand/pr?sid=osp,cil'
                },
                {
                  title: 'Nike',
                  url: '/mens-footwear/nike~brand/pr?sid=osp,cil'
                }
              ]
            ]
          }
        ]
      },
      women: {
        title: 'Women',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: 'Clothing',
                  url: '/clothing-and-accessories/pr?sid=clo&marketplace=FLIPKART&p%5B%5D=facets.ideal_for%255B%255D%3DWomen',
                  type: 'heading'
                },
                {
                  title: 'WomenWestern&MaternityWear',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Topwear',
                  url: '/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DWomen&p[]=facets.ideal_for%255B%255D%3Dwomen&otracker=categorytree'
                },
                {
                  title: 'Dresses',
                  url: '/clothing-and-accessories/dresses-and-gown/dress/women-dress/pr?sid=clo,odx,maj,jhy&otracker=categorytree'
                },
                {
                  title: 'Jeans',
                  url: '/clothing-and-accessories/bottomwear/jeans/women-jeans/pr?sid=clo,vua,k58,4hp&otracker=categorytree'
                },
                {
                  title: 'Shorts',
                  url: '/clothing-and-accessories/bottomwear/shorts/women-shorts/pr?sid=clo,vua,e8g,hbd&otracker=categorytree'
                },
                {
                  title: 'Skirts',
                  url: '/clothing-and-accessories/bottomwear/skirts/women-skirts/pr?sid=clo,vua,iku,w5t&otracker=categorytree'
                },
                {
                  title: 'Jeggings&Tights',
                  url: '/clothing-and-accessories/bottomwear/~cs-hdgz8fjfgm/pr?sid=clo%2Cvua&collection-tab-name=Tights%20And%20%20Legging'
                },
                {
                  title: 'Trousers&Capris',
                  url: '/clothing-and-accessories/bottomwear/~cs-g50m8job1g/pr?sid=clo%2Cvua&collection-tab-name=Trousers%20and%20Capris'
                },
                {
                  title: 'Lingerie&Sleepwear',
                  url: '/clothing-and-accessories/~cs-1gqbhquqye/pr?sid=clo&collection-tab-name=Lingerie%20and%20Sleepwear',
                  type: 'heading'
                },
                {
                  title: 'Bras',
                  url: '/clothing-and-accessories/innerwear/bra/women-bra/pr?sid=clo,qfl,v5v,kzg&otracker=categorytree'
                },
                {
                  title: 'Panties',
                  url: '/clothing-and-accessories/innerwear/panties/women-panties/pr?sid=clo,qfl,q5u,la2&otracker=categorytree'
                },
                {
                  title: 'LingerieSets',
                  url: '/clothing-and-accessories/innerwear/lingerie-and-accessories/lingerie-sets/pr?sid=clo,qfl,w4j,53e&otracker=categorytree'
                },
                {
                  title: 'NightDresses&Nighties',
                  url: '/clothing-and-accessories/sleepwear/night-dresses-and-nighties/women-night-dresses-and-nighties/pr?sid=clo,1hc,kc4,nmu&otracker=categorytree'
                },
                {
                  title: 'Shapewear',
                  url: '/clothing-and-accessories/innerwear/shapewears/women-shapewears/pr?sid=clo,qfl,uga,tpq&otracker=categorytree'
                },
                {
                  title: 'Camisoles&Slips',
                  url: '/clothing-and-accessories/innerwear/camisole-and-slips/women-camisole-and-slips/pr?sid=clo,qfl,pji,crb&otracker=categorytree'
                },
                {
                  title: 'Swim&amp;Beachwear',
                  url: '/clothing-and-accessories/~cs-slqko43dfo/pr?sid=clo&collection-tab-name=Swim%20and%20Beachwear',
                  type: 'heading'
                },
                {
                  title: 'PartyDresses',
                  url: '/clothing-and-accessories/dresses-and-gown/dress/women-dress/pr?sid=clo%2Codx%2Cmaj%2Cjhy&otracker=categorytree&p%5B%5D=facets.occasion%255B%255D%3DParty',
                  type: 'heading'
                },
                {
                  title: 'SportsWear',
                  url: '/clothing-and-accessories/~cs-xy1011hvj1/pr?sid=clo&collection-tab-name=Sports%20and%20Gym%20Wear',
                  type: 'heading'
                },
                {
                  title: 'WinterWear',
                  url: '/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DWomen',
                  type: 'heading'
                }
              ],
              [
                {
                  title: 'EthnicWear',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Sarees',
                  url: '/clothing-and-accessories/saree-and-accessories/saree/women-saree/pr?sid=clo,8on,zpd,9og&otracker=categorytree'
                },
                {
                  title: 'Kurtas&amp;Kurtis',
                  url: '/clothing-and-accessories/ethnic-wear/kurtas/women-kurtas-and-kurtis/pr?sid=clo,cfv,cib,rkt&q=kurtas+kurtis&otracker=categorytree'
                },
                {
                  title: 'DressMaterial',
                  url: '/clothing-and-accessories/fabric/dress-material/women-dress-material/pr?sid=clo,qfi,xcx,ms4&otracker=categorytree'
                },
                {
                  title: 'LehengaCholi',
                  url: '/clothing-and-accessories/lehenga-choli/women-lehenga-choli/pr?sid=clo,hlg,wrp&otracker=categorytree'
                },
                {
                  title: 'Blouse',
                  url: '/clothing-and-accessories/saree-and-accessories/blouse/women-blouse/pr?sid=clo,8on,5n9,hny&otracker=categorytree'
                },
                {
                  title: 'KurtaSets&SalwarSuits',
                  url: '/clothing-and-accessories/ethnic-wear/ethnic-sets/women-ethnic-sets-and-salwar-suits/pr?sid=clo,cfv,itg,tys&otracker=categorytree'
                },
                {
                  title: 'Gowns',
                  url: '/clothing-and-accessories/dresses-and-gown/gown/women-gown/pr?sid=clo,odx,od7,0xx&otracker=categorytree'
                },
                {
                  title: 'Dupattas',
                  url: '/clothing-and-accessories/clothing-accessories/dupattas/women-dupattas/pr?sid=clo,qd8,t6b,pjy&otracker=categorytree'
                },
                {
                  title: 'EthnicBottoms',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Leggings&Churidars',
                  url: '/clothing-and-accessories/ethnic-wear/leggings-and-churidar/women-leggings-and-churidar/pr?sid=clo,cfv,ht7,cjo&otracker=categorytree'
                },
                {
                  title: 'Palazzos',
                  url: '/clothing-and-accessories/ethnic-wear/palazzo/pr?sid=clo,cfv,mn6&otracker=categorytree'
                },
                {
                  title: 'Shararas',
                  url: '/clothing-and-accessories/ethnic-wear/sharara/pr?sid=clo,cfv,7po&otracker=categorytree'
                },
                {
                  title: 'Salwars&Patiala',
                  url: '/clothing-and-accessories/ethnic-wear/salwar-and-patiala/women-salwar-and-patiala/pr?sid=clo,cfv,1n0,ops&otracker=categorytree'
                },
                {
                  title: 'DhotiPants',
                  url: '/clothing-and-accessories/ethnic-wear/dhoti-pants/women-dhoti-pants/pr?sid=clo,cfv,emd,on4&otracker=categorytree'
                },
                {
                  title: 'EthnicTrousers',
                  url: '/clothing-and-accessories/bottomwear/trouser/women-trouser/pr?sid=clo%2Cvua%2Cmle%2C8ie&otracker=categorytree&p%5B%5D=facets.suitable_for%255B%255D%3DEthnic%2BWear&p%5B%5D=facets.suitable_for%255B%255D%3DFusion%2BWear'
                },
                {
                  title: 'SareeShapewear&Petticoats',
                  url: '/clothing-and-accessories/saree-and-accessories/petticoat/women-petticoat/pr?sid=clo,8on,tpo,tuw&otracker=categorytree'
                }
              ],
              [
                {
                  title: 'Footwear',
                  url: '/womens-footwear/pr?sid=osp,iko',
                  type: 'heading'
                },
                {
                  title: 'Sandals',
                  url: '/womens-footwear/~womens-sandals/pr?sid=osp,iko',
                  type: 'heading'
                },
                {
                  title: 'Flats',
                  url: '/womens-footwear/flats/pr?sid=osp,iko,9d5'
                },
                {
                  title: 'Heels',
                  url: '/womens-footwear/heels/pr?sid=osp,iko,6q1'
                },
                {
                  title: 'Wedges',
                  url: '/womens-footwear/wedges/pr?sid=osp,iko,jpm'
                },
                {
                  title: 'Shoes',
                  url: '/womens-footwear/~sports-casual-shoes/pr?&amp;sid=osp%2Ciko',
                  type: 'heading'
                },
                {
                  title: 'SportsShoes',
                  url: '/womens-footwear/sports-shoes/pr?sid=osp,iko,d20'
                },
                {
                  title: 'CasualShoes',
                  url: '/womens-footwear/casual-shoes/pr?sid=osp,iko,sx7'
                },
                {
                  title: 'Boots',
                  url: '/womens-footwear/boots/pr?sid=osp%2Ciko%2Cxgp'
                },
                {
                  title: 'Ballerinas',
                  url: '/womens-footwear/ballerinas/pr?sid=osp,iko,974',
                  type: 'heading'
                },
                {
                  title: "Slippers&amp;Flip-Flop's",
                  url: '/womens-footwear/slippers-flip-flops/pr?sid=osp,iko,iz7',
                  type: 'heading'
                },
                {
                  title: 'Watches',
                  url: '/womens-watches-store',
                  type: 'heading'
                },
                {
                  title: 'SmartWatches',
                  url: '/wearable-smart-devices/smart-watches/pr?sid=ajy,buh&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability[]=Exclude+Out+of+Stock&amp;otracker=CLP_lhs',
                  type: 'heading'
                },
                {
                  title: 'PersonalCareAppliances',
                  url: '/health-personal-care-appliances/personal-care-appliances/~personalcareforwomen/pr?sid=zlw%2C79s',
                  type: 'heading'
                },
                {
                  title: 'HairStraightners',
                  url: '/health-personal-care-appliances/personal-care-appliances/hair-straighteners/pr?sid=zlw,79s,dk5'
                },
                {
                  title: 'HairDryers',
                  url: '/health-personal-care-appliances/personal-care-appliances/hair-dryers/pr?sid=zlw,79s,mh8'
                },
                {
                  title: 'Epilators',
                  url: '/health-personal-care-appliances/personal-care-appliances/epilators/pr?sid=zlw,79s,k32'
                }
              ],
              [
                {
                  title: 'Beauty&amp;Grooming',
                  url: '/beauty-and-grooming/pr?sid=g9b&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree',
                  type: 'heading'
                },
                {
                  title: 'MakeUp',
                  url: '/beauty-and-grooming/makeup/pr?sid=g9b,ffi&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'SkinCare',
                  url: '/beauty-and-grooming/body-face-skin-care/body-and-face-care/pr?sid=g9b%2Cema%2C5la&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.ideal_for%255B%255D%3DUnisex&p%5B%5D=facets.serviceability%5B%5D%3Dtrue'
                },
                {
                  title: 'HairCare',
                  url: '/beauty-and-grooming/hair-care-and-accessory/pr?sid=g9b,lcf&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Bath&amp;Spa',
                  url: '/beauty-and-grooming/bath-shower/pr?sid=g9b,5nz&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Deodorants&amp;Perfumes',
                  url: '/beauty-and-grooming/fragrances/pr?sid=g9b%2C0yh&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p%5B%5D=facets.serviceability%5B%5D%3Dtrue'
                },
                {
                  title: 'Jewellery',
                  url: '/jewellery/pr?sid=mcr',
                  type: 'heading'
                },
                {
                  title: 'ArtificialJewellery',
                  url: '/fashion-jewellery-store'
                },
                {
                  title: 'SilverJewellery',
                  url: '/jewellery/silver-jewellery/pr?sid=mcr,tfz'
                },
                {
                  title: 'PreciousJewellery',
                  url: '/jewellery/precious-jewellery/pr?sid=mcr,ykh'
                },
                {
                  title: 'CoinsandBars',
                  url: '/jewellery/gemstones-coins-bars/pr?sid=mcr,73x&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Accessories',
                  url: '/women-handbags-store',
                  type: 'heading'
                },
                {
                  title: 'Handbags',
                  url: '/bags-wallets-belts/handbags-clutches/handbags/pr?sid=reh,ihu,m08&otracker=categorytree'
                },
                {
                  title: 'ShoulderBags',
                  url: '/bags-wallets-belts/handbags-clutches/shoulder-bags/pr?sid=reh,ihu,1gy&otracker=categorytree'
                },
                {
                  title: 'Totes',
                  url: '/bags-wallets-belts/handbags-clutches/totes/pr?sid=reh,ihu,v57&otracker=categorytree'
                },
                {
                  title: 'Slingbags',
                  url: '/bags-wallets-belts/handbags-clutches/sling-bags/pr?sid=reh,ihu,mf2&otracker=categorytree'
                },
                {
                  title: 'Clutches',
                  url: '/bags-wallets-belts/wallets-clutches/clutches/pr?sid=reh,cca,q6i&otracker=categorytree'
                },
                {
                  title: 'Wallets&amp;Belts',
                  url: '/bags-wallets-belts/~wallets-belts/pr?p[]=facets.ideal_for%255B%255D=Women&amp;p[]=sort=popularity&amp;sid=reh'
                },
                {
                  title: 'Luggage&amp;Travel',
                  url: '/bags-wallets-belts/luggage-travel/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.ideal_for%255B%255D%3DWomen%2527s&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&sid=reh%2Fplk'
                },
                {
                  title: 'Sunglasses',
                  url: '/sunglasses/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&sid=26x&otracker=nmenu_sub_Women_0_Sunglasses&p%5B%5D=facets.ideal_for%255B%255D%3DWomen'
                },
                {
                  title: 'Frames',
                  url: '/eyewear/frames/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DUnisex&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&sid=u73%2Fh4k'
                }
              ],
              [
                {
                  title: 'Featured',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Forever21',
                  url: '/all/pr?count=40&p%5B%5D=facets.brand%255B%255D%3DForever%2B21&sid=all'
                },
                {
                  title: 'Accessorize',
                  url: '/all/pr?sid=all&p[]=facets.brand%255B%255D%3DAccessorize&otracker=categorytree'
                },
                {
                  title: 'W',
                  url: '/all/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DW&sid=all'
                },
                {
                  title: 'Pantaloons',
                  url: '/womens-clothing/pr?count=40&amp;otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DAjile%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DAkkriti%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DAnnabelle%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DCandies%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DHoney%2BBy%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DIzabel%2BLondon%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DRangmanch%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DSF%2BJeans%2Bby%2BPantaloons&amp;sid=2oq%2Fc1r'
                },
                {
                  title: 'Chemistry',
                  url: '/all/~womens-footwear-and-handbag/pr?p%5B%5D=facets.brand%255B%255D%3DChemistry&amp;sid=all'
                },
                {
                  title: 'Lakme',
                  url: '/search?p[]=facets.brand%255B%255D%3DLakme&sid=t06&otracker=CLP_filters'
                },
                {
                  title: 'Nivea',
                  url: '/search?count=40&otracker=CLP_filters&p%5B%5D=facets.brand%255B%255D%3DNivea&p%5B%5D=facets.brand%255B%255D%3DNivea%2BMen&sid=t06'
                },
                {
                  title: 'Catwalk',
                  url: '/womens-footwear/pr?otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DCatwalk&amp;sid=osp%2Fiko'
                },
                {
                  title: 'Titan-Raga',
                  url: '/watches/pr?otracker=product_breadCrumbs_Watches&amp;p%5B%5D=facets.brand%255B%255D%3DTitan&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;sid=r18'
                },
                {
                  title: 'Fastrack',
                  url: '/all/pr?sid=all&amp;p[]=facets.brand%255B%255D%3DFastrack'
                },
                {
                  title: 'Divastri',
                  url: '/divastri-store'
                },
                {
                  title: 'RareRoots',
                  url: '/womens-clothing/pr?count=40&p%5B%5D=facets.brand%255B%255D%3DRARE%2BROOTS&sid=2oq%2Fc1r'
                },
                {
                  title: 'Anmi',
                  url: '/the-anmi-store'
                },
                {
                  title: 'Coins&amp;Bars',
                  url: '/gold-silver-coins/coins-bars/pr?sid=all,mcr,73x,ydh&otracker=categorytree'
                },
                {
                  title: 'Crocs',
                  url: '/womens-footwear/pr?sid=osp%2Ciko&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DCrocs'
                },
                {
                  title: 'Trendingtoday!',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Ruffles&amp;Frills',
                  url: '/western-wear/pr?facets.availability%5b%5d=Exclude+Out+of+Stock&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;p%5B%5D=facets.theme%255B%255D%3DRuffles&amp;sid=ha6'
                },
                {
                  title: 'PastelKurtas&amp;Kurtis',
                  url: '/search?facets.availability[]=Exclude+Out+of+Stock&amp;p[]=facets.filter_standard[]=1&amp;p[]=facets.theme%255B%255D%3DPastel%2BKurtas&amp;sid=2oq%2Fc1r%2F3pj&amp;otracker=clp_metro_tile3_1_kurta-categ-ca620_kurta-kurti-store_aa76c0f1-f407-428d-9018-e9e3db294186_wp2'
                },
                {
                  title: 'DesignerNetSarees',
                  url: '/sarees/pr?facets.availability[]=Exclude+Out+of+Stock&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;p%5B%5D=facets.theme%255B%255D%3DDesigner%2BSarees&amp;p%5B%5D=facets.theme%255B%255D%3DPastel&amp;p%5B%5D=facets.theme%255B%255D%3DTouch%2Bof%2BGold&amp;sid=2oq%2Fc1r%2F3pj%2F7od&amp;otracker=clp_metro_tile3_1_saree-categ-1884a_sarees-store_5926195c-d5cd-4ed7-8cf6-5937f3faec19_wp2'
                }
              ]
            ]
          }
        ]
      },
      'baby-kids': {
        title: 'Baby&amp;Kids',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: "Kids'Clothing",
                  url: '/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls',
                  type: 'heading'
                },
                {
                  title: "Boys'Clothing",
                  url: '/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys',
                  type: 'heading'
                },
                {
                  title: 'T-Shirts',
                  url: '/clothing-and-accessories/topwear/tshirt/pr?sid=clo,ash,ank&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&otracker=categorytree'
                },
                {
                  title: 'EthnicWear',
                  url: '/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms/pr?sid=clo%2Ccfv&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls'
                },
                {
                  title: 'Shorts',
                  url: '/clothing-and-accessories/bottomwear/shorts/pr?sid=clo%2Cvua%2Ce8g&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls'
                },
                {
                  title: 'Shirts',
                  url: '/clothing-and-accessories/topwear/shirt/kids-shirt/pr?sid=clo%2Cash%2Caxc%2Cznf&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys'
                },
                {
                  title: 'Innerwear',
                  url: '/clothing-and-accessories/innerwear/pr?sid=clo%2Cqfl&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls'
                },
                {
                  title: "Girls'Clothing",
                  url: '/clothing-and-accessories/pr?sid=clo&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls',
                  type: 'heading'
                },
                {
                  title: 'Dresses&amp;Skirts',
                  url: '/clothing-and-accessories/dresses-and-gown/dress/kids-dress/pr?sid=clo%2Codx%2Cmaj%2Czc1&otracker=categorytree'
                },
                {
                  title: 'EthnicWear',
                  url: '/clothing-and-accessories/ethnic-wear/pr?sid=clo,cfv&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&otracker=categorytree'
                },
                {
                  title: 'T-shirts&Tops',
                  url: '/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&otracker=categorytree'
                },
                {
                  title: 'Innerwear',
                  url: '/clothing-and-accessories/innerwear/pr?sid=clo%2Cqfl&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DGirls'
                },
                {
                  title: "BabyBoys'Clothing",
                  url: '/clothing-and-accessories/pr?sid=clo&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys',
                  type: 'heading'
                },
                {
                  title: 'CombosSets',
                  url: '/clothing-and-accessories/kids-clothing-sets/kids-appareal-combo/pr?sid=clo%2Ceof%2C1bp&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls'
                },
                {
                  title: 'T-Shirts',
                  url: '/clothing-and-accessories/topwear/pr?sid=clo%2Cash&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls'
                },
                {
                  title: 'Innerwear',
                  url: '/clothing-and-accessories/innerwear/pr?sid=clo%2Cqfl&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls'
                },
                {
                  title: "BabyGirls'Clothing",
                  url: '/clothing-and-accessories/pr?sid=clo&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls',
                  type: 'heading'
                },
                {
                  title: 'CombosSets',
                  url: '/clothing-and-accessories/kids-clothing-sets/kids-appareal-combo/pr?sid=clo%2Ceof%2C1bp&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls'
                },
                {
                  title: 'Dresses&Gowns',
                  url: '/clothing-and-accessories/dresses-and-gown/dress/kids-dress/pr?sid=clo%2Codx%2Cmaj%2Czc1&otracker=categorytree'
                },
                {
                  title: 'Innerwear',
                  url: '/clothing-and-accessories/innerwear/pr?sid=clo%2Cqfl&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls'
                }
              ],
              [
                {
                  title: "Kids'Footwear",
                  url: '/footwear/kids-infant-footwear/pr?sid=osp,mba&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree&otracker=nmenu_sub_Baby%20%26%20Kids_0_Kids%20Footwear',
                  type: 'heading'
                },
                {
                  title: "Boys'Footwear",
                  url: '/footwear/kids-infant-footwear/boys-footwear/pr?sid=osp,mba,o3t&otracker=categorytree',
                  type: 'heading'
                },
                {
                  title: 'Sandals',
                  url: '/footwear/kids-infant-footwear/boys-footwear/sandals/pr?sid=osp,mba,o3t,wqv&otracker=categorytree'
                },
                {
                  title: 'SportShoes',
                  url: '/footwear/kids-infant-footwear/boys-footwear/sports-shoes/pr?sid=osp,mba,o3t,aua&otracker=categorytree'
                },
                {
                  title: "Girls'Footwear",
                  url: '/footwear/kids-infant-footwear/for-girls/pr?sid=osp,mba,erx&otracker=nmenu_sub_Baby%20%26%20Kids_0_Girls%27%20Footwear',
                  type: 'heading'
                },
                {
                  title: 'Flats&amp;Bellies',
                  url: '/footwear/kids-infant-footwear/girls-footwear/flats-bellies/pr?sid=osp,mba,erx,6yc&otracker=categorytree'
                },
                {
                  title: 'SportShoes',
                  url: '/footwear/kids-infant-footwear/for-girls/sports-shoes/pr?sid=osp,mba,erx,9oc&otracker=nmenu_sub_Baby%20%26%20Kids_0_Sport%20Shoes'
                },
                {
                  title: 'InfantFootwear',
                  url: '/footwear/kids-infant-footwear/infants/pr?sid=osp,mba,qzr&otracker=nmenu_sub_Baby%20%26%20Kids_0_Baby%20Footwear',
                  type: 'heading'
                },
                {
                  title: 'CharacterShoes',
                  url: '/all/footwear/kids-infant-footwear/pr?p%5B%5D=facets.brand%255B%255D%3DBarbie&p%5B%5D=facets.brand%255B%255D%3DDisney&p%5B%5D=facets.brand%255B%255D%3DSpiderman&sid=all%2Cosp%2Cmba&pincode=110001&filterNone=true&otracker=nmenu_sub_Baby%20%26%20Kids_0_Character%20Shoes',
                  type: 'heading'
                },
                {
                  title: "Kids'Watches",
                  url: '/watches/pr?sid=r18&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&otracker=nmenu_sub_Baby%20%26%20Kids_0_Kids%27%20Watches'
                },
                {
                  title: "Kids'Sunglasses",
                  url: '/sunglasses/pr?sid=26x&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&otracker=nmenu_sub_Baby%20%26%20Kids_0_Kids%27%20Sunglasses'
                },
                {
                  title: "Kids'WinterWear",
                  url: '/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys',
                  type: 'heading'
                },
                {
                  title: "Boys'WinterWear",
                  url: '/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls',
                  type: 'heading'
                },
                {
                  title: "Boys'Sweatshirts",
                  url: '/clothing-and-accessories/winter-wear/sweatshirt/kids-sweatshirt/pr?sid=clo%2Cqvw%2C64a%2Clwy&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls'
                },
                {
                  title: "Boys'Jacket",
                  url: '/clothing-and-accessories/winter-wear/jackets/kids-jackets/pr?sid=clo,qvw,z0g,0vw&otracker=categorytree'
                },
                {
                  title: "Girls'WinterWear",
                  url: '/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DGirls',
                  type: 'heading'
                },
                {
                  title: "Girls'Sweatshirts",
                  url: '/clothing-and-accessories/winter-wear/sweatshirt/kids-sweatshirt/pr?sid=clo%2Cqvw%2C64a%2Clwy&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DGirls'
                },
                {
                  title: "Girls'Jackets",
                  url: '/clothing-and-accessories/winter-wear/jackets/kids-jackets/pr?sid=clo,qvw,z0g,0vw&otracker=categorytree'
                },
                {
                  title: 'InfantsWinterWear',
                  url: '/clothing-and-accessories/winter-wear/pr?sid=clo%2Cqvw&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BBoys'
                },
                {
                  title: 'Thermals',
                  url: '/clothing-and-accessories/winter-wear/thermals/pr?sid=clo,qvw,ugg&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&otracker=categorytree'
                }
              ],
              [
                {
                  title: 'Toys',
                  url: '/toysclp-store',
                  type: 'heading'
                },
                {
                  title: 'RemoteControlToys',
                  url: '/toys/remote-control-toys/pr?sid=mgl,56m'
                },
                {
                  title: 'EducationalToys',
                  url: '/toys/educational-toys/learning-toys/pr?sid=mgl,u35'
                },
                {
                  title: 'SoftToys',
                  url: '/toys/stuffed-toys/pr?sid=mgl,1zt'
                },
                {
                  title: 'Cars&amp;Die-castVehicles',
                  url: '/toys/vehicle-action-toys/vehicle-pull-along/pr?sid=mgl%2Cj6q'
                },
                {
                  title: 'OutdoorToys',
                  url: '/toys/outdoor-toys/pr?sid=mgl%2C1k9'
                },
                {
                  title: 'ActionFigures',
                  url: '/toys/vehicle-action-toys/action-figures/pr?sid=mgl,k00'
                },
                {
                  title: 'BoardGames',
                  url: '/toys/puzzles-board-games/card-games/pr?sid=mgl,qet'
                },
                {
                  title: 'MusicalToys',
                  url: '/toys/musical-toys/pr?p%5B%5D=sort%3Dfeatured&amp;sid=mgl,pz4'
                },
                {
                  title: 'Dolls&amp;DollHouses',
                  url: '/toys/dolls-doll-houses/pr?sid=mgl,fnw'
                },
                {
                  title: 'Puzzles',
                  url: '/toys/puzzles/pr?sid=mgl%2Clu4'
                },
                {
                  title: 'S.T.E.MToys',
                  url: '/stem-store'
                },
                {
                  title: 'Helicopter&amp;Drones',
                  url: '/toys/remote-control-toys/pr?sid=mgl%2C56m&otracker=categorytree&p%5B%5D=facets.type%255B%255D%3DPlanes%2B%2526%2BHelicopters'
                },
                {
                  title: 'ToyGuns',
                  url: '/toys/vehicle-action-toys/battle-toys/pr?sid=mgl%2Cgsh&otracker=categorytree'
                },
                {
                  title: 'PartySupplies',
                  url: '/toys/party-supplies/pr?sid=mgl,ksc&otracker=categorytree'
                },
                {
                  title: 'SchoolSupplies',
                  url: '/school-supplies-store',
                  type: 'heading'
                },
                {
                  title: 'SchoolBags',
                  url: '/kids-accessories/school-supplies/school-bags/pr?sid=d69,thr,wsp'
                },
                {
                  title: 'SchoolComboSets',
                  url: '/toys/school-supplies/school-sets/pr?sid=mgl%2Cthr%2Cscm'
                },
                {
                  title: 'LunchBox',
                  url: '/toys/school-supplies/lunch-boxes/pr?sid=mgl%2Cthr%2Cvzp'
                }
              ],
              [
                {
                  title: 'BabyCare',
                  url: '/babycare19-store',
                  type: 'heading'
                },
                {
                  title: 'Diapers',
                  url: '/baby-care/diaper-potty-training/baby-diapers/pr?sid=kyh,fdp,yvf&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Wipes',
                  url: '/baby-care/diaper-potty-training/baby-wipes/pr?sid=kyh,fdp,kvq&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Diapering&amp;PottyTraining',
                  url: '/baby-care/diaper-potty-training/pr?sid=kyh,fdp&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyBath,Hair&SkinCare',
                  url: '/baby-care/baby-bath-hair-skin-care/pr?sid=kyh,pl5&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyGrooming',
                  url: '/baby-care/baby-grooming/pr?sid=kyh,tyn&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyBathingAccessories',
                  url: '/baby-care/baby-bathing-accessories/pr?sid=kyh,rdc&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyGiftSets&Combo',
                  url: '/baby-care/baby-gift-sets-combo/pr?sid=kyh,utp&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyOralCare',
                  url: '/baby-care/baby-oral-care/pr?sid=kyh,ga0&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Nursing&BreastFeeding',
                  url: '/baby-care/nursing-breast-feeding/pr?sid=kyh,ie7&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyFood',
                  url: '/baby-care/baby-food/pr?sid=kyh,arw&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyFeedingBottle&Accessories',
                  url: '/baby-care/baby-feeding-bottle-accessories/pr?sid=kyh,9gj&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyFeedingUtensils&Accessories',
                  url: '/baby-care/baby-feeding-utensils-accessories/pr?sid=kyh,dki&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyBedding',
                  url: '/baby-care/baby-bedding/pr?sid=kyh,7j3&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyGear',
                  url: '/baby-care/strollers-activity-gear/pr?sid=kyh,5mt&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyMedical&HealthCare',
                  url: '/baby-care/baby-medical-health-care/pr?sid=kyh,g83&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyProofing&Safety',
                  url: '/baby-care/baby-proofing-safety/pr?sid=kyh,vxo&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BabyCleaners&Detergents',
                  url: '/baby-care/baby-cleaners-detergents/pr?sid=kyh,akv&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                }
              ],
              [
                {
                  title: 'Featuredbrands',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'Miss&Chief',
                  url: '/missandchief-store'
                },
                {
                  title: 'Barbie',
                  url: '/toys/barbie~brand/pr?sid=mgl'
                },
                {
                  title: 'Disney',
                  url: '/toys/disney~brand/pr?sid=mgl'
                },
                {
                  title: 'UnitedColorsofBenetton',
                  url: '/kids-clothing/pr?count=40&amp;otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton&amp;p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton.&amp;sid=2oq%2Fmpf'
                },
                {
                  title: "TheChildren'sPlace",
                  url: '/kids-clothing/pr?sid=2oq%2Cmpf&otracker=categorytree&otracker=nmenu_sub_Baby+%26+Kids_0_Kids+Clothing&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.brand%255B%255D%3DThe%2BChildren%2527s%2BPlace'
                },
                {
                  title: 'USPolo',
                  url: '/kids-clothing/pr?count=40&otracker=categorytree&otracker=nmenu_sub_Baby+and+Kids_0_Kids+Clothing&p%5B%5D=facets.brand%255B%255D%3DU%2BS%2BPolo%2BKids&p%5B%5D=facets.brand%255B%255D%3DU%2BS%2BPOLO%2BKIDS&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPolo%2BAssn&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPolo%2BAssn.&p%5B%5D=facets.brand%255B%255D%3DUs%2BPolo%2BKids&p%5B%5D=facets.brand%255B%255D%3DUS%2BPolo%2BKids&p%5B%5D=facets.brand%255B%255D%3DUS%2BPOLO%2BKIDS&sid=2oq%2Fmpf'
                },
                {
                  title: 'FlyingMachine',
                  url: '/kids-clothing/pr?count=40&otracker=categorytree&otracker=nmenu_sub_Baby+and+Kids_0_Kids+Clothing&p%5B%5D=facets.brand%255B%255D%3DFlying%2BMachine&sid=2oq%2Fmpf'
                },
                {
                  title: 'Crocs',
                  url: '/footwear/kids-infant-footwear/crocs~brand/pr?sid=osp,mba'
                },
                {
                  title: 'Puma',
                  url: '/footwear/kids-infant-footwear/puma~brand/pr?sid=osp,mba'
                },
                {
                  title: 'Funskool',
                  url: '/toys/funskool~brand/pr?sid=mgl'
                },
                {
                  title: 'Lego',
                  url: '/lego-store'
                },
                {
                  title: 'Luvlap',
                  url: '/baby-care/luvlap~brand/pr?sid=kyh'
                },
                {
                  title: 'MamyPoko',
                  url: '/baby-care/~diapers-store/pr?sid=kyh%2Cfdp%2Cyvf&otracker=nmenu_sub_Baby+%26+Kids_0_Diapers&otracker=nmenu_sub_Baby+%26+Kids_0_Diapers&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DMamyPoko'
                },
                {
                  title: 'MeeMee',
                  url: '/baby-care/pr?sid=kyh&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DMe%2BMee&p%5B%5D=facets.brand%255B%255D%3DMEE%2B%2527N%2527%2BMyy&p%5B%5D=facets.brand%255B%255D%3DMeeMee'
                }
              ]
            ]
          }
        ]
      },
      'home-kitchen': {
        title: 'Home&amp;Furniture',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: 'Kitchen,Cookware&Serveware',
                  url: '/kitchen-cookware-serveware/pr?sid=upp',
                  type: 'heading'
                },
                {
                  title: 'Pans',
                  url: '/kitchen-cookware-serveware/cookware/pans/pr?sid=upp%2Ctnx%2C9fq'
                },
                {
                  title: 'Tawas',
                  url: '/kitchen-cookware-serveware/cookware/tawas/pr?sid=upp%2Ctnx%2Cj12'
                },
                {
                  title: 'PressureCookers',
                  url: '/kitchen-cookware-serveware/cookware/pressure-cookers/pr?sid=upp%2Ctnx%2Cgsl'
                },
                {
                  title: 'Kitchentools',
                  url: '/kitchen-cookware-serveware/kitchen-tools/pr?sid=upp%2Cldf'
                },
                {
                  title: 'GasStoves',
                  url: '/kitchen-cookware-serveware/gas-stove-accessories/gas-stoves/pr?sid=upp%2Cd7m%2Cuhm'
                },
                {
                  title: 'Tableware&Dinnerware',
                  url: '/kitchen-cookware-serveware/tableware-dinnerware/pr?sid=upp%2Ci7t',
                  type: 'heading'
                },
                {
                  title: 'CoffeeMugs',
                  url: '/kitchen-cookware-serveware/tableware-dinnerware/mugs/pr?sid=upp%2Ci7t%2Cmsi'
                },
                {
                  title: 'DinnerSet',
                  url: '/kitchen-cookware-serveware/tableware-dinnerware/dinner-sets/pr?sid=upp%2Ci7t%2Clha'
                },
                {
                  title: 'Barware',
                  url: '/kitchen-cookware-serveware/barware/pr?sid=upp%2Cta2'
                },
                {
                  title: 'KitchenStorage',
                  url: '/kitchen-cookware-serveware/kitchen-storage-containers/pr?sid=upp%2C5ix',
                  type: 'heading'
                },
                {
                  title: 'WaterBottles',
                  url: '/kitchen-cookware-serveware/lunch-boxes-bottles-and-flasks/water-bottles/pr?sid=upp%2Cf2k%2C0zz'
                },
                {
                  title: 'LunchBoxes',
                  url: '/kitchen-cookware-serveware/lunch-boxes-bottles-and-flasks/lunch-boxes/pr?sid=upp%2Cf2k%2Cu70'
                },
                {
                  title: 'Flasks',
                  url: '/kitchen-cookware-serveware/lunch-boxes-bottles-and-flasks/flasks/pr?sid=upp%2Cf2k%2C7k9'
                },
                {
                  title: 'Casseroles',
                  url: '/kitchen-cookware-serveware/tableware-dinnerware/casseroles/pr?sid=upp%2Ci7t%2Cgka'
                },
                {
                  title: 'KitchenContainers',
                  url: '/kitchen-cookware-serveware/kitchen-storage-containers/kitchen-containers/pr?sid=upp%2C5ix%2C01e'
                },
                {
                  title: 'CleaningSupplies',
                  url: '/home-cleaning-bathroom-accessories/cleaning-supplies/pr?sid=rja%2Cz2d',
                  type: 'heading'
                }
              ],
              [
                {
                  title: 'FurnitureTopOffers',
                  url: '/furniture-store',
                  type: 'heading'
                },
                {
                  title: 'BedRoomFurniture',
                  url: '/furniture/~bedroom-furniture-/pr?sid=wwe',
                  type: 'heading'
                },
                {
                  title: 'Beds',
                  url: '/beds/pr?sid=wwe,7p7'
                },
                {
                  title: 'Mattresses',
                  url: '/furniture/mattresses/pr?sid=wwe,rg9'
                },
                {
                  title: 'Wardrobes',
                  url: '/furniture/wardrobes/pr?sid=wwe,fc3'
                },
                {
                  title: 'LivingRoomFurniture',
                  url: '/furniture/~living-room-furniture-/pr?sid=wwe',
                  type: 'heading'
                },
                {
                  title: 'Sofa',
                  url: '/furniture/sofas/pr?sid=wwe,c3z'
                },
                {
                  title: 'SofaBeds',
                  url: '/furniture/sofa-beds/pr?sid=wwe,osg'
                },
                {
                  title: 'TVUnits',
                  url: '/furniture/tv-units-cabinets/pr?sid=wwe,243'
                },
                {
                  title: 'DiningTables&Chairs',
                  url: '/furniture/dining-tables-sets/pr?sid=wwe,ur9'
                },
                {
                  title: 'CoffeeTables',
                  url: '/furniture/tables/coffee-tables/pr?sid=wwe,ki7,ot1'
                },
                {
                  title: 'ShoeRacks',
                  url: '/furniture/shoe-rack/pr?sid=wwe,0ye'
                },
                {
                  title: 'Office&StudyFurniture',
                  url: '/furniture/~office-furniture/pr?sid=wwe',
                  type: 'heading'
                },
                {
                  title: 'KidsRoomFurniture',
                  url: '/furniture/~kids-furniture/pr?sid=wwe'
                },
                {
                  title: 'DIYFurniture',
                  type: 'heading'
                },
                {
                  title: 'BeanBags',
                  url: '/furniture/bean-bags/pr?sid=wwe,4n6'
                },
                {
                  title: 'CollapsibleWardrobes',
                  url: '/furniture/wardrobes/collapsible-wardrobes/pr?sid=wwe,fc3,xlp'
                }
              ],
              [
                {
                  title: 'Furnishing',
                  url: '/home-furnishing/pr?sid=jra&marketplace=FLIPKART',
                  type: 'heading'
                },
                {
                  title: 'Bedsheets',
                  url: '/home-furnishing/bed-linen-blankets/bedsheets/pr?sid=jra,knw,qcw&marketplace=FLIPKART'
                },
                {
                  title: 'Curtains',
                  url: '/home-furnishing/curtains-accessories/curtains/pr?sid=jra,sl5,2va&marketplace=FLIPKART'
                },
                {
                  title: 'Cushions&Pillows',
                  url: '/home-furnishing/cushions-pillows/pr?sid=jra,kzv&marketplace=FLIPKART'
                },
                {
                  title: 'Blankets',
                  url: '/home-furnishing/bed-linen-blankets/blankets/pr?sid=jra,knw,llw&marketplace=FLIPKART'
                },
                {
                  title: 'BathTowels',
                  url: '/home-furnishing/bath-linen/bath-towels/pr?sid=jra,jk3,wtg&marketplace=FLIPKART'
                },
                {
                  title: 'Kitchen&TableLinen',
                  url: '/home-furnishing/kitchen-table-linen/pr?sid=jra,iwp&marketplace=FLIPKART'
                },
                {
                  title: 'FloorCoverings',
                  url: '/home-furnishing/floor-coverings/pr?sid=jra,kwq&marketplace=FLIPKART'
                },
                {
                  title: 'SmartHomeAutomation',
                  url: '/smart-home-automation-store?otracker=nmenu_sub_Appliances_0_Smart%20Home%20Automation',
                  type: 'heading'
                },
                {
                  title: 'SmartSecuritySystem',
                  url: '/automation-robotics/surveillance-devices/security-cameras/pr?otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DCELESTECH&amp;p%5B%5D=facets.brand%255B%255D%3DCP%2BPlus&amp;p%5B%5D=facets.brand%255B%255D%3DCP-PLUS&amp;p%5B%5D=facets.brand%255B%255D%3DCP-Plus&amp;p%5B%5D=facets.brand%255B%255D%3DCp%2BPlus&amp;p%5B%5D=facets.brand%255B%255D%3DCpplus&amp;p%5B%5D=facets.brand%255B%255D%3DCrocon&amp;p%5B%5D=facets.brand%255B%255D%3DFocus&amp;p%5B%5D=facets.brand%255B%255D%3DGodrej&amp;p%5B%5D=facets.brand%255B%255D%3DHIK%2BVISION&amp;p%5B%5D=facets.brand%255B%255D%3DHIKVISION&amp;p%5B%5D=facets.brand%255B%255D%3DHik%2BVision&amp;p%5B%5D=facets.brand%255B%255D%3DHik%2Bvision&amp;p%5B%5D=facets.brand%255B%255D%3DHikvision&amp;p%5B%5D=facets.brand%255B%255D%3DHoneywell&amp;p%5B%5D=facets.brand%255B%255D%3DSAMSUNG&amp;p%5B%5D=facets.brand%255B%255D%3Dcp%2Bplus&amp;p%5B%5D=facets.brand%255B%255D%3Dhoneywell&amp;sid=igc%2Fj69%2Fagd'
                },
                {
                  title: 'SmartDoorLocks',
                  url: '/automation-robotics/smart-door-locks/pr?sid=igc,u0f&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability[]=Exclude+Out+of+Stock'
                },
                {
                  title: 'HomeImprovement',
                  url: '/homeimprovemntsclp-store',
                  type: 'heading'
                },
                {
                  title: 'Tools&MeasuringEquipments',
                  url: '/home-improvement/tools-and-measuring-equipment/pr?sid=h1m%2Chww'
                },
                {
                  title: 'HomeUtilities&Organizers',
                  url: '/home-improvement/home-utilities-and-organizers/pr?sid=h1m,iee&marketplace=FLIPKART'
                },
                {
                  title: 'Lawn&Gardening',
                  url: '/gardening-store'
                },
                {
                  title: 'Bathroom&KitchenFittings',
                  url: '/building-materials-and-supplies/bathroom-and-kitchen-fittings/pr?sid=b8s%2Cecr'
                }
              ],
              [
                {
                  title: 'HomeDecor',
                  url: '/home-decor/pr?sid=arb&marketplace=FLIPKART',
                  type: 'heading'
                },
                {
                  title: 'Paintings',
                  url: '/home-decor/paintings-posters/paintings/pr?sid=arb,bga,mmf'
                },
                {
                  title: 'Clocks',
                  url: '/home-decor/clocks/pr?sid=arb,kjw&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'WallShelves',
                  url: '/home-decor/wall-decor-items/wall-shelves/pr?sid=arb,a77,vk7&marketplace=FLIPKART'
                },
                {
                  title: 'Stickers',
                  url: '/home-decor/stickers-wallpapers/stickers/pr?sid=arb,yod,si0&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Showpieces&Figurines',
                  url: '/home-decor/showpieces-decor-accents/showpieces-figurines/pr?sid=arb,uj2,z1t&marketplace=FLIPKART'
                },
                {
                  title: 'HomeLighting',
                  url: '/home-lighting/pr?sid=jhg&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree',
                  type: 'heading'
                },
                {
                  title: 'Bulbs',
                  url: '/home-lighting/utility-lightling/bulbs/pr?sid=jhg,yqn,feb&marketplace=FLIPKART'
                },
                {
                  title: 'WallLamp',
                  url: '/home-lighting/decor-lighting-accessories/wall-lamps/pr?sid=jhg,6w8,mbd'
                },
                {
                  title: 'TableLamp',
                  url: '/home-lighting/decor-lighting-accessories/table-lamps/pr?sid=jhg,6w8,gde'
                },
                {
                  title: 'CeilingLamp',
                  url: '/home-lighting/decor-lighting-accessories/ceiling-lamps/pr?sid=jhg,6w8,rws'
                },
                {
                  title: 'EmergencyLights',
                  url: '/home-lighting/utility-lightling/emergency-lights/pr?sid=jhg,yqn,m6m&marketplace=FLIPKART'
                },
                {
                  title: 'FestiveDecor&Gifts',
                  url: '/festive-decor-gifting/pr?sid=bro',
                  type: 'heading'
                },
                {
                  title: 'PetSupplies',
                  url: '/pet-supplies/pr?sid=p3t&marketplace=FLIPKART',
                  type: 'heading'
                },
                {
                  title: 'Dogs',
                  url: '/pet-supplies/dogs/pr?sid=p3t,ea3&marketplace=FLIPKART'
                },
                {
                  title: 'Cats',
                  url: '/pet-supplies/cats/pr?sid=p3t,0mo&marketplace=FLIPKART'
                },
                {
                  title: 'Fish&Aquatics',
                  url: '/pet-supplies/fish-aquatic/pr?sid=p3t,ljf&marketplace=FLIPKART'
                }
              ],
              [
                {
                  title: 'DurabilityCertifiedFurniture',
                  url: '/furnituredurable-store',
                  type: 'heading'
                },
                {
                  title: 'Featured',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'ChristmasStore',
                  url: '/christmas-festiverange-store',
                  type: 'heading'
                },
                {
                  title: 'MugsStore',
                  url: '/coffee-mugs-store'
                },
                {
                  title: 'GardeningStore',
                  url: '/gardening-store',
                  type: 'heading'
                },
                {
                  title: 'StainlessSteelStore',
                  url: '/stainless-steel-store'
                },
                {
                  title: 'Milton',
                  url: '/search?p[]=facets.brand%255B%255D%3DMilton&sid=r4l&otracker=CLP_filters'
                },
                {
                  title: 'BombayDyeing',
                  url: '/home-furnishing/bombay-dyeing~brand/pr?sid=vdm'
                },
                {
                  title: '@home',
                  url: '/search?p[]=facets.brand%255B%255D%3D%2540home%2Bby%2BNilkamal&amp;sid=anx&amp;otracker=CLP_filters'
                },
                {
                  title: 'HomeTown',
                  url: '/furniture/hometown~brand/pr?sid=anx'
                },
                {
                  title: 'Ajanta',
                  url: '/home-decor/ajanta~brand/pr?sid=1m7'
                },
                {
                  title: 'SpacesbyWelspun',
                  url: '/home-furnishing/spaces-by-welspun~brand/pr?sid=vdm'
                },
                {
                  title: 'Prestige',
                  url: '/household/prestige~brand/pr?sid=r4l'
                },
                {
                  title: 'PerfectHomeStore',
                  url: '/perfect-homes-store',
                  type: 'heading'
                }
              ]
            ]
          }
        ]
      },
      'books-media': {
        title: 'Sports,Books&More',
        url: '#',
        importantLinks: [],
        tabs: [
          {
            title: 'Categories',
            columns: [
              [
                {
                  title: 'Sports',
                  url: '/sports-gear-essentials-store',
                  type: 'heading'
                },
                {
                  title: 'Cricket',
                  url: '/sports/cricket/pr?sid=abc,5lf&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Badminton',
                  url: '/sports/badminton/pr?sid=abc,egs&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Cycling',
                  url: '/sports/cycling/pr?sid=abc,ulv&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Football',
                  url: '/sports/football/pr?sid=abc,gxg&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Skating',
                  url: '/sports/skating/pr?sid=abc,mgq&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Camping&Hiking',
                  url: '/sports/camping-hiking/pr?sid=abc,fvf&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Swimming',
                  url: '/sports/swimming/pr?sid=abc,byq&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'ExerciseFitness',
                  url: '/exercise-fitness-essentials-store',
                  type: 'heading'
                },
                {
                  title: 'CardioEquipment',
                  url: '/offers-list/strength-cardio-equipment?screen=dynamic&pk=themeViews%3DSF-March-FR4%3AApp%2CSF-March-FR4%3ADesk~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU'
                },
                {
                  title: 'HomeGyms',
                  url: '/exercise-fitness/fitness-equipments/fitness-kits/pr?sid=qoc,amf,vh3&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Support',
                  url: '/exercise-fitness/fitness-accessories/supports/pr?sid=qoc,acb,aa3&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Dumbbells',
                  url: '/exercise-fitness/fitness-accessories/dumbbells/pr?sid=qoc,acb,zuc&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'AbExercisers',
                  url: '/exercise-fitness/fitness-equipments/ab-exercisers/pr?sid=qoc,amf,sma&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Shakers&Sippers',
                  url: '/exercise-fitness/fitness-accessories/shakers-and-sippers/pr?sid=qoc,acb,qat&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'YogaMat',
                  url: '/exercise-fitness/yoga/yoga-mats/pr?sid=qoc,s1h,fco&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'GymGloves',
                  url: '/exercise-fitness/fitness-accessories/gym-gloves/pr?sid=qoc,acb,afr&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                }
              ],
              [
                {
                  title: 'FoodEssentials',
                  url: '/food-nutrition/~gourmet-foods-/pr?sid=7jv',
                  type: 'heading'
                },
                {
                  title: 'Nuts&DryFruits',
                  url: '/food-nutrition/nuts-dry-fruits-combos/~gourmet-foods-/pr?sid=7jv,30b&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Tea,CoffeeandBeverages',
                  url: '/food-nutrition/beverages/~gourmet-foods-/pr?sid=7jv,ldw&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Chocolates',
                  url: '/food-nutrition/confectioneries-sweets/chocolates/~gourmet-foods-/pr?sid=7jv,iyp,s4n&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'SnacksCorner',
                  url: '/food-nutrition/snacks-nibbles/~gourmet-foods-/pr?sid=7jv,x9l&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'GiftingCombos',
                  url: '/food-nutrition/food-nutrition-combo/~gourmet-foods-/pr?sid=7jv,jid&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'SweetsStore',
                  url: '/food-nutrition/confectioneries-sweets/sweets-mithai/~gourmet-foods-/pr?sid=7jv,iyp,2e1&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Jams,SpreadsandHoney',
                  url: '/food-nutrition/jams-spreads-honey/~gourmet-foods-/pr?sid=7jv,kzq&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'BreakfastItems',
                  url: '/food-nutrition/breakfast-mixes-cereals/~gourmet-foods-/pr?sid=7jv,vx6&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Health&Nutrition',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'AllSupplements',
                  url: '/health-and-supplements-clp-store'
                },
                {
                  title: 'ProteinSupplements',
                  url: '/food-nutrition/health-nutrition/protein-supplements/pr?sid=7jv,owt,d9u&otracker=categorytree&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Protein%20Supplements'
                },
                {
                  title: 'VitaminSupplements',
                  url: '/food-nutrition/health-nutrition/vitamin-supplements/pr?sid=7jv,owt,n2j&otracker=categorytree&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Vitamin%20Supplements'
                },
                {
                  title: 'HealthDrinks',
                  url: '/food-nutrition/health-nutrition/health-and-energy-drinks/pr?sid=7jv,owt,a39&otracker=categorytree&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Health%20%26%20Energy%20Drinks'
                },
                {
                  title: 'AyurvedicSupplements',
                  url: '/food-nutrition/health-nutrition/vitamin-supplements/pr?sid=7jv%2Cowt%2Cn2j&otracker=categorytree&otracker=nmenu_sub_Sports%2C+Books+%26+More_0_Vitamin+Supplements&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&p%5B%5D=facets.type%255B%255D%3DAyurvedic%2BSupplements'
                }
              ],
              [
                {
                  title: 'Books',
                  url: '/books-store',
                  type: 'heading'
                },
                {
                  title: 'EntranceExams',
                  url: '/the-exam-store'
                },
                {
                  title: 'Academics',
                  url: '/the-education-store'
                },
                {
                  title: 'Literature&Fiction',
                  url: '/theliterature-fiction-store'
                },
                {
                  title: 'NonFiction',
                  url: '/the-non-fiction-store'
                },
                {
                  title: 'YoungReaders',
                  url: '/the-childrenandteens-store'
                },
                {
                  title: 'Self-Help',
                  url: '/books/selfhelp-books/pr?sid=bks,5uw&marketplace=FLIPKART'
                },
                {
                  title: 'E-Learning',
                  url: '/elearning/pr?sid=xfw&marketplace=FLIPKART'
                },
                {
                  title: 'Preorders',
                  url: '/books/~pre-order/pr?sid=bks'
                },
                {
                  title: 'IndianLanguages',
                  url: '/language-store'
                },
                {
                  title: 'Stationery',
                  url: '/the-stationery-store',
                  type: 'heading'
                },
                {
                  title: 'Pens',
                  url: '/pens-category-store?otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Pens'
                },
                {
                  title: 'Diaries',
                  url: '/pens-stationery/office-supplies/diaries/pr?sid=dgv,tkw,mwh&otracker=product_breadCrumbs_Diaries'
                },
                {
                  title: 'CardHolders',
                  url: '/pens-stationery/office-supplies/card-holders/pr?sid=dgv,tkw,chd&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'DeskOrganizers',
                  url: '/pens-stationery/office-supplies/desk-organizers/pr?sid=dgv,tkw,hlr'
                },
                {
                  title: 'Calculators',
                  url: '/calculators-category-store?otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Calculators%20'
                },
                {
                  title: 'KeyChains',
                  url: '/pens-stationery/office-supplies/key-chains/pr?sid=dgv,tkw,amn&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Key%20Chains'
                }
              ],
              [
                {
                  title: 'AutoAccessories',
                  url: '/autocarbike-accessorys-store',
                  type: 'heading'
                },
                {
                  title: 'Helmets&RidingGears',
                  url: '/automotive/accessories-spare-parts/helmets-riding-gear/pr?p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&sid=0hx%2Cbwd%2Cbgt&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Helmets%20%26%20Riding%20Gear'
                },
                {
                  title: 'CarAudio/Video',
                  url: '/automotive/car-bike-accessories/car-electronics-accessories/car-audio-video/pr?sid=0hx,bwd,tko,jxo&otracker=categorytree'
                },
                {
                  title: 'CarMobileAccessories',
                  url: '/automotive/car-bike-accessories/car-electronics-accessories/car-mobile-accessories/pr?sid=0hx,bwd,tko,av1&otracker=categorytree'
                },
                {
                  title: 'Car&BikeCare',
                  url: '/automotive/car-bike-accessories/car-bike-care/pr?sid=0hx,bwd,byn&otracker=categorytree'
                },
                {
                  title: 'VehicleLubricants',
                  url: '/automotive/car-bike-accessories/lubricants-oils/pr?sid=0hx,bwd,njf&otracker=categorytree'
                },
                {
                  title: 'Industrial&Scientifictools',
                  url: '/industrial-scientific-store',
                  type: 'heading'
                },
                {
                  title: 'IndustrialMeasurementDevices',
                  url: '/industrial-scientific-supplies/industrial-measurement-devices/pr?sid=gsx,oe8&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'IndustrialTestingDevices',
                  url: '/industrial-scientific-supplies/industrial-testing-devices/pr?sid=gsx,gkc&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Lab&ScientificProducts',
                  url: '/industrial-scientific-supplies/lab-scientific-products/pr?sid=gsx,l9d&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'Packaging&ShippingProducts',
                  url: '/industrial-scientific-supplies/packaging-shipping-products/pr?sid=gsx,bad&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'SafetyProducts',
                  url: '/industrial-scientific-supplies/safety-products/pr?sid=gsx,bfk&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'MedicalSupplies',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'PregnancyandFertilityKits',
                  url: '/sexual-wellness/testing-kits/pr?sid=t06,7vg,1dj&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree'
                },
                {
                  title: 'HotWaterBag',
                  url: '/beauty-and-personal-care/health-care/medicines-treatment/pr?sid=t06%2Cnyl%2Cggb&p%5B%5D=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DCasa&p%5B%5D=facets.brand%255B%255D%3DCASA&p%5B%5D=facets.brand%255B%255D%3DTULIP&p%5B%5D=facets.brand%255B%255D%3DTulip&p%5B%5D=facets.brand%255B%255D%3Dcreto&p%5B%5D=facets.brand%255B%255D%3DCRETO&p%5B%5D=facets.brand%255B%255D%3DAlex%2527s&p%5B%5D=facets.brand%255B%255D%3DRecombigen&p%5B%5D=facets.brand%255B%255D%3Dxtraplus&p%5B%5D=facets.brand%255B%255D%3DKetsaal&p%5B%5D=facets.brand%255B%255D%3DThermocare&p%5B%5D=facets.brand%255B%255D%3DRoyal&p%5B%5D=facets.brand%255B%255D%3DARYSHAA&p%5B%5D=facets.brand%255B%255D%3DAryshaa&p%5B%5D=facets.brand%255B%255D%3DTuelip&p%5B%5D=facets.brand%255B%255D%3DHealthIQ&p%5B%5D=facets.brand%255B%255D%3DGentle%2BE%2BKart&p%5B%5D=facets.brand%255B%255D%3DOneRetail'
                }
              ],
              [
                {
                  title: 'Grocery(OnlyinSelectCities)',
                  url: '/grocery-supermart-store?marketplace=GROCERY',
                  type: 'heading'
                },
                {
                  title: 'Music',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'MusicalInstruments',
                  url: '/musical-instruments-store'
                },
                {
                  title: 'Music',
                  url: '/music/pr?sid=p2c&marketplace=FLIPKART'
                },
                {
                  title: 'Movies&Tvshows',
                  url: '/movies-store'
                },
                {
                  title: 'Gaming',
                  url: '',
                  type: 'heading'
                },
                {
                  title: 'GamingConsoles',
                  url: '/gaming/gaming-consoles/pr?sid=4rr,x1m&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Gaming%20Consoles'
                },
                {
                  title: 'GamingAccessories',
                  url: '/gaming/gaming-accessories/pr?sid=4rr,km5&otracker=categorytree&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Gaming%20Accessories'
                },
                {
                  title: 'PS4Games',
                  url: '/games/ps4/pr?p%5B%5D=sort%3Dpopularity&sid=4rr%2Ctg9%2Cweu&pincode=560068&filterNone=true&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_PS4%20Games'
                },
                {
                  title: 'SmartGlasses(VR)',
                  url: '/wearable-smart-devices/smart-glasses/pr?sid=ajy,tcy&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Smart%20Glasses(VR)'
                }
              ]
            ]
          }
        ]
      },
      // Grocery: {
      //   title: 'Grocery',
      //   class: 'link-Grocery',
      //   url: '/grocery-supermart-store?marketplace=GROCERY'
      // },
      // Flights: {
      //   title: 'Flights',
      //   class: 'link-flight',
      //   url: '/travel/flights'
      // },
      // 'offer-zone': {
      //   title: 'OfferZone',
      //   class: 'link-offer-zone',
      //   url: '/offers-store'
      // }
    }
  ]
};

export default menu;

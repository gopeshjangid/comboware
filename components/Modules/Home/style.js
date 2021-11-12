import { makeStyles } from "@material-ui/core";
// import { BorderVerticalRounded } from "@material-ui/icons";
import EngineeroBg from "assets/img/engineero-maintenance-bg.png";
const color = '#5e82c4d9';
export default makeStyles((theme) => ({
    firstBox: {
        backgroundColor: '#1853F9',
    },
    firstLeftBox: {
        width: '65%',
        marginLeft: '20%',
        paddingRight : 30
    },
    smallImgBox : {
        width: '90%',
        margin : '0 auto',
        textAlign  :'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'auto',
            padding: '20px',
            'padding-right': '300px'
          },
    },
    contentBox : {
        width: '90%',
        margin : '0 auto',
        textAlign  :'left',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'auto',
            padding: '20px',
            'padding-right': '300px'
          },
    },
    firstLeftBoxHeading: {
        color: '#fff',
        fontSize: '75px',
        fontWeight: 'bold'
    },
    banenrHeading : {
        color: color,
        fontSize: '55px',
        fontWeight: '700',
        textAlign : 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
          },
    },
    banenrHeadingBlack : {
        color: '#fff',
        fontSize: '41px',
        fontWeight: '600',
        textAlign : 'left',
        'text-transform': 'uppercase',
        [theme.breakpoints.down('sm')]: {
            'font-size': '17px !important',
            height: '36px !important',
            width: '100% !important',
          },
    },
    customerButton : {
        width: '200px !important',
        background: '#7d9de0 !important',
        'margin-top': '20px',
        color: 'white !important',
        'font-weight': 400,
        'font-size': '14px',
        border: '2px solid #7d9de0 !important',
        borderRadius : '0 !important',
        height: '53px !important',
        marginTop :20,
        textTransform : 'none',
        '&:hover' : {
            background : '#cbd4d3 !important',
            border : 'none !important',
            color : 'black !important',
        },
        [theme.breakpoints.down('sm')]: {
            width: '123px !important',
            'font-size': '8px !important',
            height: '30px !important',
            'line-height': '1px'
          },
    },
    bannerViewMore : {
        width: '200px !important',
        background: '#11161f !important',
        'margin-top': '20px',
        color: 'white !important',
        'font-weight': 400,
        'font-size': '14px !important',
        border: '2px solid #7d9de0 !important',
        borderRadius : '0 !important',
        height: '53px !important',
        marginTop :20,
        textTransform : 'none',
        '&:hover' : {
            background : '#cbd4d3 !important',
            border : 'none !important',
            color : 'black !important',
        },
        [theme.breakpoints.down('sm')]: {
            'font-size': '11px !important',
            'line-height': '1px',
            height: '36px !important',
            width: '106px !important',
          },
    },
    viewMore : {
        width: '200px !important',
        background: '#11161f !important',
        'margin-top': '20px',
        color: 'white !important',
        'font-weight': 400,
        'font-size': '14px',
        border: '2px solid #7d9de0 !important',
        borderRadius : '0 !important',
        height: '53px !important',
        marginTop :20,
        textTransform : 'none',
        '&:hover' : {
            background : '#cbd4d3 !important',
            border : 'none !important',
            color : 'black !important',
        },
        [theme.breakpoints.down('sm')]: {
            'font-size': '8px !important',
            height: '36px !important',
            width: '121px !important',
            textTransform : 'none',
            'line-height': '1px'
          },
    },
    banenrSubtitle : {
        color: color,
        fontSize: '25px',
        fontWeight: '300'
    },
    bannerDesc : {
        color : '#161433',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px',
          width : '57%'
        },
      },
      bannerCustomerService : {
        color : '#fff',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '17px',
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
      },
    bannerSubHeading : {
      color : '#161433',
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '17px',
      textAlign: 'justify',
      [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
      },
    },
    secondBox: {
        backgroundColor: 'white',
    },
    bannerBox: {
        width : '100%',
        margin : '0 auto',
        background : 'white',
        
    },
    bannerContentBox : {
        width : '100%',
        margin : '0 auto',
        background : 'white',
        height : '335px',
        padding : 20,
        paddingTop : 0,
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
            height : '200px',
            paddingTop: 20
          },
    },
    thirdBox: {
        backgroundColor: '#E5E5E5',
    },
    bannerImage: {
        margin: '0px 0',
        [theme.breakpoints.down('sm')]: {
             width: '55% !important',
            'height': '210px',
            'margin-left': '2%'
        },
    },
    firstImage: {
        margin: '50px 0'
    },
    firstBoxImage: {
        textAlign: "left"
    },
    firstLeftBoxDetail: {
        color: 'white', fontSize: '12px'
    },
    marginTop10: {
        marginTop: '10px'
    },
    midHeading: {
        fontWeight: 'bold', fontSize: '18px', marginTop: '5%'
    },
    bannerImageBox: {
        [theme.breakpoints.down('sm')]: {
            width  :'33%'
       },
        height: '75px', width: '170px', backgroundColor: '#FFFFFF', boxShadow: '0px 20px 60px rgba(81, 121, 254, 0.1)', padding: '10px 10px'
    },
    bannerImage1: {
        marginLeft: '20px', marginTop: '10px'
    },
    bannerImageContainer: {
        marginTop: '10px', justifyContent: 'space-evenly', width: '80%',
        [theme.breakpoints.down('sm')]: {
            'padding-right': '268px',
            'padding-left': '0px',
            marginTop :20
       },
    },
    bannerImage2: {
        marginLeft: '20px', marginTop: '25px'
    },
    bannerImage3: {
        marginLeft: '55px', marginTop: '10px'
    },
    boxHeading1: {
        width: '50%', marginLeft: '20%'
    },
    boxHeading2: {
        color: '#5179FE', fontSize: '10px', fontWeight: 'bold'
    },
    boxHeading3: {
        color: '#5179FE', fontSize: '40px', fontWeight: 'bold', textTransform: 'uppercase'
    },
    fontSize12: {
        fontSize: '12px'
    },
    backgroundColorPeach: {
        backgroundColor: '#fff',
        [theme.breakpoints.up('sm')]: {
            marginTop : 40,
            marginBottom : 40
          },
    },
    imageLeftThird: {
        textAlign: 'center'
    },
    forthBoxDetail1: {
        color: '#F1619B', fontSize: '10px', fontWeight: 'bold'
    },
    forthBoxDetail2: {
        color: '#F1619B', fontSize: '40px', fontWeight: 'bold'
    },
    projectsContainer: {
        margin: '30px 0', justifyContent: 'space-evenly', width: '70%', color: 'white'
    },
    marginTop5: {
        marginTop: '5%'
    },
    avatar: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)'
    },
    contactImage: {
        backgroundColor: '#1853F9',
        padding: '6px',
        borderRadius: '10px'
    },
    socialMediaColor: {
        backgroundColor: 'white',
        padding: '6px',
        borderRadius: '10px'
    },
    contactInput: {
        border: 'none',
        borderBottom: '2px solid white',
        backgroundColor: '#1853F9',
        color: 'white',
        width: '100%',
        height: '40px',
        // padding: '10px',
        "&::placeholder": {
            color: "white"
        },
    },
    imageBox : {
        [theme.breakpoints.down('sm')]: {
            'padding-right': '268px',
            'padding-left': '0px',
            marginTop :20
       },
      
    },
    performanceImg : {
        padding : 10,
        [theme.breakpoints.down('sm')]: {
            'padding-right': '268px',
            'padding-left': '0px',
       },
    },
    homeBoxImg : {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            'margin-right': '10px'
       },
    },
    paygImg : {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            'margin-right': '10px'
       },
    },
    callTitle: {
        [theme.breakpoints.down('sm')]: {
             fontSize :25
       },
    },
    callMsg: {
        [theme.breakpoints.down('sm')]: {
             fontSize :17
       },
    },
    partnerHeading : {
        [theme.breakpoints.down('sm')]: {
            'margin-right': '261px',
            'font-size': '15px'
      },
    },
    videoContainer : {
        position : 'relative',
    },
    videoImgBox : {
        
    },
    caption : {
        'color': 'black',
        'text-transform': 'none'
    },
    clientImg : {
        width : '80%'
    },
    clientImgBox : {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center'
    } ,
    customerServiceBackground : {
        backgroundColor: '#2b0d5b',
        marginTop :20
    },
    peachBackground : {
        backgroundImage : `url(${EngineeroBg})`
    } 
}));

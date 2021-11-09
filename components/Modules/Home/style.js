import { makeStyles } from "@material-ui/core";
// import { BorderVerticalRounded } from "@material-ui/icons";

export default makeStyles(() => ({
    firstBox: {
        backgroundColor: '#1853F9',
    },
    firstLeftBox: {
        width: '65%',
        marginLeft: '20%',
        paddingRight : 30
    },
    firstLeftBoxHeading: {
        color: '#fff',
        fontSize: '75px',
        fontWeight: 'bold'
    },
    banenrHeading : {
        color: '#3d81fd',
        fontSize: '55px',
        fontWeight: 'bold'
    },
    bannerSubHeading : {
     color : '#464E5F',
     fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '11px',
      textAlign: 'justify'
    },
    secondBox: {
        backgroundColor: 'white',
    },
    thirdBox: {
        backgroundColor: '#E5E5E5',
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
        height: '75px', width: '170px', backgroundColor: '#FFFFFF', boxShadow: '0px 20px 60px rgba(81, 121, 254, 0.1)', padding: '10px 10px'
    },
    bannerImage1: {
        marginLeft: '20px', marginTop: '10px'
    },
    bannerImageContainer: {
        marginTop: '10px', justifyContent: 'space-evenly', width: '80%'
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
        backgroundColor: '#F6F8FF'
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
    }
}));

import { Metrics, Colors, Images } from './';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  flexBox: {
    display: 'flex'
  },

  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  flex4: {
    flex: 4
  },
  flex5: {
    flex: 5
  },
  flex6: {
    flex: 6
  },
  flex7: {
    flex: 7
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  positionRelative: {
    position: 'relative'
  },
  // Margins
  // Margin TOP
  mTop0: {
    marginTop: 0
  },
  lHeight20: {
    lineHeight: 20
  },
  lHeight22: {
    lineHeight: 22
  },
  lHeight10: {
    lineHeight: 15
  },
  mTop5: {
    marginTop: 5
  },
  mTop10: {
    marginTop: 10
  },
  mTop15: {
    marginTop: 15
  },
  mTop20: {
    marginTop: 20
  },
  mTop25: {
    marginTop: 25
  },
  mTop30: {
    marginTop: 30
  },
  mTop35: {
    marginTop: 35
  },
  mTop40: {
    marginTop: 40
  },
  mTopBase: {
    marginTop: Metrics.baseMargin
  },

  // Margin BOTTOM
  mBottom0: {
    marginBottom: 0
  },
  mBottom5: {
    marginBottom: 5
  },
  mBottom10: {
    marginBottom: 10
  },
  mBottom15: {
    marginBottom: 15
  },
  mBottom20: {
    marginBottom: 20
  },
  mBottom25: {
    marginBottom: 25
  },
  mBottom30: {
    marginBottom: 30
  },

  mBottom35: {
    marginBottom: 35
  },

  mBottom40: {
    marginBottom: 40
  },
  mBottom45: {
    marginBottom: 45
  },
  mBottom50: {
    marginBottom: 50
  },
  mBottomBase: {
    marginBottom: Metrics.baseMargin
  },
  mBottomListBottom: { marginBottom: Metrics.listBottomPadding },

  // Margin RIGHT
  mRight0: {
    marginRight: 0
  },
  mRight5: {
    marginRight: 5
  },
  mRight10: {
    marginRight: 10
  },

  height200: {
    height: 200
  },
  mRight15: {
    marginRight: 15
  },
  mRight20: {
    marginRight: 20
  },
  mRight25: {
    marginRight: 25
  },
  mRight30: {
    marginRight: 30
  },
  mRightBase: {
    marginRight: Metrics.baseMargin
  },

  // Margin LEFT
  mLeft0: {
    marginLeft: 0
  },
  mLeft5: {
    marginLeft: 5
  },
  mLeft10: {
    marginLeft: 10
  },
  mLeft15: {
    marginLeft: 15
  },
  mLeft20: {
    marginLeft: 20
  },
  mLeft25: {
    marginLeft: 25
  },
  mLeft30: {
    marginLeft: 30
  },
  mLeftBase: {
    marginLeft: Metrics.baseMargin
  },
  // Margin ALL SIDES
  margin5: {
    margin: 5
  },
  margin10: {
    margin: 10
  },
  margin15: {
    margin: 15
  },
  margin20: {
    margin: 20
  },
  margin25: {
    margin: 25
  },
  margin30: {
    margin: 30
  },
  marginHorizontalBase: {
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },
  marginHorizontalsmall: {
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },

  marginVerticalBase: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },

  // Padding
  // padding TOP
  pTop0: {
    paddingTop: 0
  },
  pTop5: {
    paddingTop: 5
  },
  pTop10: {
    paddingTop: 10
  },
  pTop15: {
    paddingTop: 15
  },
  pTop20: {
    paddingTop: 20
  },
  pTop25: {
    paddingTop: 25
  },
  pTop30: {
    paddingTop: 30
  },
  pTopBase: {
    paddingTop: Metrics.baseMargin
  },
  // padding BOTTOM
  pBottom0: {
    paddingBottom: 0
  },
  pBottom5: {
    paddingBottom: 5
  },
  pBottom10: {
    paddingBottom: 10
  },
  pBottom15: {
    paddingBottom: 15
  },
  pBottom20: {
    paddingBottom: 20
  },
  pBottom25: {
    paddingBottom: 25
  },
  pBottom30: {
    paddingBottom: 30
  },
  pBottom100: {
    paddingBottom: 100
  },
  pTopBottom: {
    paddingTop: Metrics.baseMargin
  },
  pBottomBase: {
    paddingBottom: Metrics.baseMargin
  },

  pBottomListBottom: { paddingBottom: Metrics.listBottomPadding },
  pBottomListBottomWithTabbar: {
    paddingBottom: Metrics.listBottomPadding + Metrics.tabBarHeight
  },
  // padding RIGHT
  pRight0: {
    paddingRight: 0
  },
  pRight5: {
    paddingRight: 5
  },
  pRight10: {
    paddingRight: 10
  },
  pRight15: {
    paddingRight: 15
  },
  pRight20: {
    paddingRight: 20
  },
  pRight25: {
    paddingRight: 25
  },
  pRight30: {
    paddingRight: 30
  },
  pRightBase: {
    paddingRight: Metrics.baseMargin
  },
  // padding LEFT
  pLeft0: {
    paddingLeft: 0
  },
  pLeft5: {
    paddingLeft: 5
  },
  pLeft10: {
    paddingLeft: 10
  },
  pLeft15: {
    paddingLeft: 15
  },
  pLeft20: {
    paddingLeft: 20
  },
  pLeft25: {
    paddingLeft: 25
  },
  pLeft30: {
    paddingLeft: 30
  },
  pLeftBase: {
    paddingLeft: Metrics.baseMargin
  },
  // padding ALL SIDES
  padding0: {
    padding: 0
  },
  padding5: {
    padding: 5
  },
  padding10: {
    padding: 10
  },
  padding15: {
    padding: 15
  },
  padding20: {
    padding: 20
  },
  padding25: {
    padding: 25
  },
  padding30: {
    padding: 30
  },

  fontItalic: {
    fontStyle: 'italic'
  },

  fontBold: {
    fontWeight: 'bold'
  },
  paddingHorizontalBase: {
    paddingRight: Metrics.baseMargin,
    paddingLeft: Metrics.baseMargin
  },

  paddingVerticalBase: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },

  basePadding: {
    padding: Metrics.baseMargin
  },
  baseMargin: {
    margin: Metrics.baseMargin
  },
  whiteButton1: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    color: Colors.bgGreen,
    border: 0,
    minHeight: 40,
    padding: '8px 16px',
    fontSize: 16,
    fontWeight: 600
  },
  textAlignLeft: {
    textAlign: 'left'
  },
  tabHeadings: {
    fontSize: '16px',
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#3e3e3e'
  },
  cardBoxButtonRow: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  strong: {
    fontWeight: '500'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  h3Style1: {
    fontSize: '16px',
    fontWeight: '600',
    color: Colors.greyish
  },
  h4Style1: {
    fontSize: '14px',
    fontWeight: '600',
    color: Colors.apGrey,
    lineHeight: '20px'
  },
  h4Style2: {
    fontSize: '14px',
    color: Colors.greyish
  },
  lineHeight22: {
    lineHeight: '22px'
  },
  font14: {
    fontSize: '14px'
  },
  linkStyle1: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  pointer: {
    cursor: 'pointer'
  },
  //landing global
  container: {
    maxWidth: '1140px !important',
    margin: '0 auto',
    marginBottom: '40px'
  },
  headingBig: {
    fontSize: '4em !important',
    lineHeight: '1.3em',
    fontWeight: '700',
    '@media (max-width: 1280px)': {
      fontSize: '3em '
    },
    '@media (max-width: 992px)': {
      fontSize: '1.2em '
    }
  },

  headingOne: {
    fontSize: '1.9em !important',
    fontWeight: '500',
    color: `${Colors.bgGreen}`,
    lineHeight: '1.3em',
    '@media (max-width: 992px)': {
      fontSize: '1.875em !important'
    }
  },
  headingTwo: {
    fontSize: '2em',
    lineHeight: '1.3em',
    fontWeight: '500',
    color: `${Colors.greyish}`,
    '@media (max-width: 992px)': {
      fontSize: '1.429em'
    }
  },
  headingThree: {
    fontSize: '1.75em',
    fontWeight: '500',
    lineHeight: '1.3em',
    color: `${Colors.greyish}`,
    '@media (max-width: 992px)': {
      fontSize: '1.375em'
    }
  },
  headingFour: {
    fontSize: '2.750em',
    fontWeight: '600',
    color: `${Colors.white}`,
    lineHeight: '1.3em'
  },
  headingFive: {
    fontSize: '2.813em',
    color: `${Colors.bgGreen} `
  },
  headingT22: {
    fontSize: '1.375em',
    '@media (max-width: 768px)': {
      fontSize: '1em'
    }
  },

  heading22: {
    fontSize: '1.9em'
  },
  heading17: {
    fontSize: '1.6em'
    /* "@media (max-width: 1280px)": {
      fontSize: "1.3em"
    } */
  },
  heading41: {
    fontSize: '2.563em',
    lineHeight: '1.3em',
    color: `${Colors.greyish}`,
    '@media (max-width: 768px)': {
      fontSize: '1.938em'
    }
  },
  heading20: {
    fontSize: '1.50em',
    lineHeight: '1.3em',
    color: `${Colors.mineShafta}`,
    '@media (max-width: 768px)': {
      fontSize: '1em'
    }
  },
  heading34: {
    fontSize: '2.125em',
    '@media (max-width: 767px)': {
      fontSize: '1.125em'
    }
  },
  heading54: {
    fontSize: '3.375em',
    '@media (max-width: 1024px)': {
      fontSize: '2.625em'
    },
    '@media (max-width: 767px)': {
      fontSize: '2.125em'
    }
  },
  heading24: {
    fontSize: '1.500em',
    '@media (max-width: 992px)': {
      fontSize: '1.200em'
    }
  },
  heading16: {
    fontSize: '1.000em'
  },
  heading32s: {
    fontSize: '2.000em'
  },
  peraOne: {
    fontSize: '1.125em',
    lineHeight: ' ',
    color: `${Colors.greyish}`,
    '@media (max-width: 992px)': {
      fontSize: ' 0.9em'
    }
  },
  peraTwo: {
    fontSize: '0.875em',
    lineHeight: ' '
  },
  pera12: {
    fontSize: '0.750em'
  },
  peraThree: {
    fontSize: '0.875em',
    lineHeight: ' ',
    fontWeight: '600'
  },
  pera18: {
    fontSize: '1.125em',
    lineHeight: '1.5'
  },
  pera22: {
    fontSize: '1.357em',
    lineHeight: '1.5',
    color: `${Colors.greyish}`
  },
  serviceImg: {
    width: '100px',
    height: '100px',
    '@media (max-width: 992px)': {
      marginTop: '60px'
    }
  },
  fullWidth: {
    width: '100%'
  },

  bownColor: {
    color: `${Colors.greyish}`
  },
  whiteColor: {
    color: `${Colors.white} !important`
  },
  weight1: {
    fontWeight: '100 !important'
  },
  weight2: {
    fontWeight: '200 !important'
  },
  weight3: {
    fontWeight: '300 !important'
  },
  weight4: {
    fontWeight: '400 !important'
  },
  weight5: {
    fontWeight: '500 !important'
  },
  weight6: {
    fontWeight: '600 !important'
  },
  weight7: {
    fontWeight: '700 !important'
  },
  weight8: {
    fontWeight: '800 !important'
  },
  //book confirm
  alertText: {
    paddingLeft: '80px',
    paddingRight: '20px',
    position: 'relative',
    fontWeight: '800',
    fontSize: '1.000em',
    lineHeight: '1.3em !important',
    ':before': {
      content: '""',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      height: '36px',
      width: '40px',
      display: 'block',
      position: 'absolute',
      left: '18px',
      top: '0',
      bottom: '0',
      margin: 'auto'
    }
  },
  GreenBtn: {
    backgroundColor: `${Colors.bgGreen} `,
    padding: '15px 30px',
    borderRadius: '5px',
    border: 'none',
    color: `${Colors.white} `,
    margin: '10px 10px  '
  },
  cancelBtn: {
    backgroundColor: 'transparent',
    padding: '15px 30px',
    borderRadius: '5px',
    border: 'none',
    color: `${Colors.brown} `,
    margin: '10px 10px',
    textDecoration: 'underline'
  },
  darkGreenColor: {
    color: Colors.kgMidGreen
  },
  lineHeight1_5: {
    lineHeight: '1.5em  !important'
  },
  lineHeight14: {
    lineHeight: '1.4em !important'
  },
  lineHeight1_2: {
    lineHeight: '1.2em !important'
  },
  lineHeight1_3: {
    lineHeight: '1.3em !important'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  brownButton: {
    backgroundColor: `${Colors.bgBrown} `,
    color: `${Colors.white}`,
    padding: '17px 30px !important',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600'
  },
  greyishColor: {
    color: `${Colors.greyish} !important`
  },
  borderDashed: {
    ':before': {
      content: '""',
      display: 'block',
      width: '3px',
      position: 'absolute',
      left: '16px',
      top: '-33px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '28px'
    },
    margin: '10px 0px 35px',
    position: 'relative',
    ':first-child': {
      ':before': {
        content: '""',
        display: 'none'
      }
    }
  },

  pxy_12: {
    '@media (max-width: 767px)': {
      paddingLeft: '12px',
      paddingRight: '12px',
      boxSizing: 'border-box'
    }
  },
  colReverse: {
    '@media (max-width: 767px)': {
      flexDirection: 'column-reverse !important'
    }
  },
  formError: {
    color: 'red',
    fontSize: '0.8em',
    marginTop: '5px',
    display: 'block'
  },
  heading30: {
    fontSize: '1.738em',
    '@media (max-width:1024px)': {
      fontSize: '1.2em'
    }
  },
  heading31: {
    fontSize: '1.938em',
    color: Colors.zuccini,
    '@media (max-width:1024px)': {
      fontSize: '1.2em'
    }
  },
  headings31: {
    fontSize: '1.938em',
    color: '#085032'
  },
  buttonGreen: {
    borderRadius: '4px',
    backgroundColor: Colors.bgGreen,
    fontSize: '16px',
    color: Colors.white,
    height: '40px',
    width: '100px',
    border: 'none'
  },
  mainWrap: {
    padding: '40px 40px',
    backgroundColor: Colors.white,
    minHeight: 'calc(100vh - 134px)',
    boxSizing: 'border-box'
  },
  dashboardHeaderWrap: {
    borderBottom: `1px solid  ${Colors.altoSolid}`,
    position: 'fixed',
    width: '100%',
    paddingRight: '85px !important',
    left: '85px',
    zIndex: 9
  },
  hasTabsSpace: {
    marginTop: '70px',
    '@media (max-width: 1024px)': {
      marginTop: 0
    }
  },
  noTabsSpace: {
    marginTop: '91px',
    minHeight: 'calc(100vh - 90px) !important'
  },
  noUpperSpace: {
    marginTop: '0',
    minHeight: '100vh !important',
    padding: '35px 50px'
  },
  bgWhite: {
    backgroundColor: Colors.white
  },
  font12Size: {
    fontSize: '13px'
  },
  font14Size: {
    fontSize: '14px'
  },
  font18Size: {
    fontSize: '18px'
  },
  boxWrapper: {
    borderRadius: '4px',
    boxShadow: ' 0 2px 12px 0 rgba(0, 0, 0, 0.11)',
    backgroundColor: Colors.white,
    '@media (max-width: 1280px)': {
      padding: '12px !important'
    }
  },
  customCol7: {
    width: '58%',
    marginRight: '1%'
  },
  customCol5: {
    width: '41%'
  },
  journeyBox: {
    backgroundColor: Colors.white,
    borderRadius: '4px',
    border: `1px solid ${Colors.lightGray}`,
    overflow: 'hidden',
    height: '100%'
  },
  blackColor: {
    color: Colors.black
  },
  decorationNone: {
    textDecoration: 'none'
  },
  buttonGreen2: {
    borderRadius: '4px',
    backgroundColor: Colors.bgGreen,
    fontSize: '16px',
    color: Colors.white,
    border: 'none',
    padding: '12px 25px',
    display: 'inline-block',
    width: '130px',
    marginBottom: '15px',
    ':hover': {
      textDecoration: 'none'
    }
  },
  btnDesgin: {
    position: 'relative',
    width: '120px',
    height: '38px',
    borderRadius: '4px',
    backgroundColor: Colors.vikings,
    fontSize: ' 13px',
    color: Colors.white,
    border: 'none',
    fontWeight: '700',
    padding: 0,
    cursor: 'pointer'
  },
  bittersweetColor: {
    backgroundColor: Colors.bittersweet
  },
  bgMineShaft: {
    backgroundColor: Colors.mineShaft
  },
  bgGreen: {
    backgroundColor: Colors.bgGreen
  },
  ellipsisText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  heading32: {
    fontSize: '32px',
    color: Colors.zuccini
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  smText: {
    fontSize: '14px',
    color: Colors.codGray
  },
  colorGrey: {
    color: `${Colors.boulder} !important`
  },
  dashboardHeaderInner: {
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 120px 0 40px',
    '@media (max-width: 1024px)': {
      position: 'static',
      width: '100%',
      padding: '0 20px 0 20px'
    }
  },
  minHeight92: {
    minHeight: '92vh'
  },
  wordBreak: {
    wordBreak: 'break-all'
  },
  textColorVikings: {
    color: Colors.vikings
  },
  fontSize13: {
    fontSize: '13px'
  },
  fontSize10: {
    fontSize: '10px'
  },
  fontSize11: {
    fontSize: '11px'
  },
  fontSize12: {
    fontSize: '12px'
  },
  fontSize14: {
    fontSize: '14px'
  },
  fontSize16: {
    fontSize: '16px'
  },
  fontSize18: {
    fontSize: '18px'
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  // Zain starting from here

  heading60: {
    color: Colors.vikings,
    fontWeight: '300',
    fontSize: '13px',
    textTransform: 'uppercase'
  },
  whiteHeading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: '13px'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  para1: {
    lineHeight: '25px',
    fontSize: '13px'
  },
  noSelection: {
    userSelect: 'none',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    khtmlUserSelect: 'none',
    msUserSelect: 'none'
  },
  heading61: {
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '16px'
  }
});

export default styles;

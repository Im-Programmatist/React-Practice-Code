import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHomepage = styled('div')({
  'background-color': 'rgba(255, 255, 255, 1)',
  width: '100%',
  height: '930px',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-shrink': '0',
  'border-color': 'transparent',
  position: 'relative',
  overflow: 'hidden',
})

 

const HeroBanner = styled('img')({
  width: '1920px',
  height: '850px',
  'border-color': 'transparent',
  position: 'absolute',
  top: '80px',
  left: '0px',
})

 

const Navbar = styled('div')({
  'background-color': 'rgba(255, 248, 244, 1)',
  width: '1920px',
  display: 'flex',
  'justify-content': 'space-between',
  'align-items': 'center',
  padding: '10px 300px',
  'flex-shrink': '0',
  'border-color': 'transparent',
  position: 'absolute',
  top: '0px',
  left: '0px',
})

 

const Frame4 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Frame3 = styled('div')({
  display: 'flex',
  'align-items': 'flex-start',
  padding: '10px',
  'margin-right': '55px',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Vector = styled('img')({
  width: '40px',
  height: '40px',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Menus = styled('div')({
  display: 'flex',
  'align-items': 'center',
  padding: '10px',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Text = styled('span')({
  color: 'rgba(0, 0, 0, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '30px',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 16,
  'font-stretch': 'normal',
  'font-style': 'Medium',
  'font-weight': 500,
  'text-decoration': 'none',
})

 

const Text02 = styled('span')({
  color: 'rgba(0, 0, 0, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '30px',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 16,
  'font-stretch': 'normal',
  'font-style': 'Medium',
  'font-weight': 500,
  'text-decoration': 'none',
})

 

const Text04 = styled('span')({
  color: 'rgba(0, 0, 0, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '30px',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 16,
  'font-stretch': 'normal',
  'font-style': 'Medium',
  'font-weight': 500,
  'text-decoration': 'none',
})

 

const Text06 = styled('span')({
  color: 'rgba(0, 0, 0, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '0',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 16,
  'font-stretch': 'normal',
  'font-style': 'Medium',
  'font-weight': 500,
  'text-decoration': 'none',
})

 

const Buttons = styled('button')({
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': 'transparent',
  position: 'relative',
})

 

const ButtnSignin = styled('div')({
  'background-color': 'rgba(245, 134, 52, 1)',
  display: 'flex',
  'align-items': 'flex-start',
  padding: '10px',
  'margin-right': '20px',
  'border-radius': '15px',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Text08 = styled('span')({
  color: 'rgba(255, 255, 255, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '0',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 16,
  'font-stretch': 'normal',
  'font-style': 'Medium',
  'font-weight': 500,
  'text-decoration': 'none',
})

 

const ButtnSignup = styled('div')({
  display: 'flex',
  'align-items': 'flex-start',
  padding: '10px',
  'border-radius': '15px',
  'border-width': '1px',
  'border-color': 'rgba(217, 217, 217, 1)',
  'border-style': 'solid',
  position: 'relative',
})

 

const Text10 = styled('span')({
  color: 'rgba(245, 134, 52, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '0',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 16,
  'font-stretch': 'normal',
  'font-style': 'Medium',
  'font-weight': 500,
  'text-decoration': 'none',
})

 

const Bannercontent = styled('div')({
  width: '967px',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'flex-start',
  'border-color': 'transparent',
  position: 'absolute',
  top: '349px',
  left: '300px',
})

 

const Herobannercontent = styled('div')({
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'flex-start',
  'margin-bottom': '74px',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Text12 = styled('span')({
  color: 'rgba(255, 255, 255, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '0',
  'margin-bottom': '64px',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 60,
  'font-stretch': 'normal',
  'font-style': 'ExtraBold',
  'font-weight': 800,
  'text-decoration': 'none',
})

 

const Text14 = styled('span')({
  color: 'rgba(255, 255, 255, 1)',
  width: '967px',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '0',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 30,
  'font-stretch': 'normal',
  'font-style': 'Regular',
  'font-weight': 400,
  'text-decoration': 'none',
})

 

const Buttngetnow = styled('div')({
  'background-color': 'rgba(255, 255, 255, 1)',
  display: 'flex',
  'align-items': 'flex-start',
  padding: '20px 40px',
  'border-radius': '20px',
  'border-color': 'transparent',
  position: 'relative',
})

 

const Text16 = styled('span')({
  color: 'rgba(0, 0, 0, 1)',
  height: 'auto',
  'text-align': 'left',
  'line-height': 'normal',
  'margin-right': '0',
  'margin-bottom': '0',
  'align-self': 'auto',
  'font-family': 'Archivo',
  'font-size': 22,
  'font-stretch': 'normal',
  'font-style': 'Regular',
  'font-weight': 400,
  'text-decoration': 'none',
})

class ClssComProps extends Component {
  render() {
    return (
      <>
        {/* <span>{this.props.title}</span>
        <div>{this.props.children}</div> */}
        <div>
          <StyledHomepage>
          <HeroBanner
                    src="/playground_assets/herobanner2110-fgcg-900h.png"
                    alt="HeroBanner2110"
                  />
          <Navbar>
          <Frame4>
          <Frame3>
          <Vector
                          src="/playground_assets/vector2181-elhu-200h.png"
                          alt="Vector2181"
                        />
          </Frame3>
          <Menus>
          <Text>
          <span>Home</span>
          </Text>
          <Text02>
          <span>About</span>
          </Text02>
          <Text04>
          <span>Service</span>
          </Text04>
          <Text06>
          <span>Contact</span>
          </Text06>
          </Menus>
          </Frame4>
          <Buttons>
          <ButtnSignin>
          <Text08>
          <span>Sign in</span>
          </Text08>
          </ButtnSignin>
          <ButtnSignup>
          <Text10>
          <span>Sign up</span>
          </Text10>
          </ButtnSignup>
          </Buttons>
          </Navbar>
          <Bannercontent>
          <Herobannercontent>
          <Text12>
          <span>Welcome!</span>
          </Text12>
          <Text14>
          <span>
                          Lorem ipsum dolor sit amet consectetur. Molestie eget mi aenean
                          a tortor purus eu mi diam. Ornare donec enim orci adipiscing
                          libero facilisi libero quis hac. Dolor bibendum leo elit elit.
          </span>
          </Text14>
          </Herobannercontent>
          <Buttngetnow>
          <Text16>
          <span>Get Now</span>
          </Text16>
          </Buttngetnow>
          </Bannercontent>
          </StyledHomepage>
        </div>
        </>
    )
  }
}

export default ClssComProps
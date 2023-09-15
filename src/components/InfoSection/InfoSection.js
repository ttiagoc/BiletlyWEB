import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import '../../index.css'
import arrowDown from '../../images/arrowDown.png'


 const InfoSection = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    description2,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    color,
    showButton,
    showArrow,
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg} style={{backgroundColor:color}} >
                <Container >
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description} <br /> {description2}</Subtitle>
                            {showButton ? (
                                <Link to='/sign-up'>                                
                                    <Button big fontBig primary={primary} className='boton'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            ): (
                                <></>
                            )}                            
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
                {showArrow ? (
                    <div style={{justifyContent:'center', display:'flex', paddingTop:15, bottom:0}} >
                    <img src={arrowDown} alt="arrowDown" style={{height:'75px' , width:"75px"}}/>
                </div>
                ): (
                    <></>
                )}
                
               
            </InfoSec>
            
        </>
    )
}

export default InfoSection;
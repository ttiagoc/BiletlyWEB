import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

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
    color
}) => 

{
    const ButtonOn = () => { if (buttonLabel !== null || buttonLabel !== undefined) {
        console.log(buttonLabel)
        return <Link to='/sign-up'><Button big fontBig primary={primary} > 
        {buttonLabel}
        </Button>
        </Link>
    }
    }
    return (
        <>
            <InfoSec lightBg={lightBg} style={{backgroundColor:color}}>
                <Container >
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description} <br /> {description2}</Subtitle>
                            
                              
                             {ButtonOn()}
                            
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;
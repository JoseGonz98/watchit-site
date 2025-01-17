import React,{useRef,FC} from "react";
import {Landing} from "@components/landing"
import Footer from "@components/footer"
import Contributors from "@components/contributors"
import { CONTRIBUTIONS } from "@src/config/contributors"
import { CopyButton } from "@components/button/copy"
import IMG from "@assets/img";
import { Translation } from '@src/i18n'

import {
    Box,
    styled,
    BoxProps,
    Typography,
    TypographyProps
  } from '@mui/material'

const Dashboard:FC = (): JSX.Element => {
    let pdmRef = useRef(null);

    const copyCodeToClipboard=(ref:any)=>{
        ref.current.select();
        document.execCommand("copy")
    }

    return(
        <>
            <DashboardContainer>
                <Landing/>
                <Content>
                    <Section>
                            <HashesContainer>
                            <Title><Translation target="GLOBAL_PUBLIC_KEY"/></Title>
                            <HashOption>
                                <HashClipboard>
                                    <InputElement ref={pdmRef} value={process.env.REACT_APP_PDM_HASH} readOnly/>
                                    <CopyButton copy={()=>copyCodeToClipboard(pdmRef)}/>
                                </HashClipboard>
                            </HashOption>
                        </HashesContainer>
                    </Section>
                    <Section>
                      <Title><Translation target="GLOBAL_TITLE_WATCH_MOVIE"/></Title>
                      <Cite>
                      <Translation target="GLOBAL_ABOUT_PLATAFORM_MOVIE"/>
                      <br/><br/>
                      <Translation target="GLOBAL_ABOUT_PLATAFORM_MOVIE2"/>
                      <a
                          href="https://dev.to/geolffreym/watchit-2b88"> <Translation target="GLOBAL_READ_MORE"/></a>
                      </Cite>
                    </Section>
                    <SectionWhite>
                        <SectionContent>
                            <SubSection>
                                <ImageWrapper href="https://orbitdb.org/">
                                    <Image src={IMG.ImgOrbit}/>
                                </ImageWrapper>
                                <ImageWrapper href="https://ipfs.io/">
                                    <Image src={IMG.ImgIpfs}/>
                                </ImageWrapper>
                            </SubSection>
                            <SubSection>
                                <TextContent>
                                  <Translation target="GLOBAL_ABOUT_TEC_1"/><a href="https://awesome.ipfs.io/"> Awesome IPFS </a>
                                  <Translation target="GLOBAL_ABOUT_TEC_2"/><a href="https://github.com/orbitdb/awesome-orbitdb">Awesome OrbitDb. </a>
                                  <Translation target="GLOBAL_ABOUT_TEC_3"/>
                                  <a href="https://github.com/ZorrillosDev/watchit-desktop"> github </a>
                                  <Translation target="GLOBAL_ABOUT_TEC_4"/>
                                </TextContent>
                            </SubSection>
                        </SectionContent>
                    </SectionWhite>
                    <Section>
                        <Contributors data={CONTRIBUTIONS.contributors}/>
                    </Section>
                </Content>
                <Footer/>
            </DashboardContainer>
        </>
    )
}

export default Dashboard
const DashboardContainer = styled(Box)<BoxProps>(() => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#141518',
    overflow: 'hidden',
    
    '&, & *, :before, :after': {
      boxSizing: 'border-box'
    }
  }))
  
  
  const Content = styled(Box)<BoxProps>(() => ({
    width: '100%',
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  
  const HashesContainer = styled(Box)<BoxProps>(() => ({
    width: '100%',
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }))
  
  const HashOption = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    flexGrow: '1',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 7px 0 rgba(0,0,0,0.2), 0 5px 22px 0 rgba(0,0,0,0.19)',
    margin: '1rem',
    borderRadius: '1rem',
    width: '100% !important',
    padding: '1rem',
    
    '@media (max-width: 500px)': {
      width: '100%'
    }
  }))
  
  const HashClipboard = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: '1rem'
  }))
  
  const InputElement = styled('input')({
    fontSize: '1.1rem',
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    fontFamily: `'Nunito Sans',sans-serif`,
    margin: '1rem',
    padding: '0.5rem 4rem 0.5rem 0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid white',
    background: 'transparent',
    boxShadow: 'none !important',
    outline: 'none !important',
    cursor: 'text',
    width: '100%'
  })
  
  const Section = styled(Box)<BoxProps>(() => ({
    width: '60%',
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    '@media (max-width: 900px)' :{
      width: '90%',
      padding: '1rem 0'
    }
  }))
  
  const SectionContent = styled(Box)<BoxProps>(() => ({
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
   '@media (max-width: 900px)': {
      width: '90%'
    } 
  }))
  
  const SubSection = styled(Box)<BoxProps>(() => ({
    width: '50%',
    display:  'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    
    p:{
      minWidth: 'auto'
    },
    
    a:{
      color: '#e58e26',
      textDecoration: 'none'
    } 
  }))
  
  const SectionWhite = styled(Box)<BoxProps>(() => ({
    width: '100%',
    padding: '7rem 0',
    margin: '6rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    
    span:{
      color: '#444'
    },
    
    p:{
      color: '#555'
    },
    
   '@media (max-width: 900px)': {
      padding: '3rem 0'
    }  
  }))
  
 const Title = styled(Typography)<TypographyProps>(() => ({
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    fontFamily: `'Nunito Sans',sans-serif`,
    marginBottom: '2rem'
   }))
  
  const TextContent = styled(Typography)<TypographyProps>(() => ({
    width: '80%',
    minWidth: '36rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'justify',
    color: '#ddd',
    textTransform: 'none',
    fontFamily:  `'Nunito Sans',sans-serif`,
    
    '@media (max-width: 650px) ':{
      width: '90%',
      minWidth: 'auto',
      fontSize: '1rem'
    } 
}))
  
  const Cite = styled(Typography)<TypographyProps>(() => ({
    width:'80%',
    minWidth: '36rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'justify',
    color:'#ddd',
    textTransform: 'none',
    fontFamily:  `'Nunito Sans',sans-serif`,
  
    a :{
      color: '#e58e26',
      textDecoration: 'none'
    },
    
    '&:before': {
      color: '#fff',
      content: 'open-quote',
      fontSize: '4em',
      lineHeight: '0.1em',
      marginRight: '0.25em',
      verticalAlign: '-0.4em'
    },
    
    '&:after': {
      color: '#fff',
      content: 'close-quote',
      fontSize: '4em',
      lineHeight: '0.1em',
      marginLeft: '0.25em',
      verticalAlign: '-0.6em'
    },
    
    '@media (max-width: 650px)':{
      width: '90%',
      minWidth: 'auto',
      fontSize: '1rem',
    } 
}))

const ImageWrapper = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flexDirection: 'column'
})

const Image = styled('img')({
  width: 'auto',
  height: '6rem',
  margin: '1.5rem',
})

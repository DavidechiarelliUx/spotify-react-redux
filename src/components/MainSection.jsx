import MusicSection from "./MusicSection"
import TopBar from "./TopBar"
import {Container, Row} from "react-bootstrap"

const MainSection = () => {
    return(
        <>
        <Container>
                <Row>
                    <TopBar></TopBar>
                </Row>
                <Row>
                    <MusicSection></MusicSection>
                </Row>
        </Container>
        </>
    )
}

export default MainSection
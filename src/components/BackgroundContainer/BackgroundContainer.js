import bananaDesk from '../../images/background/bananaDesk.png';
import bananaTab from '../../images/background/bananaTab.png';
import vectorDesk from '../../images/background/vectorDesk.png';
import vectorTab from '../../images/background/vectorTab.png';
import leafsDesk from '../../images/background/leafsDesk.png';
import leafsTab from '../../images/background/leafsTab.png';
import leafsTabForm from '../../images/background/leafsTabForm.png';
import leafsDeskSideBar from '../../images/background/leafsDeskSideBar.png';
import leafsTabSideBar from '../../images/background/leafsTabSideBar.png';
import strawberryDesk from '../../images/background/strawberryDesk.png';
import strawberryTab from '../../images/background/strawberryTab.png';
import strawberryTabForm from '../../images/background/strawberryTabForm.png';
import { useAuth } from 'hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useResizeDetector } from 'react-resize-detector';
import {
  ImageContainer,
  VectorImg,
  BananaImg,
  StrawberryImg,
  StrawberryAuthImg,
  LeafsImg,
  LeafsAuthImg,
  LeafsSide,
  LeafsFoot,
} from './BackgroundContainer.styled';

const BackgroundContainer = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { width, ref } = useResizeDetector();
  const desktop = width >= 1280;

  const { pathname } = useLocation();
  const isMainPage = pathname === '/';

  const banana = desktop ? bananaDesk : bananaTab;
  const strawberry = desktop ? strawberryDesk : strawberryTab;
  const leafs = desktop ? leafsDesk : leafsTab;
  const vector = desktop ? vectorDesk : vectorTab;
  const strawberryAuth = desktop ? strawberryDesk : strawberryTabForm;
  const leafsAuth = desktop ? leafsDesk : leafsTabForm;

  return (
    <ImageContainer ref={ref} visible={isLoggedIn}>
      {isMainPage ? (
        <>
          <VectorImg
            src={vector}
            alt="grey background"
            visibleImg={!isLoggedIn}
          />

          <BananaImg src={banana} alt="banana" visibleImg={!isLoggedIn} />

          <StrawberryImg
            src={strawberry}
            alt="strawberry"
            visibleImg={!isLoggedIn}
          />

          <LeafsImg src={leafs} alt="leafs" visibleImg={!isLoggedIn} />

          <LeafsSide
            src={leafsDeskSideBar}
            alt="leafs right side"
            visibleImg={isLoggedIn}
          />

          <LeafsFoot
            src={leafsTabSideBar}
            alt="leafs in foot"
            visibleImg={isLoggedIn}
          />
          {children}
        </>
      ) : (
        <>
          <VectorImg
            src={vector}
            alt="grey background"
            visibleImg={!isLoggedIn}
          />

          <BananaImg src={banana} alt="banana" visibleImg={!isLoggedIn} />

          <StrawberryAuthImg
            src={strawberryAuth}
            alt="strawberry"
            visibleImg={!isLoggedIn}
            auth={!isMainPage}
          />

          <LeafsAuthImg
            src={leafsAuth}
            alt="leafs"
            visibleImg={!isLoggedIn}
            auth={!isMainPage}
          />

          <LeafsSide
            src={leafsDeskSideBar}
            alt="leafs right side"
            visibleImg={isLoggedIn}
          />

          <LeafsFoot
            src={leafsTabSideBar}
            alt="leafs in foot"
            visibleImg={isLoggedIn}
          />
          {children}
        </>
      )}
    </ImageContainer>
  );
};

export default BackgroundContainer;

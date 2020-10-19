import React from 'react'
import { Router, Location } from '@reach/router';
import Homepage from '../HomePage';
import BioPage from '../BioPage';
import posed, { PoseGroup } from 'react-pose';

const Routes = () => {


    const RouteContainer = posed.div({
        enter: { opacity: 1, delay: 300 },
        exit: { opacity: 0 }
      });

      const PosedRouter = ({ children }) => (
        <Location>
          {({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.key}>
                <Router location={location}>{children}</Router>
              </RouteContainer>
            </PoseGroup>
          )}
        </Location>
      );      

      return (
        <PosedRouter>
            <Homepage path="/" />
            <BioPage path="bio" />
      </PosedRouter>

      )
}

export default Routes

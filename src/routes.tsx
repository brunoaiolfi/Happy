import React from 'react';
import Landing from './pages/landing';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
    
   return ( 
    <BrowserRouter>
      
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

    </BrowserRouter>
   );
}

export default Routes;
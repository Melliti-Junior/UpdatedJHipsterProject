import { IssuesComponent } from './issues/issues.component';
import { PmComponent } from './pm.component';
import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';

export const PmRoute: Route = {
    path: 'pm',
    component: PmComponent,
    data: {
        pageTitle: 'Project Management'
    },
    canActivate: [UserRouteAccessService],
    children: [
        { path: 'issues', component: IssuesComponent },
      ]
};

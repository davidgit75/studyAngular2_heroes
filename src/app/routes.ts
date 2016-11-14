import { PathsComponent } from './paths.component';
import { PathDetailComponent } from './path-detail.component';
import { HomeComponent } from './home.component';
import { provideRoutes } from '@angular/router';

const iROUTES = [
    {path: "", component: HomeComponent},
    {path: "paths", component: PathsComponent},
    {path: "path-detail", component: PathDetailComponent}
];

export const ROUTES = [
    provideRoutes(iROUTES)
];


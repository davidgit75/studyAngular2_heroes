import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PathsComponent } from './paths.component';
import { PathDetailComponent } from './path-detail.component';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';

import { PathService } from './path.service';

@NgModule({
  declarations: [
    PathsComponent,
    PathDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "paths", component: PathsComponent},
      {path: "path-detail", component: PathDetailComponent}
    ])
  ],
  providers: [PathService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

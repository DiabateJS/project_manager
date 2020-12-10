import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankTemplateComponent } from './template/blank-template.component';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';
import { AppRoutingModule, routes } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
    declarations: [
        AppComponent,
        BlankTemplateComponent,
        PageNotFoundComponent,
        HeaderComponent,
        LeftNavTemplateComponent,
        NavigationComponent,
        ProjectComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    providers: [],
    exports: [
        ProjectsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

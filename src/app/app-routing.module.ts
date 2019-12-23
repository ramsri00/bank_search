import { RouterModule, Routes } from '@angular/router';
import{ SearchComponent} from './search/search.component';
import { NgModule } from '@angular/core';



const appRoutes: Routes = [
    {
      path: 'search',
      component: SearchComponent // Default Route
    }

]






@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })





export class AppRoutingModule { }
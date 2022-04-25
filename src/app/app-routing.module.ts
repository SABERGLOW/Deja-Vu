import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectComponent } from "./components/detect/detect.component";
import { TrainComponent } from "./components/train/train.component";
import { IdentifyComponent } from "./components/identify/identify.component";
import { AppComponent } from "./app.component";

/**
 * The routes for the application.           
 * @type {Routes}           
 */
const routes: Routes = [
  { path: 'detect', component: DetectComponent },
  { path: 'identify', component: IdentifyComponent },
  { path: 'train', component: TrainComponent },
  { path: '', component: DetectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
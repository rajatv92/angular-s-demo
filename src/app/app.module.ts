import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { ManageEmployeeComponent } from './employees/manage-employee/manage-employee.component';
import { StepperComponent } from './employees/manage-employee/stepper/stepper.component';
import { SteponeComponent } from './employees/manage-employee/stepone/stepone.component';
import { SteptwoComponent } from './employees/manage-employee/steptwo/steptwo.component';
import { EmployeesService } from './employees/employees.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService} from './auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const appRoutes: Routes = [
  {path:'signup', component: AuthComponent},
  {path:'recipe', component: RecipesComponent},
  {path:'shoppinglist', component: ShoppingListComponent},
  {path:'employees', component: EmployeesComponent},
  {path:'employees/list', component: EmployeesListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    EmployeesComponent,
    EmployeesListComponent,
    ManageEmployeeComponent,
    StepperComponent,
    SteponeComponent,
    SteptwoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [EmployeesService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

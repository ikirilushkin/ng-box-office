import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent, ToolbarComponent } from '@bo/core/components';
import { AppComponent } from '@bo/core/containers';
import { MaterialModule } from '@bo/material';

export const COMPONENTS = [AppComponent, LayoutComponent, ToolbarComponent];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [AppComponent],
  declarations: COMPONENTS,
  providers: []
})
export class CoreModule {}

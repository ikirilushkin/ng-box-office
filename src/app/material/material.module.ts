import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatRippleModule],
  exports: [MatToolbarModule, MatButtonModule, MatRippleModule],
  declarations: [],
  providers: []
})
export class MaterialModule {}

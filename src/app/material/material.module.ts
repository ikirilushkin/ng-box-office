import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatRippleModule, MatListModule],
  exports: [MatToolbarModule, MatButtonModule, MatRippleModule, MatListModule],
  declarations: [],
  providers: []
})
export class MaterialModule {}

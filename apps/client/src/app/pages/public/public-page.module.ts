import { GfWorldMapChartModule } from '@ghostfolio/client/components/world-map-chart/world-map-chart.module';
import { GfHoldingsTableComponent } from '@ghostfolio/ui/holdings-table';
import { GfPortfolioProportionChartModule } from '@ghostfolio/ui/portfolio-proportion-chart';
import { GfValueModule } from '@ghostfolio/ui/value';

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { PublicPageRoutingModule } from './public-page-routing.module';
import { PublicPageComponent } from './public-page.component';

@NgModule({
  declarations: [PublicPageComponent],
  imports: [
    CommonModule,
    GfHoldingsTableComponent,
    GfPortfolioProportionChartModule,
    GfValueModule,
    GfWorldMapChartModule,
    MatButtonModule,
    MatCardModule,
    PublicPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicPageModule {}

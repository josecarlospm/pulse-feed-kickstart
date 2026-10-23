import { Component } from '@angular/core';
import { PULSE_FEED_CONTENT } from './content/sample-stories';
import { FeaturedLeadComponent } from './layout/featured-lead.component';
import { MastheadComponent } from './layout/masthead.component';
import { SiteFooterComponent } from './layout/site-footer.component';
import { StoryRiverComponent } from './layout/story-river.component';
import { ThemedPackagesComponent } from './layout/themed-packages.component';

@Component({
  selector: 'app-root',
  imports: [
    MastheadComponent,
    FeaturedLeadComponent,
    StoryRiverComponent,
    ThemedPackagesComponent,
    SiteFooterComponent,
  ],
  template: `
    <div id="top" class="shell">
      <pf-masthead [brand]="content.brand" [nav]="content.nav" />
      <main>
        <pf-featured-lead [story]="content.featured" />
        <pf-story-river [stories]="content.river" />
        <pf-themed-packages [packages]="content.packages" />
      </main>
      <pf-site-footer [brand]="content.brand" [links]="content.footerLinks" />
    </div>
  `,
  styles: `
    .shell {
      min-height: 100vh;
      background: var(--color-bg);
    }
  `,
})
export class App {
  readonly content = PULSE_FEED_CONTENT;
}

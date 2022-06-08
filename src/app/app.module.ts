import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { HeroComponent } from './Core/hero/hero.component';
import { CardsComponent } from './Core/cards/cards.component';
import { WhoComponent } from './Core/who/who.component';
import { CounterComponent } from './Core/counter/counter.component';
import { VideoComponent } from './Core/video/video.component';
import { MarketingComponent } from './Core/marketing/marketing.component';
import { BrandComponent } from './Core/brand/brand.component';
import { FAQsComponent } from './Core/faqs/faqs.component';
import { FooterComponent } from './Core/footer/footer.component';
import { TestimonialsComponent } from './Core/testimonials/testimonials.component';
import { TeamComponent } from './Core/team/team.component';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { AboutComponent } from './Pages/about/about.component';
import { PagesHeroComponent } from './Core/pages-hero/pages-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CardsComponent,
    WhoComponent,
    CounterComponent,
    VideoComponent,
    MarketingComponent,
    BrandComponent,
    FAQsComponent,
    FooterComponent,
    TestimonialsComponent,
    TeamComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent,
    AboutComponent,
    PagesHeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

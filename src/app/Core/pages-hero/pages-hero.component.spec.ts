import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHeroComponent } from './pages-hero.component';

describe('PagesHeroComponent', () => {
  let component: PagesHeroComponent;
  let fixture: ComponentFixture<PagesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

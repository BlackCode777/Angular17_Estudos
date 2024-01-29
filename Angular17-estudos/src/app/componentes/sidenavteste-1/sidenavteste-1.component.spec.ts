import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidenavteste1Component } from './sidenavteste-1.component';

describe('Sidenavteste1Component', () => {
  let component: Sidenavteste1Component;
  let fixture: ComponentFixture<Sidenavteste1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidenavteste1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sidenavteste1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

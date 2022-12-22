import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneSellerComponent } from './view-one-seller.component';

describe('ViewOneSellerComponent', () => {
  let component: ViewOneSellerComponent;
  let fixture: ComponentFixture<ViewOneSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

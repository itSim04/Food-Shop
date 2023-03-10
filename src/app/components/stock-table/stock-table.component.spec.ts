import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSectionComponent } from './stock-table.component';

describe('StockTableComponent', () => {
  let component: RoomSectionComponent;
  let fixture: ComponentFixture<RoomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

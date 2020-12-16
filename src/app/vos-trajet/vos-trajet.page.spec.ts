import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VosTrajetPage } from './vos-trajet.page';

describe('VosTrajetPage', () => {
  let component: VosTrajetPage;
  let fixture: ComponentFixture<VosTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VosTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VosTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

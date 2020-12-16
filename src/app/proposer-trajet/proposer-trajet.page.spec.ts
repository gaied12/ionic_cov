import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProposerTrajetPage } from './proposer-trajet.page';

describe('ProposerTrajetPage', () => {
  let component: ProposerTrajetPage;
  let fixture: ComponentFixture<ProposerTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProposerTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

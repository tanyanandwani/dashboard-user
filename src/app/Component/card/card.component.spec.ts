import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 import { DashboardService } from '@services/dashboard.service';
import { CardComponent } from './card.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { DebugElement } from '@angular/core';



fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let service: DashboardService;
  let de: DebugElement;
  let el:HTMLElement;
  let spy:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule, 
        HttpClientTestingModule,
        HttpClientModule
        // NgbModule,
        // DashboardService
      ],
      declarations: [ CardComponent ],
      providers: [DashboardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  afterEach(()=>{
    service=null;
    component=null;
  })

  it('form with controls',() =>{
    
    expect(component.addForm.contains('status')).toBe(true);
    expect(component.addForm.contains('duration')).toBe(true);
  
    expect(component.addForm.contains('subject')).toBe(true);
    expect(component.addForm.contains('completed')).toBe(true);
  
    });
    it('should make the controls required',()=>{
      component.addForm.controls['duration'].setValue('');
      component.addForm.controls['subject'].setValue('');
     expect(component.addForm.valid).toBeFalsy();

      let dur_control = component.addForm.get('duration');
      let sub_control= component.addForm.get('subject');

      dur_control.setValue('');
     expect(dur_control.valid).toBeFalsy();
      sub_control.setValue('');
      expect(sub_control.valid).toBeFalsy();


    }
    );

  
  
   

 

// it('should call delete metghod',()=>{
//  let spy = spyOn(service,'removeClass').and.returnValue(Observable.arguments);
//  component.removeClass(1);
//  expect(spy).toHaveBeenCalledWith(1);


// });
});




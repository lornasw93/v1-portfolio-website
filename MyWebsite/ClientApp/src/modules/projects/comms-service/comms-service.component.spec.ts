import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommsServiceComponent } from './comms-service.component';

describe('CommsServiceComponent', () => {
    let component: CommsServiceComponent;
    let fixture: ComponentFixture<CommsServiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommsServiceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommsServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

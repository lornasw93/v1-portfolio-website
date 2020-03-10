import { Component, OnInit } from '@angular/core';
import { faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    faHome = faHome;
    faDev = faDev;
    faDownload = faDownload;

    constructor() { }

    ngOnInit() { }

    onToggle() {
        var toggle = document.getElementById("toggle");
        if (toggle != null) {
            toggle.classList.toggle('active');
        }

        var overlay = document.getElementById('overlay');
        if (overlay != null) {
            overlay.classList.toggle('open');
        }
    }
}

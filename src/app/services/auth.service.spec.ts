import {AuthService} from "./auth.service";
import {TestBed} from "@angular/core/testing";
import clock = jasmine.clock;

const keyAuth = 'auth';
const keyExpiration = 'authExpiration';
const keyUser = 'user';
const token = "token";
const tokenExpirationTime = 300;
const userObj = {
    "country": "someCountry",
    "display_name": "someDisplayName",
    "email": "someEmail",
    "explicit_content": {
        "filter_enabled": false,
        "filter_locked": false
    },
    "external_urls": {
        "spotify": "someExternalURL"
    },
    "followers": {
        "href": null,
        "total": 1000
    },
    "href": "SomeHREF",
    "id": "someID",
    "images": [
        {
            "height": null,
            "url": "someURL",
            "width": null
        }
    ],
    "product": "premium",
    "type": "user",
    "uri": "spotify:user:someUserName"
};


describe("AuthService", () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({providers: [AuthService]});
        service = TestBed.inject(AuthService);
    });

    afterEach(() => {
        window.localStorage.clear();
    });

    it("#Authenticate should save token and expiration date to local storage", () => {
        service.Authenticate(token, tokenExpirationTime);

        expect(window.localStorage.getItem(keyAuth)).not.toBeNull();
        expect(window.localStorage.getItem(keyExpiration)).not.toBeNull();
    });

    it("#setUser should save a user's stringified JSON to the local storage", () => {
        service.setUser(userObj);

        expect(window.localStorage.getItem(keyUser)).not.toBeNull();
    });

    it("#isAuthenticated should return true if the user is authenticated", () => {
        service.Authenticate(token, tokenExpirationTime);

        expect(service.isAuthenticated()).toBe(true);
    });

    it("#isAuthenticated should return false if the user is not authenticated", () => {
        expect(service.isAuthenticated()).toBe(false);
    });

    it("#getAuth should return a token if present in the local storage", () => {
        service.Authenticate(token, tokenExpirationTime);

        expect(service.getAuth()).toBe(token);
    });

    it("#getExpiration should return the expiration date for the token", () => {
        clock().install();
        const date = new Date(2022, 9, 6);
        clock().mockDate(date);
        service.Authenticate(token, tokenExpirationTime);
        const tokenExpirationDate = new Date(date.getTime() + tokenExpirationTime * 1000);

        expect(service.getExpiration().getTime()).toBe(tokenExpirationDate.getTime());
    });

    it("#logout deletes from the local storage the user, token and token expiration", () => {
        service.Authenticate(token, tokenExpirationTime);

        service.logout();

        expect(window.localStorage.getItem(keyUser)).toBeNull();
        expect(window.localStorage.getItem(keyAuth)).toBeNull();
        expect(window.localStorage.getItem(keyExpiration)).toBeNull();
    });
});

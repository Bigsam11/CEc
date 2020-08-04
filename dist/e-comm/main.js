(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container hasBackdrop=\"true\" >\r\n\r\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"over\" style=\" overflow: hidden;\">\r\n        <!-- <ul *ngFor=\"let item of sideNavMenu\">\r\n            <li><a [routerLink]=\"[item.link]\" (click)=\"toggelNavbar()\" routerLinkActive=\"active\">{{item.title}}</a></li>\r\n        </ul> -->\r\n        <app-sidenav (sidenav)=\"toggelNavbar($event)\"></app-sidenav>\r\n    </mat-drawer>\r\n    <app-header (sidenav)=\"toggelNavbar($event)\"></app-header>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n</mat-drawer-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"first\">\r\n            <h4>Cec Market</h4>\r\n            <p>\r\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.\r\n            </p>\r\n        </div>\r\n        <div class=\"second\">\r\n            <h4>HELP</h4>\r\n            <ul class=\"list\">\r\n                <li>\r\n                    Shipping Information</li>\r\n                <li> Returns & Exchange</li>\r\n                <li> Terms & Conditions</li>\r\n                <li> Privacy Policy\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"third\">\r\n            <h4>HAVE A QUESTION</h4>\r\n            <p>\r\n                203 Fake St. Mountain View, Lagos, Nigeria</p>\r\n            <p>+234809412237</p>\r\n            <p>info@cec-market.com\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"copyright\">\r\n        <p>Copyright ©2019 All rights reserved | This application is a property of CecMarket</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loadingEnable\"></mat-progress-bar>\r\n<div class=\"header-box\">\r\n    <div class=\"container\">\r\n        <div class=\"mobile-view\">\r\n            <mat-icon (click)=\"toggelSidenav()\">menu</mat-icon>\r\n        </div>\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['/home']\"> <img\r\n                    src=\"/assets/CeC.png\"\r\n                    width=\"80px\" height=\"50px\">\r\n            </a>\r\n        </div>\r\n\r\n\r\n        <!-- <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Search\">\r\n                    <mat-icon matSuffix>search</mat-icon>\r\n                </mat-form-field>\r\n            </form> -->\r\n\r\n        <div class=\"menu\">\r\n            <ul class=\"list\">\r\n                <li class=\"contain\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span>HOME</span></li>\r\n                <li class=\"contain\" [routerLink]=\"['/products']\" routerLinkActive=\"active\"><span>PRODUCTS</span></li>\r\n                <li class=\"contain\" [routerLink]=\"['/images']\" routerLinkActive=\"active\"><span>IMAGES</span></li>\r\n                <li class=\"contain\" [routerLink]=\"['/contact-us']\" routerLinkActive=\"active\"><span>CONTACT-US</span>\r\n                </li>\r\n\r\n                <li class=\"contain\" *ngIf=\"!user\">\r\n                    <button mat-stroked-button color=\"primary\" class=\"button\" (click)=\"openLoginDialog()\">LOGIN</button>\r\n                </li>\r\n\r\n                <li class=\"contain profile dropdown\" *ngIf=\"user\">\r\n                    <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg\"\r\n                        width=\"25px\">\r\n\r\n                    <div class=\"dropdown-content\">\r\n                        <a [routerLink]=\"['/myprofile']\">My Profile</a>\r\n                        <a>Orders</a>\r\n                        <a>Wishlist</a>\r\n                        <a>Notifications</a>\r\n                        <a (click)=\"logout()\">Logout</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"contain\" *ngIf=\"user\" [routerLink]=\"['/shopping-cart']\">\r\n                    <mat-icon>add_shopping_cart</mat-icon>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"cart-icon mobile-view\" *ngIf=\"!user\">\r\n            <button mat-stroked-button color=\"primary\" class=\"button\" (click)=\"openLoginDialog()\">LOGIN</button>\r\n        </div>\r\n        <div class=\"cart-icon mobile-view\" *ngIf=\"user\">\r\n            <a [routerLink]=\"['/myprofile/notifications']\">\r\n                <mat-icon>notification_important</mat-icon>\r\n            </a>&nbsp; &nbsp;\r\n            <a [routerLink]=\"['/shopping-cart']\">\r\n                <mat-icon>add_shopping_cart</mat-icon>\r\n            </a>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n<!-- <app-sidenav class=\"sidenavEnable\"></app-sidenav> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/sidenav/sidenav.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/sidenav/sidenav.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"user\">\r\n        <tr (click)=\"goToMyProfile()\">\r\n                <td>\r\n                        <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg\" />\r\n\r\n                </td>\r\n                <td style=\"padding-left: 15px;\">\r\n                        <span>Hello,</span>\r\n                        <h3 style=\"margin: 0\">Akhigbe Oluwatobiloba</h3>\r\n                </td>\r\n                <td>\r\n                        <mat-icon>chevron_right</mat-icon>\r\n                </td>\r\n        </tr>\r\n</table>\r\n<div class=\"login\" *ngIf=\"!user\">\r\n        <button mat-stroked-button color=\"primary\" class=\"button\" (click)=\"openLoginDialog()\">LOGIN</button>\r\n</div>\r\n\r\n<ul class=\"list\">\r\n        <li class=\"contain\" (click)=\"toggelSidenav()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">\r\n                <table>\r\n                        <tr>\r\n                                <td>\r\n                                        <mat-icon>home</mat-icon>\r\n                                </td>\r\n                                <td style=\"vertical-align: baseline;\"><span style=\"margin-left: 10px;\">HOME</span></td>\r\n                        </tr>\r\n                </table>\r\n        </li>\r\n        <li class=\"contain\" (click)=\"toggelSidenav()\" [routerLink]=\"['/products']\" routerLinkActive=\"active\">\r\n                <table>\r\n                        <tr>\r\n                                <td>\r\n                                        <mat-icon>add_to_photos</mat-icon>\r\n                                </td>\r\n                                <td style=\"vertical-align: baseline;\"> <span style=\"margin-left: 10px;\">PRODUCTS</span>\r\n                                </td>\r\n                        </tr>\r\n                </table>\r\n        </li>\r\n</ul>\r\n<ul class=\"list\" *ngIf=\"user\">\r\n        <li *ngFor=\"let item of profileMenu\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\"\r\n                (click)=\"toggelSidenav()\">\r\n                <table>\r\n                        <tr>\r\n                                <td>\r\n                                        <mat-icon>{{item.icon}}</mat-icon>\r\n                                </td>\r\n                                <td style=\"vertical-align: baseline;\">\r\n                                        <span style=\"margin-left: 10px;\">{{item.title}}</span>\r\n                                </td>\r\n                        </tr>\r\n                </table>\r\n        </li>\r\n</ul>\r\n<ul class=\"list\" *ngIf=\"user\">\r\n        <li *ngFor=\"let item of myStuff\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\" (click)=\"toggelSidenav()\">\r\n                <table>\r\n                        <tr>\r\n                                <td>\r\n                                        <mat-icon>{{item.icon}}</mat-icon>\r\n                                </td>\r\n                                <td style=\"vertical-align: baseline;\">\r\n                                        <span style=\"margin-left: 10px;\">{{item.title}}</span>\r\n                                </td>\r\n                        </tr>\r\n                </table>\r\n        </li>\r\n</ul>\r\n<div *ngIf=\"user\">\r\n        <table>\r\n                <tr (click)=\"logout()\">\r\n                        <td>\r\n                                <mat-icon>power_settings_new</mat-icon>\r\n                        </td>\r\n                        <td style=\"vertical-align: baseline;\">\r\n                                <span style=\"margin-left: 10px;\">Logout</span>\r\n                        </td>\r\n                </tr>\r\n        </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/slider/slider.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/slider/slider.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<owl-carousel\r\n[options]=\"carouselOptions\"\r\n[items]=\"images\"\r\n[carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n<div class=\"item\" *ngFor=\"let image of images;let i = index\">\r\n     <div class=\"thumbnail-image\" >\r\n        <img [src]=\"image.image\" />\r\n    </div>\r\n  </div>\r\n</owl-carousel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\r\n<div class=\"products-container\">\r\n    <div class=\"title\">\r\n        New Products Arrival\r\n        <button mat-button mat-raised-button color=\"primary\" style =\"background-color:9741a4 !important;\"class=\"viewAllBtn\">\r\n            View All\r\n        </button>\r\n    </div>\r\n    <div class=\"body\">\r\n        <mat-card class=\"example-card\" *ngFor=\"let item of images\" (click)=\"productHome()\">\r\n            <!-- <img class=\"productImg\" mat-card-image src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\"> -->\r\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\r\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\r\n                    <div class=\"thumbnail-image\">\r\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\r\n                    </div>\r\n                </div>\r\n            </owl-carousel>\r\n            <mat-card-content>\r\n                <h3>#1200.00</h3>\r\n                <span>NIKE FREE RN 2019 ID</span>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\r\n                    ADD TO CART\r\n                </button>\r\n                <button mat-button>SHARE\r\n                </button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div class=\"mobile-view\">\r\n    <div class=\"title\">\r\n        New Products Arrival\r\n        <button mat-button mat-raised-button color=\"primary\" style =\"background-color:9741a4 !important;\" class=\"viewAllBtn\">\r\n            View All\r\n        </button>\r\n    </div>\r\n    <div class=\"mobile-card\" *ngFor=\"let item of images\" (click)=\"productHome()\">\r\n        <div class=\"header\">\r\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\r\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\r\n                    <div class=\"thumbnail-image\">\r\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\r\n                    </div>\r\n                </div>\r\n            </owl-carousel>\r\n        </div>\r\n        <div class=\"footer\">\r\n            asdfasdf\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"search-box\">\r\n    <div class=\"icon\">\r\n        <mat-icon class=\"leftIcon\">star</mat-icon>\r\n    </div>\r\n    <div class=\"search-text\">\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n    </div>\r\n    <div class=\"close\">\r\n        <mat-icon style=\"padding:7px;\">close</mat-icon>\r\n    </div>\r\n</div> -->\r\n<!-- \r\n<div class=\"search-box\">\r\n    <div class=\"search-text\">\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\r\n\r\n    </div>\r\n    <div class=\"close\">\r\n        <mat-icon style=\"padding:7px;\">close</mat-icon>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\"> \r\n<div class=\"example-container\">\r\n  <h2 style=\"font-weight: 100; text-align: center;\">Please sign in</h2>\r\n \r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Mobile Number</mat-label>\r\n    <input matInput formControlName=\"mobileNumber\" placeholder=\"Enter Your Mobile Number\">\r\n  </mat-form-field>\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Password</mat-label>\r\n    <input matInput formControlName=\"password\" placeholder=\"Enter Password\">\r\n  </mat-form-field>\r\n  <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button space\" (click)=\"login()\">LOGIN\r\n  </button>\r\n\r\n \r\n  <label style=\"text-align: center; margin-top: 5px; color:gray\">Or</label>\r\n  <button mat-button mat-stroked-button color=\"primary\" class=\"button\">SIGNUP NOW\r\n  </button>\r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/manage-address/manage-address.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/manage-address/manage-address.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Manage Addresses</h3>\r\n    <!-- <div class=\"box\">\r\n        <mat-icon style=\"vertical-align: middle;\">add</mat-icon> &nbsp; &nbsp;\r\n        <span style=\"font-size: 14px; color: #3f51b5;\">Add A New Address</span>\r\n    </div> -->\r\n    <div class=\"address-form\">\r\n        <form [formGroup]=\"addressForm\">\r\n\r\n            <div class=\"form-box\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>First name</mat-label>\r\n                    <input matInput formControlName=\"firstName\" placeholder=\"Enter your first name\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Last name</mat-label>\r\n                    <input matInput formControlName=\"lastName\" placeholder=\"Enter your last name\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"form-box\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Pincode</mat-label>\r\n                    <input matInput formControlName=\"pincode\" placeholder=\"Enter your pincode\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Locality</mat-label>\r\n                    <input matInput formControlName=\"locality\" placeholder=\"Enter locality\">\r\n                </mat-form-field>\r\n            </div>\r\n            <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                <mat-label>Address</mat-label>\r\n                <textarea matInput formControlName=\"address\" placeholder=\"Enter full address\"></textarea>\r\n            </mat-form-field>\r\n            <div class=\"form-box\">\r\n                <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button\">SAVE\r\n                </button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/my-rewards/my-rewards.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/my-rewards/my-rewards.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"no-rewards\">\r\n        <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/myRewadsEmpty_3a7345.png\" /><br>\r\n       \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/myprofile.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/myprofile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n    <div class=\"sidebar\">\r\n        <div class=\"profile\">\r\n            <table>\r\n                <tr>\r\n                    <td>\r\n                        <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg\">\r\n\r\n                    </td>\r\n                    <td style=\"padding-left: 15px;\">\r\n                        <span>Hello,</span>\r\n                        <h3 style=\"margin: 0\">Akhigbe Oluwatobiloba</h3>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"settings\">\r\n            <div class=\"list\">\r\n\r\n                <div class=\"left-icon contain\">\r\n                    <mat-icon>next_week</mat-icon>\r\n                </div>\r\n                <div class=\"title contain\">\r\n                    MY ORDERS\r\n                </div>\r\n                <div class=\"right-icon contain\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </div>\r\n            </div>\r\n            <div class=\"list\">\r\n\r\n                <div class=\"left-icon contain\">\r\n                    <mat-icon>person</mat-icon>\r\n                </div>\r\n                <div class=\"title contain\">\r\n                    ACCOUNT SETTINGS\r\n                </div>\r\n                <div class=\"right-icon contain\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </div>\r\n                <div class=\"child-list\">\r\n                    <ul>\r\n                        <a [routerLink]=\"['profile']\" routerLinkActive=\"active\">\r\n                            <li>Personal Information</li>\r\n                        </a>\r\n                        <a [routerLink]=\"['address']\" routerLinkActive=\"active\">\r\n                            <li>Manage Address</li>\r\n                        </a>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"list\">\r\n\r\n                <div class=\"left-icon contain\">\r\n                    <mat-icon>add_comment</mat-icon>\r\n                </div>\r\n                <div class=\"title contain\">\r\n                    PAYMENTS\r\n                </div>\r\n                <div class=\"right-icon contain\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </div>\r\n                <div class=\"child-list\">\r\n                    <ul>\r\n                        <a [routerLink]=\"['carddetails']\" routerLinkActive=\"active\">\r\n                            <li>Saved Cards</li>\r\n                        </a>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"list\">\r\n                <div class=\"left-icon contain\">\r\n                    <mat-icon>message</mat-icon>\r\n                </div>\r\n                <div class=\"title contain\">\r\n                    MY STUFF\r\n                </div>\r\n                <div class=\"right-icon contain\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </div>\r\n                <div class=\"child-list\">\r\n                    <ul>\r\n                        <a [routerLink]=\"['rewards']\" routerLinkActive=\"active\">\r\n                            <li>Rewards</li>\r\n                        </a>\r\n                        <a [routerLink]=\"['reviews']\" routerLinkActive=\"active\">\r\n                            <li>Reviews</li>\r\n                        </a>\r\n                        <a [routerLink]=\"['wishlist']\" routerLinkActive=\"active\">\r\n                            <li>My Wishlist</li>\r\n                        </a>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"list\">\r\n                <div class=\"left-icon contain\">\r\n                    <mat-icon>power_settings_new</mat-icon>\r\n                </div>\r\n                <div class=\"title contain\">\r\n                    LOGOUT\r\n                </div>\r\n                <div class=\"right-icon contain\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/notifications/notifications.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/notifications/notifications.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>notifications works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/profile-information/profile-information.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/profile-information/profile-information.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Personal Information</h3>\r\n<form [formGroup]=\"profileForm\">\r\n    <div class=\"form-box\">\r\n        <mat-form-field appearance=\"outline\">\r\n            <mat-label>first name</mat-label>\r\n            <input matInput formControlName=\"firstName\" placeholder=\"Placeholder\" value=\"Akhigbe\">\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"lastName\">\r\n            <mat-label>last name</mat-label>\r\n            <input matInput formControlName=\"lastName\" placeholder=\"Placeholder\" value=\"Oluwatobiloba\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-box\">\r\n        <mat-form-field appearance=\"outline\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput formControlName=\"email\" placeholder=\"Placeholder\" value=\"tobiloba.akhigbe@gmail.com\">\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\">\r\n            <mat-label>Number</mat-label>\r\n            <input matInput formControlName=\"mobile\" placeholder=\"Placeholder\" value=\"09064175126\">\r\n        </mat-form-field>\r\n    </div>\r\n    <p>Your Gender:</p>\r\n    <div class=\"form-box\">\r\n\r\n        <mat-radio-group formControlName=\"gender\" aria-label=\"Select an option\" color=\"primary\">\r\n            <mat-radio-button selected value=\"1\">Male</mat-radio-button> &nbsp; &nbsp;\r\n            <mat-radio-button value=\"2\">Female</mat-radio-button>\r\n        </mat-radio-group>\r\n    </div>\r\n    <div class=\"form-box\" style=\"margin-top:20px;\">\r\n        <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button\">SAVE\r\n        </button>\r\n    </div>\r\n</form>\r\n<div style=\"margin-top: 20px; border-top: 1px solid rgba(0, 0, 0, 0.05);\">\r\n    <h3>FAQs</h3>\r\n    <p><b>What happens when I update my email address (or mobile number)?</b></p>\r\n    <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related\r\n        communication on your updated email address (or mobile number).\r\n    </p>\r\n    <p><b>When will my Flipkart account be updated with the new email address (or mobile number)?</b></p>\r\n    <p> It happens as soon as you confirm the verification code sent to your email (or mobile) and save the\r\n        changes.</p>\r\n\r\n    <p><b> What happens to my existing Flipkart account when I update my email address (or mobile number)?</b>\r\n    </p>\r\n    <p> Updating your email address (or mobile number) doesn't invalidate your account. Your account remains\r\n        fully functional. You'll continue seeing your Order history, saved information and personal details.</p>\r\n\r\n    <p><b>Does my Seller account get affected when I update my email address?</b></p>\r\n    <p> Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/reviews-rating/reviews-rating.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/reviews-rating/reviews-rating.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>reviews-rating works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/saved-cards/saved-cards.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/saved-cards/saved-cards.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Manage Cards</h3>\r\n    <!-- <div class=\"box\">\r\n        <mat-icon style=\"vertical-align: middle;\">add</mat-icon> &nbsp; &nbsp;\r\n        <span style=\"font-size: 14px; color: #3f51b5;\">Add A New Card</span>\r\n    </div> -->\r\n    <div class=\"address-form\">\r\n        <form [formGroup]=\"cardForm\">\r\n\r\n            <div class=\"form-box\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Card Number</mat-label>\r\n                    <input matInput placeholder=\"Enter your card number\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Card validity</mat-label>\r\n                    <input matInput placeholder=\"Card validity\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"form-box\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Name on card</mat-label>\r\n                    <input matInput placeholder=\"Enter name on card\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Name This Card for future use</mat-label>\r\n                    <input matInput placeholder=\"Enter name of this card for future use\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"form-box\">\r\n                <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button\">SAVE\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/shopping-cart/shopping-cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/shopping-cart/shopping-cart.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping-cart-conatiner\">\r\n\r\n    <div class=\"title\">\r\n        My Cart\r\n    </div>\r\n    <div class=\"header\">\r\n\r\n\r\n        <div class=\"img\">\r\n\r\n        </div>\r\n        <div class=\"name\">\r\n            Product\r\n        </div>\r\n        <div class=\"price\">\r\n            Price\r\n        </div>\r\n        <div class=\"quantity\">\r\n            Quantity\r\n        </div>\r\n        <div class=\"total\">\r\n            Total\r\n        </div>\r\n        <div class=\"close\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"body\" *ngFor=\"let item of cart\">\r\n\r\n        <div class=\"img\">\r\n\r\n            <img class=\"productImg\" src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\">\r\n        </div>\r\n        <div class=\"name\">\r\n            <h3> NIKE FREE RN 2019 ID</h3>\r\n            <p> Far far away, behind the word mountains, far from the countries</p>\r\n        </div>\r\n        <div class=\"price\">\r\n            $4.90\r\n        </div>\r\n        <div class=\"quantity\">\r\n            <mat-icon class=\"close-icon\">add</mat-icon><input\r\n                style=\"height: 20px; margin-right: 5px; text-align: center;\" type=\"text\" size=\"1\" value=\"1\" />\r\n            <mat-icon class=\"close-icon\">remove</mat-icon>\r\n        </div>\r\n        <div class=\"total\">\r\n            $4.90\r\n\r\n        </div>\r\n        <div class=\"close\">\r\n            <mat-icon class=\"close-icon\">close</mat-icon>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"cart-total\">\r\n        <h2>CART TOTALS</h2>\r\n        <hr>\r\n        <table style=\"width: 100%\">\r\n            <tr>\r\n                <td>Subtotal</td>\r\n                <td>$20.60</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Delivery</td>\r\n                <td>$0.60</td>\r\n            </tr>\r\n            <tr>\r\n                <td>Discount</td>\r\n                <td>$0.60</td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <hr>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                    \r\n                <td>Total</td>\r\n                <td><b>$10.60</b></td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"checkout-button\">\r\n            <button mat-stroked-button color=\"primary\" class=\"button full-button\">PROCEED TO CHECKOUT</button>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/wishlist/wishlist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/wishlist/wishlist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>wishlist works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products-container\">\r\n    <div class=\"sidebar\">\r\n        <div class=\"title\">\r\n            Categories\r\n        </div>\r\n        <div class=\"list\">\r\n            <mat-tree class=\"list-items\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n                <!-- This is the tree node template for leaf nodes -->\r\n                <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n                    <!-- use a disabled button to provide padding for tree leaf -->\r\n                    <button mat-icon-button disabled></button>\r\n                    {{node.name}}\r\n                </mat-tree-node>\r\n                <!-- This is the tree node template for expandable nodes -->\r\n                <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\r\n                    <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n                        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n                        </mat-icon>\r\n                    </button>\r\n                    {{node.name}}\r\n                </mat-tree-node>\r\n            </mat-tree>\r\n        </div>\r\n        <br>\r\n        <div class=\"filters\">\r\n            Price range\r\n            <mat-slider style=\"width: 100%\" color=\"primary\" tickInterval=\"auto\" thumbLabel min=\"0\" max=\"1000\" step=\"100\"\r\n                value=\"100\"></mat-slider>\r\n        </div>\r\n    </div>\r\n    <div class=\"body\">\r\n        <mat-card class=\"example-card\" *ngFor=\"let item of products\" (click)=\"productHome(item.id)\">\r\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\r\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\r\n                    <div class=\"thumbnail-image\">\r\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\r\n                    </div>\r\n                </div>\r\n            </owl-carousel>\r\n            <mat-card-content>\r\n                <p>NIKE FREE RN 2019 ID</p>\r\n                <p>#1200.00</p>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\r\n                    ADD TO CART\r\n                </button>\r\n                <button mat-button>SHARE\r\n                </button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mobile\" *ngFor=\"let item of products\" (click)=\"productHome(item.id)\">\r\n    <div class=\"mobile-card-container\">\r\n        <div class=\"mobile-card-img\">\r\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\r\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\r\n                    <div class=\"thumbnail-image\">\r\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\r\n                    </div>\r\n                </div>\r\n            </owl-carousel>\r\n        </div>\r\n        <div class=\"mobile-card-details\">\r\n            <h3>NIKE FREE RN 2019 ID</h3>\r\n            <p>#1200.00</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"mobile-card-footer\">\r\n        <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\r\n            ADD TO CART\r\n        </button>\r\n        <button mat-button>SHARE\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/single-product/single-product.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-product/single-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner\" *ngIf=\"product\">\r\n    <div class=\"product-img-container\">\r\n        <img class=\"productImg\" mat-card-image style=\"width: 100%; padding: 20px;\" [src]=\"product.image\"\r\n            alt=\"Photo of a Shiba Inu\">\r\n\r\n    </div>\r\n    <div class=\"product-description\">\r\n        <h2 style=\"font-weight: 400;\"> Nike Free RN 2019 iD</h2>\r\n        <div class=\"rating-container\">\r\n            <span>Star: 5.0</span>\r\n            <span class=\"rating\">100 Rating</span>\r\n            <span class=\"sold\">500 Sold</span>\r\n        </div>\r\n        <h2 style=\"font-weight: 400;\"> #1200.00 </h2>\r\n        <div class=\"description\">\r\n            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a\r\n            paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n            <br>\r\n            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been\r\n            rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the\r\n            Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could\r\n            convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with\r\n            Longe and Parole and dragged her into their agency, where they abused her for their.\r\n\r\n        </div>\r\n        <div>\r\n\r\n            <mat-form-field>\r\n                <mat-label>Size</mat-label>\r\n                <mat-select>\r\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                        {{food.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"button-group\">\r\n            <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button space\">BUY NOW\r\n            </button>\r\n\r\n            <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\r\n                ADD TO CART\r\n            </button>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"description-tabs\">\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Description\">\r\n            <h2 style=\"font-weight: 400;\">Nike Free RN 2019 iD</h2>\r\n            <div class=\"description\"> On her way she met a copy. The copy warned the Little Blind Text, that where it\r\n                came from it would have\r\n                been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and\r\n                the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said\r\n                could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her\r\n                drunk with Longe and Parole and dragged her into their agency, where they abused her for their.\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Manufacturer\">\r\n            <h2 style=\"font-weight: 400;\">Manufactured By Nike</h2>\r\n            <div class=\"description\"> On her way she met a copy. The copy warned the Little Blind Text, that where it\r\n                came from it would have been\r\n                rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the\r\n                Little Blind Text should turn around and return to its own, safe country. But nothing the copy said\r\n                could\r\n                convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk\r\n                with\r\n                Longe and Parole and dragged her into their agency, where they abused her for their.\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Reviews\">\r\n            <h2 style=\"font-weight: 400;\">23 Reviews</h2>\r\n            <div class=\"flex-box-transparent message-box\" style=\"padding: 0; margin-top: 5px;\"\r\n                *ngFor=\"let message of messages\">\r\n                <div class=\"img-box\">\r\n                    <img src=\"{{message.image}}\" width=\"60px\" height=\"60px\" style=\"border-radius: 50%;\" />\r\n                </div>\r\n                <div class=\"detail-box\">\r\n                    <div>\r\n                        <span style=\"font-weight: 400; font-size: 14px;\"><a>{{message.name}}</a></span>\r\n                    </div>\r\n                    <div>\r\n                        5 Star\r\n                    </div>\r\n                    <div class=\"message\">\r\n                        <span>{{message.details}}</span>\r\n                    </div>\r\n                    <div class=\"time\" style=\"margin-top: 5px;\">\r\n                        <span style=\"color: gray;\">{{message.time}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"products-container\">\r\n    <div class=\"title\">\r\n        Similar Products\r\n        <button mat-button mat-raised-button color=\"primary\" style =\"background-color:9741a4 !important;\" class=\"viewAllBtn\">\r\n            View All\r\n        </button>\r\n    </div>\r\n    <div class=\"body\">\r\n        <mat-card class=\"example-card\" *ngFor=\"let item of simillarProducts\" (click)=\"productHome()\">\r\n            <img class=\"productImg\" mat-card-image src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                <p> NIKE FREE RN 2019 ID</p>\r\n                <p>#1200.00</p>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\r\n                    ADD TO CART\r\n                </button>\r\n                <button mat-button>SHARE\r\n                </button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div class=\"mobile-view\">\r\n    <div class=\"title\">\r\n        Similar Products\r\n        <button mat-button mat-raised-button color=\"primary\" style =\"background-color:9741a4 !important;\" class=\"viewAllBtn\">\r\n            View All\r\n        </button>\r\n    </div>\r\n    <div class=\"mobile-card\" *ngFor=\"let item of simillarProducts\" (click)=\"productHome()\">\r\n        <div class=\"header\">\r\n            <img width=\"150px\" height=\"150px\" src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\">\r\n        </div>\r\n        <div class=\"footer\">\r\n            asdfasdf\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myprofile/shopping-cart/shopping-cart.component */ "./src/app/myprofile/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myprofile/profile-information/profile-information.component */ "./src/app/myprofile/profile-information/profile-information.component.ts");
/* harmony import */ var _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myprofile/manage-address/manage-address.component */ "./src/app/myprofile/manage-address/manage-address.component.ts");
/* harmony import */ var _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myprofile/reviews-rating/reviews-rating.component */ "./src/app/myprofile/reviews-rating/reviews-rating.component.ts");
/* harmony import */ var _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myprofile/saved-cards/saved-cards.component */ "./src/app/myprofile/saved-cards/saved-cards.component.ts");
/* harmony import */ var _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myprofile/wishlist/wishlist.component */ "./src/app/myprofile/wishlist/wishlist.component.ts");
/* harmony import */ var _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./myprofile/my-rewards/my-rewards.component */ "./src/app/myprofile/my-rewards/my-rewards.component.ts");
/* harmony import */ var _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myprofile/notifications/notifications.component */ "./src/app/myprofile/notifications/notifications.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-service */ "./src/app/services/auth-service.ts");
















const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
    },
    {
        path: 'product/:id',
        component: _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_5__["SingleProductComponent"]
    },
    {
        path: 'shopping-cart',
        component: _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"]
    },
    {
        path: 'myprofile',
        component: _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_7__["MyprofileComponent"],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]],
        children: [
            {
                path: 'profile',
                component: _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__["ProfileInformationComponent"]
            },
            {
                path: 'address',
                component: _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_9__["ManageAddressComponent"]
            },
            {
                path: 'notifications',
                component: _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"]
            },
            {
                path: 'reviews',
                component: _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_10__["ReviewsRatingComponent"]
            },
            {
                path: 'carddetails',
                component: _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_11__["SavedCardsComponent"]
            },
            {
                path: 'wishlist',
                component: _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"]
            },
            {
                path: 'rewards',
                component: _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_13__["MyRewardsComponent"]
            },
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '*', redirectTo: 'home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 100%;\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\nmat-drawer-container {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIG1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gIH0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgdG9wOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Cec-Market';
        this.sideNavMenu = [
            {
                title: 'home',
                link: '/home'
            },
            {
                title: 'products',
                link: '/products'
            },
            {
                title: 'images',
                link: ''
            },
            {
                title: 'contact-us',
                link: ''
            }
        ];
    }
    toggelNavbar() {
        this.drawer.toggle();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', { static: false })
], AppComponent.prototype, "drawer", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/sidenav/sidenav.component */ "./src/app/common/sidenav/sidenav.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/slider/slider.component */ "./src/app/common/slider/slider.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./myprofile/shopping-cart/shopping-cart.component */ "./src/app/myprofile/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myprofile/profile-information/profile-information.component */ "./src/app/myprofile/profile-information/profile-information.component.ts");
/* harmony import */ var _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./myprofile/manage-address/manage-address.component */ "./src/app/myprofile/manage-address/manage-address.component.ts");
/* harmony import */ var _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./myprofile/saved-cards/saved-cards.component */ "./src/app/myprofile/saved-cards/saved-cards.component.ts");
/* harmony import */ var _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./myprofile/my-rewards/my-rewards.component */ "./src/app/myprofile/my-rewards/my-rewards.component.ts");
/* harmony import */ var _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./myprofile/reviews-rating/reviews-rating.component */ "./src/app/myprofile/reviews-rating/reviews-rating.component.ts");
/* harmony import */ var _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./myprofile/notifications/notifications.component */ "./src/app/myprofile/notifications/notifications.component.ts");
/* harmony import */ var _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./myprofile/wishlist/wishlist.component */ "./src/app/myprofile/wishlist/wishlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _common_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"],
            _common_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
            _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
            _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_15__["SingleProductComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"],
            _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__["MyprofileComponent"],
            _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_19__["ProfileInformationComponent"],
            _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_20__["ManageAddressComponent"],
            _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_21__["SavedCardsComponent"],
            _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_22__["MyRewardsComponent"],
            _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_23__["ReviewsRatingComponent"],
            _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_24__["NotificationsComponent"],
            _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__["WishlistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            // Material
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__["OwlModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: black;\n  color: white;\n}\n\n.footer .container {\n  padding: 0px 5%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n}\n\n.first {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.second {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.third {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.footer .copyright {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.list {\n  list-style: none;\n  text-align: center;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9DOlxcVXNlcnNcXEJpZ3NhbVxcRGVza3RvcFxcYmFzaWMtZWNvbW1lcmNlLWFuZ3VsYXItYXBwL3NyY1xcYXBwXFxjb21tb25cXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDR0o7O0FEQUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxrQkFBQTtBQ0dKOztBRENBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvb3RlciAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5maXJzdCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGhpcmQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG4uZm9vdGVyIC5jb3B5cmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyIC5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlyc3Qge1xuICBmbGV4OiAxO1xufVxuXG4uc2Vjb25kIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGhpcmQge1xuICBmbGV4OiAxO1xufVxuXG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/common/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-box {\n  background: #262626;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #fff;\n  font-size: 12px;\n  padding: 0px 2%;\n}\n\n.contact-box .first {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.contact-box .second {\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n\n.contact-box .third {\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n\n.header-box {\n  background-color: #9741a4;\n  color: white !important;\n  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);\n}\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  text-align: center;\n  padding: 10px 2%;\n}\n\n.menu {\n  display: -webkit-box;\n  display: flex;\n}\n\n.list {\n  list-style: none;\n}\n\n.list .contain:hover {\n  color: #3f51b5;\n}\n\n.list li {\n  display: inline-block;\n  cursor: pointer;\n  margin: 0px 20px;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  vertical-align: middle;\n}\n\n.list .contain:focus {\n  outline: none;\n}\n\n.list .active {\n  color: #3f51b5;\n  outline: none;\n}\n\n.logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n\n.mobile-view {\n  display: none;\n}\n\n.sidenavEnable {\n  display: none;\n}\n\n.profile-menu {\n  display: none;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 120px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 3px 8px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n  font-size: 12px;\n}\n\n.dropdown-content a:hover {\n  background-color: #3f51b5;\n  color: white;\n}\n\n@media (max-width: 1080px) {\n  .contact-box {\n    display: none;\n  }\n\n  .menu {\n    display: none;\n  }\n\n  .mobile-view {\n    display: block !important;\n    font-size: 30px;\n  }\n\n  .sidenavEnable {\n    display: inline !important;\n    -webkit-transform: translateY(-50%) scaleY(0);\n            transform: translateY(-50%) scaleY(0);\n  }\n\n  .container {\n    padding: 10px 5%;\n  }\n}\n\n.example-container {\n  width: 400px;\n  height: 100%;\n  margin: 12px;\n  border: 1px solid #555;\n  z-index: 2;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9DOlxcVXNlcnNcXEJpZ3NhbVxcRGVza3RvcFxcYmFzaWMtZWNvbW1lcmNlLWFuZ3VsYXItYXBwL3NyY1xcYXBwXFxjb21tb25cXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQ0tKOztBREhBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7QUNTSjs7QURQQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLHNCQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0FDV0o7O0FEUkE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ1dKOztBRGNBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDWEo7O0FEY0E7RUFDSSxhQUFBO0FDWEo7O0FEYUE7RUFDSSxhQUFBO0FDVko7O0FEWUE7RUFDSSxhQUFBO0FDVEo7O0FEV0E7RUFDSSxrQkFBQTtBQ1JKOztBRFVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ1BKOztBRFVFO0VBQ0UsY0FBQTtBQ1BKOztBRFVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUEo7O0FEVUU7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNQTjs7QURZRTtFQUNFO0lBQ00sYUFBQTtFQ1RSOztFRFdFO0lBQ0ksYUFBQTtFQ1JOOztFRFVFO0lBQ0kseUJBQUE7SUFDQSxlQUFBO0VDUE47O0VEU0U7SUFDSSwwQkFBQTtJQUNBLDZDQUFBO1lBQUEscUNBQUE7RUNOTjs7RURRRTtJQUNJLGdCQUFBO0VDTE47QUFDRjs7QURTQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtYm94e1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIlO1xyXG59XHJcbi5jb250YWN0LWJveCAuZmlyc3R7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGFjdC1ib3ggLnNlY29uZHtcclxuICAgIGZsZXg6IDI7XHJcbn1cclxuLmNvbnRhY3QtYm94IC50aGlyZHtcclxuICAgIGZsZXg6IDI7XHJcbn1cclxuLmhlYWRlci1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc0MWE0O1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMiU7XHJcbn1cclxuLm1lbnV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5saXN0e1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgXHJcbn1cclxuLmxpc3QgLmNvbnRhaW46aG92ZXIge1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuLmxpc3QgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4OyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5saXN0IC5jb250YWluOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5saXN0IC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi8vIC5sb2dpbi1ib3h7XHJcbi8vICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICBcclxuLy8gfVxyXG4vLyAubG9naW4tYm94IC5jb250YWluOmhvdmVyIHtcclxuLy8gICAgIGNvbG9yOiAjM2Y1MWI1O1xyXG4vLyB9XHJcbi8vIC5sb2dpbi1ib3ggbGl7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBtYXJnaW46IDBweCAyMHB4OyBcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyB9XHJcbi8vIC5sb2dpbi1ib3ggLmNvbnRhaW46Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ2luLWJveCAuYWN0aXZlIHtcclxuLy8gICAgIGNvbG9yOiAjM2Y1MWI1O1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gfVxyXG5cclxuLmxvZ297XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9iaWxlLXZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2lkZW5hdkVuYWJsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnByb2ZpbGUtbWVudXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgLmNvbnRhY3QtYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWVudXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZS12aWV3e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXZFbmFibGV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwKTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1JTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbiIsIi5jb250YWN0LWJveCB7XG4gIGJhY2tncm91bmQ6ICMyNjI2MjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwcHggMiU7XG59XG5cbi5jb250YWN0LWJveCAuZmlyc3Qge1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1ib3ggLnNlY29uZCB7XG4gIGZsZXg6IDI7XG59XG5cbi5jb250YWN0LWJveCAudGhpcmQge1xuICBmbGV4OiAyO1xufVxuXG4uaGVhZGVyLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzQxYTQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyJTtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0IC5jb250YWluOmhvdmVyIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5saXN0IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXN0IC5jb250YWluOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxpc3QgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2JpbGUtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlbmF2RW5hYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2ZpbGUtbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWN0LWJveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5zaWRlbmF2RW5hYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGVZKDApO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweCA1JTtcbiAgfVxufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgei1pbmRleDogMjtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");








let HeaderComponent = class HeaderComponent {
    constructor(dialog, router, loginService, loadingService) {
        this.dialog = dialog;
        this.router = router;
        this.loginService = loginService;
        this.loadingService = loadingService;
        this.sidenavEnable = false;
        this.sidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    toggelSidenav() {
        this.sidenav.emit('toggel');
    }
    ngOnInit() {
        this.loginService.loggedIn.subscribe(next => {
            this.user = next;
        });
        this.loadingService.progressEnable.subscribe(next => {
            this.loadingEnable = next;
        });
    }
    enableSidenav() {
        this.sidenavEnable = !this.sidenavEnable;
    }
    openLoginDialog() {
        const dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {});
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    logout() {
        this.user = null;
        this.loginService.loggedIn.next(this.user);
        this.router.navigate(['home']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "sidenav", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  list-style: none;\n  width: 100%;\n  padding: 0;\n  border-bottom: 1px solid lightcyan;\n}\n\n.list .contain:hover {\n  color: #3f51b5;\n}\n\n.list li {\n  padding: 10px 0px;\n  color: black;\n  cursor: pointer;\n}\n\n.list .contain:focus {\n  outline: none;\n}\n\n.list .active {\n  color: #3f51b5;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NpZGVuYXYvQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcY29tbW9uXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDRCxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDQ0g7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0e1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGN5YW47XHJcbn1cclxuLmxpc3QgLmNvbnRhaW46aG92ZXIge1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuXHJcbi5saXN0IGxpe1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpc3QgLmNvbnRhaW46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5saXN0IC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59IiwiLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbn1cblxuLmxpc3QgLmNvbnRhaW46aG92ZXIge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLmxpc3QgbGkge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0IC5jb250YWluOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxpc3QgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");






let SidenavComponent = class SidenavComponent {
    constructor(dialog, router, loginService) {
        this.dialog = dialog;
        this.router = router;
        this.loginService = loginService;
        this.sidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profileMenu = [
            {
                title: 'My Profile',
                link: '/myprofile/profile',
                icon: 'person'
            },
            {
                title: 'Saved Cards',
                link: '/myprofile/carddetails',
                icon: 'account_balance'
            },
            {
                title: 'My Address',
                link: '/myprofile/address',
                icon: 'border_color'
            },
            {
                title: 'My Orders',
                link: '/myprofile/orders',
                icon: 'next_week'
            },
            {
                title: 'My Cart',
                link: '/shopping-cart',
                icon: 'add_shopping_cart'
            },
            {
                title: 'My Wishlist',
                link: '/myprofile/wishlist',
                icon: 'shopping_cart'
            },
        ];
        this.myStuff = [
            {
                title: 'My Reviews',
                link: '/myprofile/reviews',
                icon: 'rate_review'
            },
            {
                title: 'My Rewards',
                link: '/myprofile/rewards',
                icon: 'rate_review'
            },
        ];
    }
    toggelSidenav() {
        this.sidenav.emit('toggel');
    }
    ngOnInit() {
        this.loginService.loggedIn.subscribe(next => {
            this.user = next;
        });
    }
    goToMyProfile() {
        this.toggelSidenav();
        this.router.navigate(['myprofile']);
    }
    logout() {
        this.toggelSidenav();
        this.user = null;
        this.loginService.loggedIn.next(this.user);
        this.router.navigate(['home']);
    }
    openLoginDialog() {
        this.toggelSidenav();
        const dialogRef = this.dialog.open(src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], {});
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
SidenavComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavComponent.prototype, "sidenav", void 0);
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/sidenav/sidenav.component.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/common/sidenav/sidenav.component.scss")]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/common/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.carouselOptions = {
            items: 1,
            dots: true,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.images = [
            {
                text: "Festive Deer",
                image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb25-RA-demo.png"
            },
            {
                text: "Festive Deer",
                image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb25-RA-demo.png"
            },
            {
                text: "Festive Deer",
                image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb14-RA-demo.png"
            },
            {
                text: "Morning Greens",
                image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb05-RA-preview.png"
            },
        ];
    }
    ngOnInit() {
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/common/slider/slider.component.scss")]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: white;\n  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);\n  margin-top: 35px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.search-text {\n  padding: 10px;\n  -webkit-box-flex: 20;\n          flex: 20;\n  font-size: 12px;\n  color: #656565;\n  line-height: 1.5;\n}\n\n.icon {\n  border-right: 1px solid lightgrey;\n  margin: 5px;\n}\n\n.icon, .close {\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: #656565;\n}\n\n.leftIcon {\n  padding: 2px;\n  padding-left: 7px;\n}\n\n.products-container {\n  background: #f8f9fa !important;\n  position: relative;\n}\n\n.title {\n  border-left: 5px solid #3f51b5;\n  padding-left: 10px;\n  position: relative;\n  font-size: 30px;\n  font-weight: normal;\n  color: #000000;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.viewAllBtn {\n  float: right;\n  margin-top: 10px;\n  border-radius: 0;\n}\n\n.body {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.body .productImg {\n  padding: 18px;\n  width: 100%;\n  height: 200px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.mobile-view {\n  display: none;\n}\n\n.mobile-view .mobile-card {\n  width: 48%;\n  text-align: center;\n  background: #fff;\n  margin: 2px;\n}\n\n@media (max-width: 1080px) {\n  .products-container {\n    display: none;\n  }\n\n  .mobile-view {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n  }\n\n  .title {\n    border-left: 5px solid #3f51b5;\n    padding-left: 10px;\n    position: relative;\n    font-size: 20px;\n    font-weight: 600;\n    color: #000000;\n    margin-left: 0.5%;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJpZ3NhbVxcRGVza3RvcFxcYmFzaWMtZWNvbW1lcmNlLWFuZ3VsYXItYXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO1VBQUEsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsY0FBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEQUE7RUFDSSw4QkFBQTtFQUVBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDS0o7O0FEQUE7RUFDSSxtRkFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURBQTtFQUNJO0lBQ0ksYUFBQTtFQ0dOOztFRERFO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUNJTjs7RURGRTtJQUNJLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ0tOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNlYXJjaC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmbGV4OiAyMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uaWNvbntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5pY29uICwgLmNsb3Nle1xyXG4gICAgZmxleDogMTtcclxuICAgIGNvbG9yOiAjNjU2NTY1O1xyXG59XHJcblxyXG4ubGVmdEljb24ge1xyXG4gICAgcGFkZGluZzogMnB4OyBcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG59XHJcblxyXG5cclxuLnByb2R1Y3RzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICAvLyAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzZjUxYjU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcbi52aWV3QWxsQnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5ib2R5IC5wcm9kdWN0SW1nIHtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1vYmlsZS12aWV3e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vYmlsZS12aWV3IC5tb2JpbGUtY2FyZCB7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAucHJvZHVjdHMtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZS12aWV3IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn0iLCIuc2VhcmNoLWJveCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZWFyY2gtdGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsZXg6IDIwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uaWNvbiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5pY29uLCAuY2xvc2Uge1xuICBmbGV4OiAxO1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmxlZnRJY29uIHtcbiAgcGFkZGluZzogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cblxuLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGl0bGUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzZjUxYjU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi52aWV3QWxsQnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib2R5IC5wcm9kdWN0SW1nIHtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tb2JpbGUtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2JpbGUtdmlldyAubW9iaWxlLWNhcmQge1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");






let HomeComponent = class HomeComponent {
    constructor(iconRegistry, sanitizer, router, productService) {
        this.router = router;
        this.productService = productService;
        this.carouselOptions = {
            items: 1,
            dots: false,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.images = [];
        this.images = this.productService.getAllProducts();
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    ngOnInit() {
    }
    productHome() {
        this.router.navigate(['product/12']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 280px;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI4MHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginComponent = class LoginComponent {
    constructor(dialogRef, data, loginService, fb, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loginService = loginService;
        this.fb = fb;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            mobileNumber: [''],
            password: ['']
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.user.mobileNumber = this.loginForm.value.mobileNumber;
            this.loginService.loggedIn.next(this.user);
            this.onNoClick();
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/myprofile/manage-address/manage-address.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/myprofile/manage-address/manage-address.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px;\n}\n\n.box {\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n}\n\n.form-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-box mat-form-field {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL21hbmFnZS1hZGRyZXNzL0M6XFxVc2Vyc1xcQmlnc2FtXFxEZXNrdG9wXFxiYXNpYy1lY29tbWVyY2UtYW5ndWxhci1hcHAvc3JjXFxhcHBcXG15cHJvZmlsZVxcbWFuYWdlLWFkZHJlc3NcXG1hbmFnZS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teXByb2ZpbGUvbWFuYWdlLWFkZHJlc3MvbWFuYWdlLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQ0VKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL21hbmFnZS1hZGRyZXNzL21hbmFnZS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG4uYm94e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmZvcm0tYm94e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmZvcm0tYm94IG1hdC1mb3JtLWZpZWxke1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZvcm0tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JtLWJveCBtYXQtZm9ybS1maWVsZCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/myprofile/manage-address/manage-address.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/manage-address/manage-address.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressComponent", function() { return ManageAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ManageAddressComponent = class ManageAddressComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.addressForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            pincode: [],
            locality: [],
            address: []
        });
    }
};
ManageAddressComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ManageAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-address',
        template: __webpack_require__(/*! raw-loader!./manage-address.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/manage-address/manage-address.component.html"),
        styles: [__webpack_require__(/*! ./manage-address.component.scss */ "./src/app/myprofile/manage-address/manage-address.component.scss")]
    })
], ManageAddressComponent);



/***/ }),

/***/ "./src/app/myprofile/my-rewards/my-rewards.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/myprofile/my-rewards/my-rewards.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px;\n}\n\n.no-rewards {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL215LXJld2FyZHMvQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcbXlwcm9maWxlXFxteS1yZXdhcmRzXFxteS1yZXdhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teXByb2ZpbGUvbXktcmV3YXJkcy9teS1yZXdhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS9teS1yZXdhcmRzL215LXJld2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59XHJcbi5uby1yZXdhcmRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm5vLXJld2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/myprofile/my-rewards/my-rewards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/myprofile/my-rewards/my-rewards.component.ts ***!
  \**************************************************************/
/*! exports provided: MyRewardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRewardsComponent", function() { return MyRewardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyRewardsComponent = class MyRewardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyRewardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-rewards',
        template: __webpack_require__(/*! raw-loader!./my-rewards.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/my-rewards/my-rewards.component.html"),
        styles: [__webpack_require__(/*! ./my-rewards.component.scss */ "./src/app/myprofile/my-rewards/my-rewards.component.scss")]
    })
], MyRewardsComponent);



/***/ }),

/***/ "./src/app/myprofile/myprofile.component.scss":
/*!****************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\n  background: #f8f9fa !important;\n  min-height: 800px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 20px 10%;\n  color: black;\n}\n\n.profile-container .sidebar {\n  min-height: 400px;\n  -webkit-box-flex: 2;\n          flex: 2;\n  margin-right: 20px;\n}\n\n.profile-container .sidebar .profile {\n  min-height: 50px;\n  background: #fff;\n  padding: 10px;\n  font-weight: 400;\n  font-size: 14px;\n  color: black;\n}\n\n.profile-container .sidebar .settings {\n  margin-top: 20px;\n  min-height: 650px;\n  background: #fff;\n}\n\n.profile-container .main {\n  min-height: 400px;\n  background: #fff;\n  -webkit-box-flex: 4;\n          flex: 4;\n  padding: 20px;\n  font-size: 12px;\n}\n\n.lastName {\n  margin-left: 5px;\n}\n\n.settings {\n  position: relative;\n}\n\n.settings .list {\n  padding: 0px 5%;\n  display: -webkit-box;\n  display: flex;\n  min-height: 50px;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.left-icon {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.title {\n  -webkit-box-flex: 3;\n          flex: 3;\n}\n\n.right-icon {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.settings .list .contain {\n  margin-top: 6%;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.settings .list .contain:hover {\n  color: #3f51b5;\n}\n\n.settings .list .child-list {\n  -webkit-box-flex: 0;\n          flex: 0 0 100%;\n}\n\n.settings .list .child-list ul {\n  list-style: none;\n  padding: 0;\n}\n\n.settings .list .child-list li {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  padding-left: 20px;\n  cursor: pointer;\n}\n\n.settings .list .child-list li:hover {\n  color: #3f51b5;\n  background: #f5faff;\n}\n\n.active {\n  background: #f5faff;\n}\n\n@media (max-width: 1080px) {\n  .sidebar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL0M6XFxVc2Vyc1xcQmlnc2FtXFxEZXNrdG9wXFxiYXNpYy1lY29tbWVyY2UtYW5ndWxhci1hcHAvc3JjXFxhcHBcXG15cHJvZmlsZVxcbXlwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teXByb2ZpbGUvbXlwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw0Q0FBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTUo7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESEE7RUFDSSxtQkFBQTtVQUFBLGNBQUE7QUNNSjs7QURIQTtFQUVJLGdCQUFBO0VBQ0EsVUFBQTtBQ0tKOztBREhBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ01KOztBREhBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtBQ09KOztBREpBO0VBQ0k7SUFDSSxhQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS9teXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMjBweCAxMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciAuc2lkZWJhcntcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgZmxleDogMjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbn1cclxuLnByb2ZpbGUtY29udGFpbmVyIC5zaWRlYmFyIC5wcm9maWxle1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ucHJvZmlsZS1jb250YWluZXIgLnNpZGViYXIgLnNldHRpbmdze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIC5tYWlue1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZmxleDogNDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5sYXN0TmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZXR0aW5ncyAubGlzdHtcclxuICAgIHBhZGRpbmc6IDBweCA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLmxlZnQtaWNvbntcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZsZXg6IDM7XHJcbn1cclxuLnJpZ2h0LWljb257XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5zZXR0aW5ncyAubGlzdCAuY29udGFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG59XHJcbi5zZXR0aW5ncyAubGlzdCAuY29udGFpbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxuLnNldHRpbmdzIC5saXN0IC5jaGlsZC1saXN0IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG59XHJcblxyXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgdWx7XHJcblxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNldHRpbmdzIC5saXN0IC5jaGlsZC1saXN0IGxpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGk6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWZhZmY7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmNWZhZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIC5zaWRlYmFye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIucHJvZmlsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHggMTAlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAuc2lkZWJhciB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBmbGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAuc2lkZWJhciAucHJvZmlsZSB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJvZmlsZS1jb250YWluZXIgLnNpZGViYXIgLnNldHRpbmdzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLWhlaWdodDogNjUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmbGV4OiA0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYXN0TmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNldHRpbmdzIC5saXN0IHtcbiAgcGFkZGluZzogMHB4IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5sZWZ0LWljb24ge1xuICBmbGV4OiAxO1xufVxuXG4udGl0bGUge1xuICBmbGV4OiAzO1xufVxuXG4ucmlnaHQtaWNvbiB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZXR0aW5ncyAubGlzdCAuY29udGFpbiB7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNldHRpbmdzIC5saXN0IC5jb250YWluOmhvdmVyIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5zZXR0aW5ncyAubGlzdCAuY2hpbGQtbGlzdCB7XG4gIGZsZXg6IDAgMCAxMDAlO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGk6aG92ZXIge1xuICBjb2xvcjogIzNmNTFiNTtcbiAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmNWZhZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.ts ***!
  \**************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyprofileComponent = class MyprofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myprofile',
        template: __webpack_require__(/*! raw-loader!./myprofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/myprofile.component.html"),
        styles: [__webpack_require__(/*! ./myprofile.component.scss */ "./src/app/myprofile/myprofile.component.scss")]
    })
], MyprofileComponent);



/***/ }),

/***/ "./src/app/myprofile/notifications/notifications.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/notifications/notifications.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/myprofile/notifications/notifications.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/myprofile/notifications/notifications.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationsComponent = class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/notifications/notifications.component.html"),
        styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/myprofile/notifications/notifications.component.scss")]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/myprofile/profile-information/profile-information.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/myprofile/profile-information/profile-information.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-box mat-form-field {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcbXlwcm9maWxlXFxwcm9maWxlLWluZm9ybWF0aW9uXFxwcm9maWxlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teXByb2ZpbGUvcHJvZmlsZS1pbmZvcm1hdGlvbi9wcm9maWxlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5mb3JtLWJveCBtYXQtZm9ybS1maWVsZHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iLCIuZm9ybS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZvcm0tYm94IG1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/myprofile/profile-information/profile-information.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/myprofile/profile-information/profile-information.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationComponent", function() { return ProfileInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ProfileInformationComponent = class ProfileInformationComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            gender: [],
            mobile: [],
            email: []
        });
    }
};
ProfileInformationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ProfileInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-information',
        template: __webpack_require__(/*! raw-loader!./profile-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/profile-information/profile-information.component.html"),
        styles: [__webpack_require__(/*! ./profile-information.component.scss */ "./src/app/myprofile/profile-information/profile-information.component.scss")]
    })
], ProfileInformationComponent);



/***/ }),

/***/ "./src/app/myprofile/reviews-rating/reviews-rating.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/myprofile/reviews-rating/reviews-rating.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS9yZXZpZXdzLXJhdGluZy9yZXZpZXdzLXJhdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/myprofile/reviews-rating/reviews-rating.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/reviews-rating/reviews-rating.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewsRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsRatingComponent", function() { return ReviewsRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReviewsRatingComponent = class ReviewsRatingComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReviewsRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews-rating',
        template: __webpack_require__(/*! raw-loader!./reviews-rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/reviews-rating/reviews-rating.component.html"),
        styles: [__webpack_require__(/*! ./reviews-rating.component.scss */ "./src/app/myprofile/reviews-rating/reviews-rating.component.scss")]
    })
], ReviewsRatingComponent);



/***/ }),

/***/ "./src/app/myprofile/saved-cards/saved-cards.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/myprofile/saved-cards/saved-cards.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px;\n}\n\n.box {\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n}\n\n.form-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-box mat-form-field {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL3NhdmVkLWNhcmRzL0M6XFxVc2Vyc1xcQmlnc2FtXFxEZXNrdG9wXFxiYXNpYy1lY29tbWVyY2UtYW5ndWxhci1hcHAvc3JjXFxhcHBcXG15cHJvZmlsZVxcc2F2ZWQtY2FyZHNcXHNhdmVkLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teXByb2ZpbGUvc2F2ZWQtY2FyZHMvc2F2ZWQtY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQ0VKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL3NhdmVkLWNhcmRzL3NhdmVkLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG4uYm94e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmZvcm0tYm94e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmZvcm0tYm94IG1hdC1mb3JtLWZpZWxke1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZvcm0tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JtLWJveCBtYXQtZm9ybS1maWVsZCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/myprofile/saved-cards/saved-cards.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/myprofile/saved-cards/saved-cards.component.ts ***!
  \****************************************************************/
/*! exports provided: SavedCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedCardsComponent", function() { return SavedCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SavedCardsComponent = class SavedCardsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.cardForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            pincode: [],
            locality: [],
            address: []
        });
    }
};
SavedCardsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SavedCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saved-cards',
        template: __webpack_require__(/*! raw-loader!./saved-cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/saved-cards/saved-cards.component.html"),
        styles: [__webpack_require__(/*! ./saved-cards.component.scss */ "./src/app/myprofile/saved-cards/saved-cards.component.scss")]
    })
], SavedCardsComponent);



/***/ }),

/***/ "./src/app/myprofile/shopping-cart/shopping-cart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/shopping-cart/shopping-cart.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart-conatiner {\n  background: #f8f9fa !important;\n  padding: 1em 0;\n  position: relative;\n}\n\n.header {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 10%;\n  min-height: 50px;\n  color: black;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n.body {\n  background: #fff;\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 10%;\n  color: black;\n  text-align: center;\n  flex-wrap: wrap;\n}\n\n.title {\n  border-left: 5px solid #3f51b5;\n  padding-left: 10px;\n  position: relative;\n  font-size: 30px;\n  font-weight: 600;\n  color: #000000;\n  margin-left: 10%;\n}\n\n.img {\n  -webkit-box-flex: 2;\n          flex: 2;\n  margin-right: 5px;\n}\n\n.productImg {\n  width: 120px;\n  height: 100px;\n}\n\n.name {\n  -webkit-box-flex: 2;\n          flex: 2;\n  margin-right: 5px;\n}\n\n.total {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.quantity {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 5px;\n  min-width: 140px;\n}\n\n.price {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 5px;\n}\n\n.close-icon {\n  color: gray;\n  font-size: 20px;\n  overflow: hidden;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.cart-total {\n  padding: 20px;\n  min-height: 300px;\n  background: #fff;\n  width: 500px;\n  margin: 20px 28%;\n  letter-spacing: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.checkout-button {\n  text-align: center;\n  margin: 20px;\n}\n\n.full-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL3Nob3BwaW5nLWNhcnQvQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcbXlwcm9maWxlXFxzaG9wcGluZy1jYXJ0XFxzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teXByb2ZpbGUvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDT0o7O0FESkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wcGluZy1jYXJ0LWNvbmF0aW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmltZ3tcclxuICAgIGZsZXg6IDI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ucHJvZHVjdEltZyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4udG90YWx7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi5xdWFudGl0eXtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuLnByaWNle1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5jbG9zZS1pY29ue1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jYXJ0LXRvdGFsIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMjglO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLmNoZWNrb3V0LWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmZ1bGwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLnNob3BwaW5nLWNhcnQtY29uYXRpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMTAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDEwJTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmltZyB7XG4gIGZsZXg6IDI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvZHVjdEltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm5hbWUge1xuICBmbGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZmxleDogMTtcbn1cblxuLnF1YW50aXR5IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5cbi5wcmljZSB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYXJ0LXRvdGFsIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAyMHB4IDI4JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmNoZWNrb3V0LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZnVsbC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/myprofile/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/myprofile/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingCartComponent = class ShoppingCartComponent {
    constructor() {
        this.cart = [
            {
                text: "Everfresh Flowers",
                image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"
            },
            {
                text: "Festive Deer",
                image: "https://cdn140.picsart.com/268948212025211.png?r1024x1024"
            },
            {
                text: "Morning Greens",
                image: "http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"
            },
            {
                text: "Everfresh Flowers",
                image: "https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"
            },
        ];
    }
    ngOnInit() {
    }
};
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/myprofile/shopping-cart/shopping-cart.component.scss")]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/myprofile/wishlist/wishlist.component.scss":
/*!************************************************************!*\
  !*** ./src/app/myprofile/wishlist/wishlist.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/myprofile/wishlist/wishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/myprofile/wishlist/wishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WishlistComponent = class WishlistComponent {
    constructor() { }
    ngOnInit() {
    }
};
WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/wishlist/wishlist.component.html"),
        styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/myprofile/wishlist/wishlist.component.scss")]
    })
], WishlistComponent);



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-container {\n  background: #f8f9fa !important;\n  padding: 1em 0;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding: 0px 2%;\n}\n\n.sidebar {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-top: 20px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: black;\n}\n\n.sidebar .list {\n  list-style: none;\n  text-align: left;\n  padding: 0;\n}\n\n.sidebar .list .list-items {\n  font-size: 12px;\n  background: transparent;\n}\n\n.body {\n  -webkit-box-flex: 6;\n          flex: 6;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.body .productImg {\n  padding: 18px;\n  width: 100%;\n  height: 200px;\n}\n\n.mobile {\n  display: none;\n}\n\n.mobile-card-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  margin: 10px;\n}\n\n.mobile-card-img {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.mobile-card-details {\n  -webkit-box-flex: 3;\n          flex: 3;\n  margin-left: 20px;\n}\n\n@media (max-width: 1080px) {\n  .products-container {\n    display: none;\n  }\n\n  .mobile {\n    display: block;\n    background: #fff;\n    margin: 10px 0px;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNHSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQWdCSTtJQUNJLGFBQUE7RUNkTjs7RURnQkU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUNiTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2R1Y3RzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCAyJTtcclxufVxyXG4uc2lkZWJhcntcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNpZGViYXIgIC5saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZGViYXIgLmxpc3QgLmxpc3QtaXRlbXN7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYm9keXtcclxuICAgIGZsZXg6IDY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5ib2R5IC5wcm9kdWN0SW1nIHtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLm1vYmlsZS1jYXJkLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5cclxufVxyXG4ubW9iaWxlLWNhcmQtaW1ne1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1vYmlsZS1jYXJkLWRldGFpbHMge1xyXG4gICAgZmxleDogMztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAvLyAuc2lkZWJhciB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vIH1cclxuICAgIC8vIC5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAuZXhhbXBsZS1jYXJkIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5ib2R5IC5wcm9kdWN0SW1nIHtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG4gICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iLCIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggMiU7XG59XG5cbi5zaWRlYmFyIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaWRlYmFyIC5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXIgLmxpc3QgLmxpc3QtaXRlbXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYm9keSB7XG4gIGZsZXg6IDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib2R5IC5wcm9kdWN0SW1nIHtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlLWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1vYmlsZS1jYXJkLWltZyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9iaWxlLWNhcmQtZGV0YWlscyB7XG4gIGZsZXg6IDM7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");






let ProductsComponent = class ProductsComponent {
    constructor(router, productService) {
        this.router = router;
        this.productService = productService;
        this.carouselOptions = {
            items: 1,
            dots: false,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.products = [];
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
        this.products = this.productService.getAllProducts();
    }
    ngOnInit() {
    }
    productHome(id) {
        this.router.navigate(['product/' + id]);
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
    })
], ProductsComponent);

const TREE_DATA = [
    {
        name: 'Mens',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    }, {
        name: 'Womens',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    }, {
        name: 'Child',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    },
];


/***/ }),

/***/ "./src/app/services/auth-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth-service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");




let AuthService = class AuthService {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate() {
        this.loginService.loggedIn.subscribe(next => {
            this.user = next;
        });
        if (this.user) {
            return true;
        }
        this.router.navigate(['home']);
        return false;
    }
};
AuthService.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingService = class LoadingService {
    constructor() {
        this.loading = false;
        this.progressEnable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loading);
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoginService = class LoginService {
    constructor() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.user);
    }
    isLoggedIn() {
        console.log(this.loggedIn);
        return true;
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");




let ProductService = class ProductService {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.products = [
            {
                id: 1,
                text: "Everfresh Flowers",
                image: ["http://www.getsygnal.com/uploads/products/3147701531479054.gif"]
            },
            {
                id: 2,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 3,
                text: "Morning Greens",
                image: ["http://www.getsygnal.com/uploads/products/3147701531479054.gif"]
            },
            {
                id: 4,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 5,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 6,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 7,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 8,
                text: "Morning Greens",
                image: ["http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"]
            },
            {
                id: 9,
                text: "Everfresh Flowers",
                image: ["http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8109.png"]
            },
            {
                id: 10,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 11,
                text: "Morning Greens",
                image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
            },
            {
                id: 12,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 13,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 14,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
        ];
        this.simillarProducts = [
            {
                id: 1,
                text: "Everfresh Flowers",
                image: ["https://ledscreensandlights.com/wp-content/uploads/2018/08/9.gif"]
            },
            {
                id: 2,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 3,
                text: "Morning Greens",
                image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
            },
            {
                id: 4,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
        ];
    }
    getAllProducts() {
        return this.products;
    }
    getSimillarProducts() {
        return this.simillarProducts;
    }
    getSingleProduct(id) {
        let temp;
        this.products.forEach(element => {
            if (element.id == id) {
                temp = element;
            }
        });
        const loading = false;
        this.loadingService.progressEnable.next(loading);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => observer.next(temp));
    }
};
ProductService.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/single-product/single-product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/single-product/single-product.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conatiner {\n  background: #f8f9fa !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 20px 2%;\n  font-weight: 400;\n  color: black;\n}\n\n.product-img-container {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 20px;\n  background: #fff;\n}\n\n.product-description {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.buy-now-button {\n  border-radius: 0;\n}\n\n.buy-now-button.space {\n  margin-right: 10px;\n}\n\n.rating {\n  margin-left: 10px;\n}\n\n.sold {\n  margin-left: 10px;\n}\n\n.description {\n  font-size: 14px;\n  color: gray;\n  -webkit-animation: animate 1s linear forwards;\n          animation: animate 1s linear forwards;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n  }\n  100% {\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n\n@keyframes animate {\n  0% {\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n  }\n  100% {\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n\n.description-tabs {\n  margin: 0px 2%;\n  min-height: 300px;\n  color: black;\n}\n\n.img-box {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.detail-box {\n  -webkit-box-flex: 12;\n          flex: 12;\n}\n\n.products-container {\n  background: #f8f9fa !important;\n  padding: 1em 0;\n  position: relative;\n}\n\n.title {\n  border-left: 5px solid #3f51b5;\n  padding-left: 10px;\n  position: relative;\n  font-size: 30px;\n  font-weight: 600;\n  color: #000000;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.viewAllBtn {\n  float: right;\n  margin-top: 10px;\n  border-radius: 0;\n}\n\n.body {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.body .productImg {\n  padding: 18px;\n  width: 100%;\n  height: 200px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.mobile-view {\n  display: none;\n}\n\n.mobile-view .mobile-card {\n  width: 48%;\n  text-align: center;\n  background: #fff;\n  margin: 2px;\n}\n\n@media (max-width: 1080px) {\n  .conatiner {\n    display: block;\n    padding: 20px 5%;\n  }\n\n  .products-container {\n    display: none;\n  }\n\n  .description-tabs {\n    margin: 0px 2%;\n    margin-bottom: 10px;\n  }\n\n  .mobile-view {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n  }\n\n  .title {\n    border-left: 5px solid #3f51b5;\n    padding-left: 10px;\n    position: relative;\n    font-size: 20px;\n    font-weight: 600;\n    color: #000000;\n    margin-left: 0.5%;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXByb2R1Y3QvQzpcXFVzZXJzXFxCaWdzYW1cXERlc2t0b3BcXGJhc2ljLWVjb21tZXJjZS1hbmd1bGFyLWFwcC9zcmNcXGFwcFxcc2luZ2xlLXByb2R1Y3RcXHNpbmdsZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcHJvZHVjdC9zaW5nbGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ0VKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQ0dKOztBRERBO0VBQ0k7SUFHSSx5QkFBQTtZQUFBLGlCQUFBO0VDRU47RURBRTtJQUdJLHVCQUFBO1lBQUEsZUFBQTtFQ0FOO0FBQ0Y7O0FEVkE7RUFDSTtJQUdJLHlCQUFBO1lBQUEsaUJBQUE7RUNFTjtFREFFO0lBR0ksdUJBQUE7WUFBQSxlQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDQyxvQkFBQTtVQUFBLFFBQUE7QUNDRDs7QURJQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FESUE7RUFDSSxtRkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNESjs7QURNQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VDSE47O0VES0U7SUFDSSxhQUFBO0VDRk47O0VESUU7SUFDSSxjQUFBO0lBQ0EsbUJBQUE7RUNETjs7RURHRTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDQU47O0VERUU7SUFDSSw4QkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uYXRpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMiU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG5cclxuLmJ1eS1ub3ctYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmJ1eS1ub3ctYnV0dG9uLnNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uc29sZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMXMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAvLyBvcGFjaXR5OiAwO1xyXG4gICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC8vb3BhY2l0eTogMTtcclxuICAgICAgICAvL3RyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10YWJze1xyXG4gICAgbWFyZ2luOiAwcHggMiU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uaW1nLWJveHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbC1ib3h7XHJcbiBmbGV4OiAxMjtcclxufVxyXG5cclxuXHJcblxyXG4ucHJvZHVjdHMtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzZjUxYjU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcbi52aWV3QWxsQnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uYm9keXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmJvZHkgLnByb2R1Y3RJbWcge1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuXHJcbiAgXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tb2JpbGUtdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2JpbGUtdmlldyAubW9iaWxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAuY29uYXRpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDUlO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbi10YWJze1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlLXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNSU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG4iLCIuY29uYXRpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJvZHVjdC1pbWctY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxO1xufVxuXG4uYnV5LW5vdy1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYnV5LW5vdy1idXR0b24uc3BhY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yYXRpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnNvbGQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDFzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufVxuLmRlc2NyaXB0aW9uLXRhYnMge1xuICBtYXJnaW46IDBweCAyJTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmltZy1ib3gge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWwtYm94IHtcbiAgZmxleDogMTI7XG59XG5cbi5wcm9kdWN0cy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnZpZXdBbGxCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJvZHkgLnByb2R1Y3RJbWcge1xuICBwYWRkaW5nOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1vYmlsZS12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vYmlsZS12aWV3IC5tb2JpbGUtY2FyZCB7XG4gIHdpZHRoOiA0OCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmNvbmF0aW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMjBweCA1JTtcbiAgfVxuXG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZGVzY3JpcHRpb24tdGFicyB7XG4gICAgbWFyZ2luOiAwcHggMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5tb2JpbGUtdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzZjUxYjU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/single-product/single-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-product/single-product.component.ts ***!
  \************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SingleProductComponent = class SingleProductComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.simillarProducts = [];
        this.messages = [
            {
                image: 'data:image/jpeg;base64,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',
                name: 'Salaman Khan',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            },
            {
                image: 'data:image/jpeg;base64,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',
                name: 'Shahrukh Khan',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            },
            {
                image: 'data:image/jpeg;base64,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',
                name: 'Katrina Kaif',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            }, {
                image: 'data:image/jpeg;base64,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',
                name: 'Salaman Khan',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            }
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Small' },
            { value: 'pizza-1', viewValue: 'Medium' },
            { value: 'tacos-2', viewValue: 'Large' }
        ];
        this.simillarProducts = this.productService.getSimillarProducts();
        this.productService.getSingleProduct(Number(this.route.snapshot.params.id)).subscribe(res => {
            this.product = res;
        });
    }
    ngOnInit() {
    }
};
SingleProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SingleProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-product',
        template: __webpack_require__(/*! raw-loader!./single-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/single-product/single-product.component.html"),
        styles: [__webpack_require__(/*! ./single-product.component.scss */ "./src/app/single-product/single-product.component.scss")]
    })
], SingleProductComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bigsam\Desktop\basic-ecommerce-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
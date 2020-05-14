import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

declare let cordova: any;
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(private platform: Platform) { }

	recordSetting() {
		console.log("recordSetting");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoPro.startRecordSetting('http://www.baidu.com');
		}
	}

	cropSetting() {
		console.log("cropSetting");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoPro.startCropSetting();
		}
  }
  
	editSetting() {
		console.log("editSetting");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoPro.startEditSetting();
		}
	}

	beauty() {
		console.log("beauty");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoPro.startBeauty();
		}
	}

	record() {
		console.log("record");
		if (this.platform.is("android")) {
			cordova.plugins.AliyunSVideoPro.startRecord();
		}
	}
}

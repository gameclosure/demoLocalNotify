/**
 * Demo for the GameClosure DevKit Local Notification Module
 * https://github.com/gameclosure/localnotify
 *
 */

import ui.TextView as TextView;
import src.views.ButtonView as ButtonView;
import src.views.RadioGroup as RadioGroup;
import src.views.ToggleView as ToggleView;
import src.views.Overlay as Overlay;
import device;

import localNotify;


exports = Class(GC.Application, function () {

  this.initUI = function () {

    // if app is open when a notification fires, show the overlay
    localNotify.onNotify = bind(this, function (notification) {
      this.showMessage(
        "Received Notification " + notification.name,
        notification.launched ? "Launched App" : void 0
        // "Custom Data: " + notification.userDefined.customData
      );
      logger.log("Received Notification: ", notification);
    });

    /***
     * UI
     */
    this.view.style.backgroundColor = 'white';

    var padding = 25;
    var labelWidth = 150;
    var radioWidth2 = (this.view.style.width - labelWidth - (padding * 3)) / 2;
    var radioWidth3 = (this.view.style.width - labelWidth - (padding * 5)) / 3;
    var buttonPadding = 25;
    var buttonWidth = (this.view.style.width - (buttonPadding * 3)) / 2;
    var buttonCount = 5;
    var buttonHeight = (this.view.style.height / 3) / buttonCount;
    var buttonsStartY = this.view.style.height - ((buttonHeight * 5) + (buttonPadding * buttonCount));
    var buttonsColumn2X = buttonWidth + (2 * buttonPadding);
    this.header = new TextView({
      superview: this.view,
      text: "Local Notification Demo",
      color: "black",
      x: 0,
      y: 25,
      width: this.view.style.width,
      height: 100
    });

    this.delayLabel = new TextView({
      superview: this.view,
      text: "Delay:",
      color: "black",
      x: 0,
      y: this.header.style.y + this.header.style.height + padding,
      width: labelWidth,
      height: 100
    });

    this.delayGroup = new RadioGroup({
      superview: this.view,
      x: this.delayLabel.style.width + padding,
      y: this.delayLabel.style.y,
      width: this.view.style.width - this.delayLabel.style.width - (padding * 2),
      height: this.delayLabel.style.height
    });
    this.delayGroup.add({
      id: '5seconds',
      text: '5 s',
      x: 0,
      y: (this.delayGroup.style.height - 44) / 3,
      width: radioWidth2,
      height: 44
    });
    this.delayGroup.add({
      id: '10seconds',
      text: '10 s',
      x: this.delayGroup.style.width / 3,
      y: (this.delayGroup.style.height - 44) / 2,
      width: radioWidth2,
      height: 44
    });
    this.delayGroup.add({
      id: '30seconds',
      text: '30 s',
      x: 2 * this.delayGroup.style.width / 3,
      y: (this.delayGroup.style.height - 44) / 2,
      width: radioWidth2,
      height: 44
    });

    this.soundLabel = new TextView({
      superview: this.view,
      text: "Sound:",
      color: "black",
      x: 0,
      y: this.delayLabel.style.y + this.delayLabel.style.height + padding,
      width: labelWidth,
      height: 100
    });

    this.soundGroup = new RadioGroup({
      superview: this.view,
      x: this.soundLabel.style.width + padding,
      y: this.soundLabel.style.y,
      width: this.view.style.width - this.soundLabel.style.width - (padding * 2),
      height: this.soundLabel.style.height
    });
    this.soundGroup.add({
      id: 'none',
      text: 'None',
      x: 0,
      y: (this.soundGroup.style.height - 44) / 2,
      width: radioWidth3,
      height: 44
    });
    this.soundGroup.add({
      id: 'default',
      text: 'Default',
      x: this.soundGroup.style.width / 3,
      y: (this.soundGroup.style.height - 44) / 2,
      width: radioWidth3,
      height: 44
    });
    // this.soundGroup.add({
    //   id: 'custom',
    //   text: 'Custom',
    //   x: 2 * this.soundGroup.style.width / 3,
    //   y: (this.soundGroup.style.height - 44) / 2,
    //   width: radioWidth3,
    //   height: 44
    // });

    // this.iconLabel = new TextView({
    //   superview: this.view,
    //   text: "Icon:",
    //   color: "black",
    //   x: 0,
    //   y: this.soundLabel.style.y + this.soundLabel.style.height + padding,
    //   width: labelWidth,
    //   height: 100
    // });

    // this.iconGroup = new RadioGroup({
    //   superview: this.view,
    //   x: this.iconLabel.style.width + padding,
    //   y: this.iconLabel.style.y,
    //   width: this.view.style.width - this.iconLabel.style.width - (padding * 2),
    //   height: this.iconLabel.style.height
    // });
    // this.iconGroup.add({
    //   id: 'default',
    //   text: 'Default',
    //   x: 0,
    //   y: (this.iconGroup.style.height - 44) / 2,
    //   width: radioWidth2,
    //   height: 44
    // });
    // this.iconGroup.add({
    //   id: 'custom',
    //   text: 'Custom',
    //   x: this.iconGroup.style.width / 2,
    //   y: (this.iconGroup.style.height - 44) / 2,
    //   width: radioWidth2,
    //   height: 44
    // });


    // this.numberLabel = new TextView({
    //   superview: this.view,
    //   text: "Number:",
    //   color: "black",
    //   x: 0,
    //   y: this.iconLabel.style.y + this.iconLabel.style.height + padding,
    //   width: labelWidth,
    //   height: 100
    // });

    // this.numberGroup = new RadioGroup({
    //   superview: this.view,
    //   x: this.numberLabel.style.width + padding,
    //   y: this.numberLabel.style.y,
    //   width: this.view.style.width - this.numberLabel.style.width - (padding * 2),
    //   height: this.numberLabel.style.height
    // });
    // this.numberGroup.add({
    //   id: '0',
    //   text: '0',
    //   x: 0,
    //   y: (this.numberGroup.style.height - 44) / 2,
    //   width: radioWidth3,
    //   height: 44
    // });
    // this.numberGroup.add({
    //   id: '1',
    //   text: '1',
    //   x: this.numberGroup.style.width / 3,
    //   y: (this.numberGroup.style.height - 44) / 2,
    //   width: radioWidth3,
    //   height: 44
    // });
    // this.numberGroup.add({
    //   id: '5',
    //   text: '5',
    //   x: 2 * this.numberGroup.style.width / 3,
    //   y: (this.numberGroup.style.height - 44) / 2,
    //   width: radioWidth3,
    //   height: 44
    // });

    // android only
    this.vibrateToggle = new ToggleView({
      superview: this.view,
      text: 'Vibrate (Android Only)',
      color: "black",
      x: buttonPadding,
      y: this.soundLabel.style.y + this.soundLabel.style.height + padding,
      width: labelWidth * 2 + buttonWidth,
      height: 44,
      visible: device.isAndroid
    });


    this.requestPermissionsButton = new ButtonView({
      superview: this.view,
      x: buttonPadding,
      y: buttonsStartY,
      width: buttonWidth * 2 + buttonPadding,
      height: buttonHeight,
      title: "Request Permission (iOS 8+)",
      onClick: bind(this, function () {
        localNotify.requestNotificationPermission()
      })
    });

    this.scheduleNotificationButton1 = new ButtonView({
      superview: this.view,
      x: buttonPadding,
      y: this.requestPermissionsButton.style.y + buttonHeight + buttonPadding,
      width: buttonWidth,
      height: buttonHeight,
      title: "Schedule Notification 1",
      onClick: bind(this, function () {
        this.scheduleNotification(1);
      })
    });

    this.scheduleNotificationButton2 = new ButtonView({
      superview: this.view,
      x: buttonsColumn2X,
      y: this.scheduleNotificationButton1.style.y,
      width: buttonWidth,
      height: buttonHeight,
      title: "Schedule Notification 2",
      onClick: bind(this, function () {
        this.scheduleNotification(2);
      })
    });

    this.scheduleNotificationButton3 = new ButtonView({
      superview: this.view,
      x: buttonPadding,
      y: this.scheduleNotificationButton1.style.y + buttonHeight + buttonPadding,
      width: buttonWidth,
      height: buttonHeight,
      title: "Schedule Notification 3",
      onClick: bind(this, function () {
        this.scheduleNotification(3);
      })
    });

    this.scheduleNotificationButton4 = new ButtonView({
      superview: this.view,
      x: buttonsColumn2X,
      y: this.scheduleNotificationButton3.style.y,
      width: buttonWidth,
      height: buttonHeight,
      title: "Schedule Notification 4",
      onClick: bind(this, function () {
        this.scheduleNotification(4);
      })
    });

    this.getNotificationButton = new ButtonView({
      superview: this.view,
      x: buttonPadding,
      y: this.scheduleNotificationButton3.style.y + buttonHeight + buttonPadding,
      width: buttonWidth,
      height: buttonHeight,
      title: "Get Notification 1",
      onClick: bind(this, function () {
        this.getNotification();
      })
    });

    this.removeNotificationButton = new ButtonView({
      superview: this.view,
      x: buttonsColumn2X,
      y: this.getNotificationButton.style.y,
      width: buttonWidth,
      height: buttonHeight,
      title: "Remove Notification 1",
      onClick: bind(this, function () {
        this.removeNotification();
      })
    });

    this.listNotificationButton = new ButtonView({
      superview: this.view,
      x: buttonPadding,
      y: this.getNotificationButton.style.y + buttonHeight + buttonPadding,
      width: buttonWidth,
      height: buttonHeight,
      title: "List Notifications",
      onClick: bind(this, function () {
        this.listNotifications();
      })
    });

    this.clearNotificationButton = new ButtonView({
      superview: this.view,
      x: buttonsColumn2X,
      y: this.listNotificationButton.style.y,
      width: buttonWidth,
      height: buttonHeight,
      title: "Clear Notifications",
      onClick: bind(this, function () {
        this.clearNotifications();
      })
    });

    this.overlay = new Overlay({
      superview: this.view,
      x: 0,
      y: 0,
      width: this.view.style.width,
      height: this.view.style.height,
      handleEvents: true
    });
    this.overlay.on('InputSelect', function () {
      this.hide();
    });

  };

  // show an overlay with a message - click to hide
  this.showMessage = function (message, message2) {
    this.overlay.show(message, message2 || 'Click to Hide');
  };


  /**
   * Functions that actually do things
   */
  this.scheduleNotification = function (id) {

    // get settings from id and radio groups
    var delayId = this.delayGroup.getChecked();
    var delay = {seconds: 10, minutes: 0};
    if (delayId === '5seconsd') {
      delay.seconds = 5;
    } else if (delayId === '10seconds') {
      delay.seconds = 10;
    } else if (delayId === '30seconds') {
      delay.seconds = 30;
    }

    // undefined = no sound, true for default, wav file for custom sound
    var sound = void 0;
    var soundId = this.soundGroup.getChecked();
    if (soundId === 'default') {
      sound = true;
    // } else if (soundId === 'custom') {
    //   sound = 'resources/sound/tada.wav';
    }

    // var icon = '';
    // var iconId = this.iconGroup.getChecked();
    // if (iconId === 'custom') {
    //   icon = 'resources/images/help.png';
    // }

    // build notification settings
    var settings = {
      name: "notification" + id,
      text: "Test Notification Text " + id,
      sound: sound,

      // ios only
      action: "See Awesome Notification " + id,

      // android only
      title: "Notification Test " + id,
      // icon: icon,
      vibrate: this.vibrateToggle.isChecked(),

      delay: delay,
      // can also use date instead of delay object

      userDefined: {
        customData: true
      }
    };
    // send a notification
    localNotify.add(settings);

    logger.log("Added notification", settings);
    this.showMessage("Sent " + settings.name);
  };

  this.getNotification = function () {
    localNotify.get('notification1', bind(this, function (exists) {
      var message = exists ?
        'Notification 1 Exists!' :
        'Notification 1 Does Not Exist';
      logger.log(message);
      this.showMessage(message, 'Click to Close');
    }));
  };

  this.clearNotifications = function () {
    localNotify.clear();
    var message = "Cleared All Notifications";
    this.showMessage(message, 'Click to Close');
    logger.log(message);
  };

  this.listNotifications = function () {
    logger.log("Listing notifications");
    localNotify.list(bind(this, function(notifications) {
      var message1 = notifications.length + " Notifications";
      var message2 = notifications.join(', ');
      this.showMessage(message1, message2);
      logger.log(message1, message2);
    }));
  };

  this.removeNotification = function () {
    localNotify.remove('notification1');
    var message = "Removed Notification 1";
    this.showMessage(message, 'Click to Close');
    logger.log(message);
  };
});

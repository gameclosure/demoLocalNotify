import ui.View as View;
import ui.TextView as TextView;
import animate;

exports = Class(View, function (supr) {
  this.init = function (opts) {

    this.fullOpacity = opts.opacity || .8;

    opts = merge(opts, {
      backgroundColor: 'black',
      opacity: 0,
      zIndex: -1
    });
    supr(this, 'init', [opts]);
    if (!opts.handleEvents) {
      this.setHandleEvents(false, true);
    }

    this.padding = 10;
    this.label = new TextView({
      superview: this,
      x: this.padding,
      y: this.style.height * .25,
      width: this.style.width - this.padding - this.padding,
      height: 100,
      color: "white",
      text: opts.text
    });

    this.label2 = new TextView({
      superview: this,
      x: this.padding,
      y: this.label.style.y + this.label.style.height + this.padding,
      width: this.style.width - this.padding - this.padding,
      height: 70,
      color: "white",
      text: opts.text2 || "Please Wait"
    });
  };

  this.setText = function (text, text2) {
    this.label.setText(text);
    text2 !== void 0 && this.label2.setText(text2);
  };

  this.show = function (text, text2) {
    if (text) {
      this.setText(text, text2);
    }
    this.style.zIndex = 1;
    animate(this)
      .now({ opacity: this.fullOpacity }, 500);
  };

  this.hide = function () {
    animate(this)
      .now({ opacity: 0 }, 500)
      .then(bind(this, function () {
        this.style.zIndex = -1;
      }));
  };
});

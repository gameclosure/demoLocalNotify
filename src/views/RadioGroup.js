import ui.View as View;
import src.views.RadioView as RadioView;

exports = Class(View, function (supr) {
  this.init = function (opts) {

    supr(this, 'init', [opts]);
    this.padding = 15;

    // save callback
    this.onChange = opts.onChange;

    // radio buttons
    this.options = [];
  };

  this.add = function (optionConfig) {
    this.options.push(new RadioView(merge(optionConfig, {
      superview: this,
      onChange: bind(this, this.setChecked)
    })));

    if (this.options.length === 1) {
      this.options[0].setChecked(true);
    }
  };

  this.setChecked = function (id) {
    // select the correct option
    for (var i = 0; i < this.options.length; i++) {
      var option = this.options[i];
      option.setChecked(option.id === id);
    }
  };

  this.getChecked = function () {
    for (var i = 0; i < this.options.length; i++) {
      var option = this.options[i];
      if (option.isChecked()) {
        return option.id;
      }
    }
    return void 0;
  };
});

import src.views.ToggleView as ToggleView;

exports = Class(ToggleView, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);

    this.id = opts.id;
    this.onImage = 'resources/images/ui/radio_on.png';
    this.offImage = 'resources/images/ui/radio_off.png';
    this._update();
  };

  this.toggle = function () {
    this.checked = !this.checked;
    this._update();
    this.onChange && this.onChange(this.id);
  };
});

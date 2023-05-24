
export const FormFieldMixin = (superClass) => class extends superClass {
  valueChangedListener(e) {
    this.emmitChange(e.target.value);
  }
  emmitChange(value) {
    this.dispatchEvent(new CustomEvent('new-input', {
      detail: {
        value,
        name: this.name
      }
    }));
  }
}
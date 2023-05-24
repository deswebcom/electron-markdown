/**
 * FormMixin - Description for mixin
 * @polymerMixin
 * @mixinFunction
 */
export const FormMixin = (superClass) => class extends superClass {
  inputUpdated(e) {
    let newData = {
      ...this.data
    }
    newData[e.detail.name] = e.detail.value;
    this.data = newData;
    //console.log('inputUpdated', newData);
    this.dispatchEvent(new CustomEvent('new-input', {
      bubbles: true,
      composed: true,
      detail: newData
    }));
  }
}
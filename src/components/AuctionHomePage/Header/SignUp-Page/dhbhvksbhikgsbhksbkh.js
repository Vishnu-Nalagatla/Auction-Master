import validator from "validator";
/**
return validations or errors in the forms
 */
function validateForm(form) {
  let elements = form.elements;
  let errors = {};
  let error;
  for (let index in elements) {
    let element = elements[index];
    let attributes = element.attributes;
    if (attributes && attributes.validations) {
      error = validateFileld(
        attributes.validations.nodeValue,
        element.name,
        element.value
      );
      if (attributes.customvalue) {
        error = validateFileld(
          attributes.validations.nodeValue,
          attributes.name.value,
          attributes.customvalue.value
        );
      }
    }
    errors = { ...error, ...errors };
  }
  return errors;
}
/**
check validations for different field type
 */
function validateFileld(fields, name, value) {
  let errors = {};
  let validators = fields.split(",");
  for (var i = 0; i < validators.length; i++) {
    switch (validators[i]) {
      case "input":
        errors[name] = false;
        var patt = new RegExp("[a-zA-Z][a-zA-Z ]*");
        var res = patt.test(value);
        if (!res) {
          errors[name] = true;
        }
        break;
      case "password":
        errors[name] = false;
        var passPatt = new RegExp("[A-Z][a-z][0-9][[@] || [#] || [$] || [*] || [&]] ");
        var passRes = passPatt.test(value);
        if (!passRes) {
          errors[name] = true;
        }
        break;
      case "required":
        errors[name] = false;
        if (!value || validator.isEmpty(value)) {
          errors[name] = true;
        }
        break;
      case "phone":
        errors[name] = false;
        var pattern = new RegExp("[0-9]");
        var resp = pattern.test(value);
        if (!resp) {
          errors[name] = true;
        }
        break;
      case "email":
        errors[name] = false;
        if (!validator.isEmail(value)) {
          errors[name] = true;
        }
        break;
      default:
    }
  }
  return errors;
}
export { validateForm, validateFileld };
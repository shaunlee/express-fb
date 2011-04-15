# express-fb - form builder

  form builder based on express and jade

## Dependences

  - express-form
  - jade

## Examples

    != partial('form/hidden', {name: 'hide', value: 'yes'})
    .form-item.text: label Username
      != partial('form/text', {name: 'username', id: 'u_username'})
      .tips bla bla bla ...
    .form-item.text: label Password
      != partial('form/password', {name: 'password', placeholder: 'Input password here'})
    .form-item.text: label Description
      != partial('form/textarea', {name: 'description', value: 'hello world'})
    .form-item.choice: label Gender
      != partial('form/radios', {name: 'gender', value: 'Female', options: ['Male', 'Female']})
    .form-item.choice: label Gender2
      != partial('form/radios', {name: 'gender2', value: '2', options: {1: 'Male', 2: 'Female'}})
    .form-item.choice: label Interested of
      != partial('form/checkboxes', {name: 'interested', value: ['2', '3'], options: {1: 'One', 2: 'Two', 3: 'Three'}})
    .form-item.choice: label Interested of others
      != partial('form/checkboxes', {name: 'interested2', value: ['Two'], options: ['One', 'Two', 'Three']})
    .form-item.list: label Dropdown
      != partial('form/select', {name: 'dropdown', value: '3', options: {1: 'One', 2: 'Two', 3: 'Three'}})
    .form-item.list: label Dropdown of others
      != partial('form/select', {name: 'dropdown2', value: 'Two', options: ['One', 'Two', 'Three']})
    .form-item.list: label List
      != partial('form/multiselect', {name: 'list', value: ['2', '3'], options: {1: 'One', 2: 'Two', 3: 'Three'}})
    .form-item.list: label List of others
      != partial('form/multiselect', {name: 'list2', value: ['One', 'Three'], options: ['One', 'Two', 'Three']})
    .form-item.text: label File
      != partial('form/file', {name: 'file'})
    .form-item.check
      != partial('form/checkbox', {name: 'remember', value: 1, checked: true})
      label(for='remember') Remember me
    != partial('form/submit', {value: 'Submit'})


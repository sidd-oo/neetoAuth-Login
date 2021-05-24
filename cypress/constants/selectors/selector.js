export const loginSelectors = {
    emailField: '[data-cy="login-email-text-field"]',
    passwordField: '[data-cy="login-password-text-field"]',
    loginSubmit: '[data-cy=login-submit-button]',
    loginSuccessful : '[data-cy=heading]'
};

export const profileImageUploadSelector = {
    imgRemoveBtn: '[data-cy=profile-image-remove-button]',
    firstName: '[data-cy=profile-first-name-text-field]',
    country: '[data-cy=select-country-select-container-wrapper]',
    timezone: '[data-cy=select-time-zone-select-container-wrapper]',
    DDMMYY: ':nth-child(2) > [data-cy=profile-date-format-select]',
    profileSubmit: '[data-cy=profile-submit-button]',
    toasterMessageContainer: '[data-cy=toastr-message-container]',
    uploadImg: '[data-cy="profile-image-upload-file-field"]',
    changeImg: '[data-cy=profile-image-upload-label]'
};




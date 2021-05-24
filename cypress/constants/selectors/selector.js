export const loginSelectors = {
    emailField: '[data-cy="login-email-text-field"]',
    passwordField: '[data-cy="login-password-text-field"]',
    loginSubmit: '[data-cy=login-submit-button]',
    loginSuccessful : '[data-cy=heading]',
    profileIcon: '.bp3-popover-target > .relative'
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

export const tabs = {
    emailChangeTabClick: '[data-cy=profile-settings-change-email-tab]',
    passwordChangeTabClick: '[data-cy=profile-settings-change-password-tab]',
    profileTabClick: '[data-cy="nav-profile-link"]',
    logout: '[data-cy=profile-settings-logout-button]'
};

export const emailChangeSelectors = {
    emailField: '[data-cy=change-email-new-email-text-field]',
    passwordField: '[data-cy=change-email-current-password-text-field]',
    submitButton: '[data-cy=change-email-submit-button]',
};

export const passwordChangeSelector = {
    currentPasssword: '[data-cy=change-password-current-password]',
    changePassword: '[data-cy=change-password-new-password]',
    confirmPassword: '[data-cy=change-password-confirm-new-password]',
    submitButton: '[data-cy=change-password-submit-button]',
};

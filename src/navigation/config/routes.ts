const AUTHENTICATE_ROUTE = {
    LOGIN: '@AUTHENTICATE_ROUTE/LOGIN',
    REGISTER: '@AUTHENTICATE_ROUTE/REGISTER',
    FORGOTPASS: '@AUTHENTICATE_ROUTE/FORGOTPASS',
    SENDOTP: '@AUTHENTICATE_ROUTE/SENDOTP',
    CHANGEPASS: '@AUTHENTICATE_ROUTE/CHANGEPASS',
};

const APP_ROUTE = {
    MAIN_TAB: 'MAIN_TAB',
};

const HOME_ROUTE = {
    ROOT: 'HOME_ROOT',
    HOME: 'HOME',
    HOME_DETAIL: 'HOME_DETAIL',
    WEB_VIEW: 'WEB_VIEW',
    HOME_DATA: 'HOME_DATA',
    HOME_USER_LIST: 'HOME_USER_LIST',
};

const SETTING_ROUTE = {
    ROOT: 'SETTING_ROOT',
};

const NOTIFICATION_ROUTE = {
    ROOT: 'NOTIFICATION_ROOT',
};

const TAB_NAVIGATION_ROOT = {
    HOME_ROUTE,
    SETTING_ROUTE,
    NOTIFICATION_ROUTE,
};

export { APP_ROUTE, TAB_NAVIGATION_ROOT, AUTHENTICATE_ROUTE };

import Button from './Button';

export default {
    title: 'Buttons',
    tags: ['autodocs'],
    render: (options) => {
        return Button.createBtn(options).rootEl;
    },
    argTypes: {
    },
};

export const LogIn = {
    args: {
        mode: 'logIn',
    },
};

export const LogOut = {
    args: {
        mode: 'logOut',
    },
};

export const Submit = {
    args: {
        mode: 'submit',
    },
};

export const NavigationLogInButton = {
    args: {
        mode: 'navLink',
        type: 'logIn',
    },
};

export const NavigationLogOutButton = {
    args: {
        mode: 'navLink',
        type: 'logOut',
    },
};

export const NavigationLinkButton = {
    args: {
        mode: 'navLink',
        type: 'userProfile',
    },
};

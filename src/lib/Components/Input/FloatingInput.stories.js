import Input from './Input';

export default {
    title: 'Inputs',
    tags: ['autodocs'],
    render: (options) => {
        return Input.createFloatingInput(options).rootEl;
    },
    argTypes: {
    },
};

export const FloatingUsernameInput = {
    args: {
        id: 'floatingLogInInput',
        labelText: 'Username',
        inputType: 'text',
    },
};

export const FloatingPasswordInput = {
    args: {
        id: 'floatingLogInPassword',
        labelText: 'Password',
        inputType: 'password',
    },
};

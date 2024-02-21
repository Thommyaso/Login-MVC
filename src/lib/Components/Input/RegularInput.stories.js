import Input from './Input';

export default {
    title: 'Inputs',
    tags: ['autodocs'],
    render: (options) => {
        return Input.createRegularInput(options).rootEl;
    },
    argTypes: {
    },
};

export const RegularNameInput = {
    args: {
        id: 'regularLogInInput',
        labelText: 'Name:',
        inputType: 'text',
    },
};

export const RegularPasswordInput = {
    args: {
        id: 'regularLogInPassword',
        labelText: 'Password:',
        inputType: 'password',
    },
};

export const RegularAgeInput = {
    args: {
        id: 'regularLogInPassword',
        labelText: 'Age:',
        inputType: 'number',
    },
};

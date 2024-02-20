import Input from './Input';

export default {
    title: 'Inputs',
    tags: ['autodocs'],
    render: (options) => {
        return Input.createInput(options);
    },
    argTypes: {
    },
};

export const TextInput = {
    args: {
        mode: 'text',
    },
};

export const NumberInput = {
    args: {
        mode: 'number',
    },
};

export const PasswordInput = {
    args: {
        mode: 'password',
    },
};

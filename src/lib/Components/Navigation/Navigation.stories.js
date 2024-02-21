import Navigation from './Navigation';

export default {
    title: 'Navigation',
    tags: ['autodocs'],
    render: () => {
        return Navigation.createNav().rootEl;
    },
    argTypes: {
    },
};

export const DefaultNavigation = {
    args: {
    },
};
